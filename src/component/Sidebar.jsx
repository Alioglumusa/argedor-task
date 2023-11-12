import { useState,useEffect,useRef } from "react";


//Images
import logo from "../test_logo.svg";
import imageProfile from "../assets/image-pp.jpg";

//Icons
import { LuLayoutDashboard } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa";
import {
  BsPlayCircle,
  BsPaperclip,
  BsFillPinFill,
  BsPin,
} from "react-icons/bs";
import { AiOutlineCalendar, AiOutlinePartition } from "react-icons/ai";

const sideBarItem = [
  {
    id: 1,
    title: "Workspace",
    icon: <LuLayoutDashboard  size={24} />,
    angleDown: <FaAngleDown  size={24} />,
  },
  {
    id: 2,
    title: "Subscriptions",
    icon: <BsPlayCircle  size={24} />,
    angleDown: <FaAngleDown  size={24} />,
  },
  {
    id: 3,
    title: "Calendar",
    icon: <AiOutlineCalendar  size={24} />,
  },
  {
    id: 4,
    title: "Suggester",
    icon: <AiOutlinePartition  size={24} />,
    angleDown: <FaAngleDown  size={24} />,
  },
  {
    id: 5,
    title: "Reports",
    icon: <BsPaperclip  size={24} />,
    angleDown: <FaAngleDown  size={24} />,
  },
];

const Sidebar = ({ open, pin, setOpen, setPin }) => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
  };

  useEffect(() => {
      console.log(screenWidth);
      console.log(screenHeight);
      // Add event listener to update dimensions on window resize
      window.addEventListener('resize', handleResize);

      // Cleanup by removing event listener on component unmount
      return () => {
          window.removeEventListener('resize', handleResize);
      };
         }, [window.innerWidth,window.innerHeight]);


  const expandSidebar = () => {
    setOpen(true);
  };
  
  const collapseSidebar = () => {
    if (pin) {
      return;
    }
    setOpen(false);
  };

  const pinMenu = () => {
    setPin((value) => !value);
  };

  return (
    <div onMouseOver={screenWidth > 760 ? expandSidebar : null} onMouseOut={collapseSidebar} className="h-screen md:relative fixed">
      {/* //Header Blue Side */}
      <div
        className={` ${
          open ? "w-[350px]" : "w-[68px] "
        }  bg-dark-purple h-[280px] transition-all`}
      >
        <div className="flex justify-between py-5 px-3">
          <div className="flex gap-4">
            <img
              src={logo}
              width="40px"
              className="cursor-pointer duration-500"
            />
            <span className="text-white font-normal text-lg mt-1">
              New Task
            </span>
          </div>
          <div onClick={pinMenu} className="cursor-pointer">
            {!pin ? (
              <BsPin color="white" size={32} />
            ) : (
              <BsFillPinFill color="white" size={32} />
            )}
          </div>
        </div>
        <div className="flex justify-center items-center h-[50%]">
          <span className="text-white font-normal text-xl">
            {open ? "Musa" : ""}
          </span>
        </div>
      </div>
      {/* //Header Dark Side */}
      <div
        className={` ${
          open ? "w-[350px]" : "w-[68px] "
        }  bg-black  transition-all md:h-[1360px] h-screen lg:h-[639px] `}
      >
        <div className="flex justify-center ">
          <img
            className="-mt-12 border-solid border-[10px] border-black rounded-full"
            src={imageProfile}
            alt="image_profile"
            width={110}
          />
        </div>
        <div>
          <h1 className="text-gray-500 text-start ml-4 font-semibold text-lg">
            {open ? "APPLICATION" : ""}
          </h1>
          {/* //SideBar */}
          <div className="h-full px-3 py-4 overflow-y-auto  text-white">
            {sideBarItem.map((val) => (
              <>
                <ul key={val.item} className="space-y-2 font-medium ">
                  <li className="hover:text-black">
                    <button
                      type="button"
                      className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                      aria-controls="dropdown-example"
                      data-collapse-toggle="dropdown-example"
                    >
                      <i className="text-white">{val.icon}</i>
                      <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap text-white text-lg ml-2 ">
                        {open ? val.title : ""}
                      </span>
                      <i className="text-white ">{open ? val.angleDown : ""}</i>
                    </button>
                  </li>
                </ul>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
