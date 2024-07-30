import { inputClasses } from "@/styles/commonClasses";
import { useState } from "react";
import SearchRes from "./SearchRes";
import { patcher } from "@/rtk/store";
import { useSearchUsersMutation } from "@/rtk/queries/serchUser/serchUser";
import { actDelSearchRes } from "@/rtk/slices/searchSlice";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  const [searchUsers, { isLoading, isError, error, isSuccess }] = useSearchUsersMutation();
  const [query, setQuery] = useState(null);

  const searchResHandel = (e) => {
    if (query) query.abort();

    // clear previous list
    patcher(actDelSearchRes());

    // check input length
    const val = e.target.value.trim();
    if (val.length < 3) return;

    // send request
    setQuery(searchUsers({ text: val }));
  };

  return (
    <div className="p-4 border-b border-gray-200">
      <div className="relative">
        <input
          type="text"
          placeholder="Search Username"
          className={inputClasses}
          onChange={searchResHandel}
        />
        {isLoading && <span className="text-center py-2 text-gray-500">Loading...</span>}
        {isError && (
          <div className="flex flex-col items-center mt-4 text-gray-500">
            <FaSearch className="text-4xl mb-2" />
            <span className="text-sm text-center">
              No Results - check the spelling or try a new search.
            </span>
          </div>
        )}
      </div>
      <SearchRes />
    </div>
  );
}
