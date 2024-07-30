import {
  actDelOneMessages,
  actUpdateOneMessages,
  selectAllMessagesCR,
} from "@/rtk/slices/messagesSlice";
import { actUpdateOneItemInList } from "@/rtk/slices/partnersListSlice";
import { patcher } from "@/rtk/store";
import { socket } from "@/socket";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import ShowFileInMessage from "./ShowFileInMessage";
import { formatTime } from "@/utils/formatTime";
import { parseDateString } from "@/utils/parseDateString";

export default function EachMessage({ item }) {
  const { text, sentAt, chatId, isPartnerRead, file, senderId } = item;
  const userId = useSelector((st) => st.users._id);
  const secRef = useRef();
  const { chatName, partnerInfo } = useSelector((st) => st.currentChat);

  const [editableText, setEditableText] = useState(text);
  const [showActions, setShowActions] = useState(false);
  const isMyMsg = userId === senderId;
  const messageTime = parseDateString(sentAt);

  useEffect(() => {
    setEditableText(text);
  }, [text]);
  const handleTextChange = (e) => {
    if (isMyMsg) {
      setEditableText(e.target.textContent);
    }
  };

  const editMessage = () => {
    socket.emit("edit message", {
      sentAt,
      text: editableText,
      partnerId: partnerInfo?._id,
      sender: senderId,
      chatName,
    });
  };

  !isMyMsg &&
    useEffect(() => {
      const _observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            socket.emit("seen message", { sentAt, chatId });
            _observer.unobserve(secRef.current);
          }
        },
        { threshold: 0.1 }
      );

      if (secRef.current) {
        _observer.observe(secRef.current);
      }

      return () => {
        if (secRef.current) {
          _observer.unobserve(secRef.current);
        }
      };
    }, [secRef]);

  const handleSeenMessageNotification = ({ sentTime }) => {
    patcher(actUpdateOneMessages({ id: sentTime, changes: { isPartnerRead: true } }));
  };

  socket.on("seen message notification", handleSeenMessageNotification);

  const delMessage = () => {
    console.log("sentAt to back: ", sentAt);
    socket.emit("delete message", { sentAt, chatId, chatName });
  };

  const toggleActions = () => {
    setShowActions(!showActions);
  };

  const imgProfile = () =>
    partnerInfo.profileImg ? (
      <img
        alt="user profile"
        className="w-10 h-10 rounded-full"
        src={partnerInfo.profileImg}
      />
    ) : (
      <div className="border-4 rounded-full w-10 h-10 flex items-center justify-center text-xl capitalize">
        {partnerInfo.username.substring(0, 1)}
      </div>
    );

  return (
    <section ref={secRef} className={`flex mb-4 ${isMyMsg ? "justify-end" : "justify-start"}`}>
      {!isMyMsg && (
        <div className="flex items-start gap-2 mb-2">
          {imgProfile()}
          <div className="flex flex-col text-purple-800">
            {/* <h4>{partnerInfo.username}</h4> */}
            <div
              className={`relative p-4 rounded-lg max-w-xs ${
                isMyMsg ? "bg-purple-500 text-white" : "bg-gray-300 text-black"
              }`}
            >
              <ShowFileInMessage file={file} />
              <p
                className="text-left mt-2"
                contentEditable={isMyMsg}
                onInput={handleTextChange}
                suppressContentEditableWarning={true}
              >
                {editableText}
              </p>
              <h6 className={`text-right ${isMyMsg ? "text-white" : "text-gray-600"} mt-1`}>
                {formatTime(messageTime)}
              </h6>
              {isMyMsg && (
                <>
                  <button onClick={toggleActions} className="absolute top-0 right-0 mt-1 mr-1">
                    ...
                  </button>
                  {showActions && (
                    <div className="flex space-x-2 mt-2">
                      <button className="px-2 py-1 bg-gray-200 rounded" onClick={editMessage}>
                        edit
                      </button>
                      <button className="px-2 py-1 bg-gray-200 rounded" onClick={delMessage}>
                        delete
                      </button>
                    </div>
                  )}
                  <div className="mt-1">
                    {isPartnerRead ? <span>&#10004;&#10004;</span> : <span>&#10004;</span>}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      {isMyMsg && (
        <div className="flex flex-col items-end">
          <div
            className={`relative p-4 rounded-lg max-w-xs ${
              isMyMsg ? "bg-orange-400 text-white" : "bg-gray-100 text-black"
            }`}
          >
            <ShowFileInMessage file={file} />
            <p
              className="text-left mt-2"
              contentEditable={isMyMsg}
              onInput={handleTextChange}
              suppressContentEditableWarning={true}
            >
              {editableText}
            </p>
            <h6 className={`text-right ${isMyMsg ? "text-white" : "text-gray-600"} mt-1`}>
              {formatTime(messageTime)}
            </h6>
            {isMyMsg && (
              <>
                <button onClick={toggleActions} className="">
                  ...
                </button>
                {showActions && (
                  <div className="flex space-x-2 mt-2">
                    <button className="px-2 py-1 bg-orange-600 rounded" onClick={editMessage}>
                      edit
                    </button>
                    <button className="px-2 py-1 bg-orange-600 rounded" onClick={delMessage}>
                      delete
                    </button>
                  </div>
                )}
                <div className="mt-1">
                  {isPartnerRead ? <span>&#10004;&#10004;</span> : <span>&#10004;</span>}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
