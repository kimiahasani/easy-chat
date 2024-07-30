"use client";
import Link from "next/link";
import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="top-4 right-4">
      <div className="relative inline-block text-left">
        <button
          onClick={toggleMenu}
          aria-label="Options"
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M2.5 5a1.5 1.5 0 100-3h15a1.5 1.5 0 100 3h-15zm0 7a1.5 1.5 0 100-3h15a1.5 1.5 0 100 3h-15zm0 7a1.5 1.5 0 100-3h15a1.5 1.5 0 100 3h-15z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
            <Link href={"/chat"} className="group flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 2.511.936 4.8 2.49 6.535L2 22l3.415-2.34C7.37 21.06 9.606 22 12 22zm0-2c-2.396 0-4.633-.94-6.27-2.505l-.857.585L5 15.242C3.44 13.1 2.5 10.613 2.5 8c0-5.25 4.25-9.5 9.5-9.5s9.5 4.25 9.5 9.5-4.25 9.5-9.5 9.5z" />
                </svg>
                Chat
                </Link>
                
               
              <Link
              href={"/chat-AI"}
                className="group flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-15c-.83 0-1.5.67-1.5 1.5S11.17 8 12 8s1.5-.67 1.5-1.5S12.83 5 12 5zm4.5 1.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5S13.17 8 14 8s1.5-.67 1.5-1.5zm-5.5 5h-1v1h1v-1zm0 3h-1v1h1v-1zm5 0h-1v1h1v-1zm0-3h-1v1h1v-1zm-6.5 0h-1v1h1v-1zm0 3h-1v1h1v-1zM9 11h6v5H9z" />
                </svg>
                Chatbot
                <span className="ml-auto text-xs text-gray-500"></span>
              </Link>

              <Link
                href={"/about-Easy-Chat"}
                className="group flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 1C4.48 1 0 5.48 0 11c0 4.41 3.16 8.15 7.4 8.84-.11-.57-.2-1.45.04-2.08.21-.56 1.38-3.57 1.38-3.57s-.35-.71-.35-1.76c0-1.65.96-2.88 2.16-2.88.96 0 1.43.72 1.43 1.59 0 .97-.62 2.42-.95 3.77-.27 1.15.57 2.09 1.68 2.09 2.02 0 3.57-2.13 3.57-5.2 0-2.72-1.96-4.63-4.77-4.63-3.26 0-5.18 2.45-5.18 4.98 0 .99.37 2.06.83 2.64.09.11.1.2.07.31-.08.34-.28 1.07-.32 1.22-.05.21-.17.26-.39.16-1.45-.6-2.36-2.48-2.36-4 0-3.25 2.37-6.23 6.84-6.23 3.6 0 6.4 2.57 6.4 6.01 0 3.57-2.24 6.44-5.36 6.44-1.05 0-2.04-.55-2.38-1.17 0 0-.57 2.17-.71 2.67-.21.78-.63 1.56-1 2.17.91.27 1.87.42 2.87.42 5.52 0 10-4.48 10-10S15.52 1 10 1z" />
                </svg>
                About Easy Chat
                <span className="ml-auto text-xs text-gray-500"></span>
              </Link>
              <Link
                href={"/profile"}
                className="group flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                Profile
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
