import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  return (
    <>
     <div className="hidden sm:flex  items-center h-[2em] w-[25%] bg-[#1e1e1e] rounded-full border-2 border-gray-400 hover:border-green-400  overflow-hidden">
            <div className="flex items-center justify-center w-[2.5em] h-full">
              <IoSearchOutline className="text-gray-400 text-lg" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="flex-1 h-full outline-none pl-3 text-sm text-white "
            />
          </div>
         <div className="flex sm:hidden">
              <IoSearchOutline className="text-gray-400 text-lg" />
    
         </div>
         </>
  )
}

export default SearchBar