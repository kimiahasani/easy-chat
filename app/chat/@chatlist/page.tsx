import Search from "../components/Search";

export default function ChatList() {
  return (
    <div className="border border-black p-4 h-full ">
      <Search />
      <section className="flex border-r border-gray-300 justify-between mb-4">
        <p>All chat and unread</p>
      </section>
      <section>
        <p>List Chat</p>
      </section>
    </div>
  );
}
