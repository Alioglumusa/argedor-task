import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Tweets = () => {
  return (
    <div className="mt-8">
      <div className="text-left ml-3">
        <p className="font-semibold text-3xl">Tweets</p>
      </div>
      <div className="md:flex block justify-between">
        {/* Left Side */}
        <div className="p-2 flex items-center justify-center tweetContainer">
          <div className="bg-white hover:bg-blue-50 transition-all dark:bg-gray-800 border-gray-200 dark:border-gray-800 p-4 rounded-xl border max-w-2xl-">
            <div className="flex justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white grid place-content-center rounded-md shadow-md">
                  <AiOutlineTwitter color="#60A5FA" size={24} />
                </div>
                <div className="ml-1.5 text-sm leading-tight flex gap-2 ">
                  <span className="text-black dark:text-white font-bold block ">
                    b2v_gupta
                  </span>
                  <span><BsFillPatchCheckFill color="#89C9F9" size={18}/></span>
                  <span className="text-gray-500 dark:text-gray-400 font-normal block">
                    b2v_gupta
                  </span>
                </div>
              </div>
              <svg
                className="birdIcon h-6 w-auto inline-block fill-current transition-colors duration-300 text-gray-400 dark:text-white hover:text-blue-400"
                viewBox="0 0 24 24"
              >
                <g>
                  <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                </g>
              </svg>
            </div>
            <p className="text-black text-left dark:text-white block text-xl leading-snug mt-3 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem.
            </p>
            <div className="flex justify-end font-normal text-gray-500">
              <p>16:55:44</p>
            </div>
          </div>
        </div>
        <div>
          {/* Right Side */}
          <div className="p-2 flex items-center justify-center tweetContainer">
            <div className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-800 p-4 rounded-xl border max-w-2xl- hover:bg-blue-50 transition-all">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white grid place-content-center rounded-md shadow-md">
                    <AiOutlineTwitter color="#60A5FA" size={24} />
                  </div>
                  <div className="ml-1.5 text-sm leading-tight flex gap-2 ">
                    <span className="text-black dark:text-white font-bold block ">
                      predict_22
                    </span>
                    <span><BsFillPatchCheckFill color="#89C9F9" size={18}/></span>
                    <span className="text-gray-500 dark:text-gray-400 font-normal block">
                      predict_22
                    </span>
                  </div>
                </div>
                <svg
                  className="birdIcon h-6 w-auto inline-block fill-current transition-colors duration-300 text-gray-400 dark:text-white hover:text-blue-400"
                  viewBox="0 0 24 24"
                >
                  <g>
                    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                  </g>
                </svg>
              </div>
              <p className="text-left text-black dark:text-white block text-xl leading-snug mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
              </p>
              <div className="flex justify-end font-normal text-gray-500">
                <p>16:55:44</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweets;
