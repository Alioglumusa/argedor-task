import React from 'react'
import { BiSolidCloudDownload } from "react-icons/bi";

const DownloadBar = () => {
  return (
    <div className="flex justify-end items-center bg-gradient-to-l from-slate-800 ... h-16">
      <button type="button" className="flex mr-[75px] gap-3  mt-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
      Download
      <BiSolidCloudDownload color="black" size={24}/>
        </button>
    </div>
  )
}

export default DownloadBar