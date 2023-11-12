import React from "react";
import DownloadBar from "./DownloadBar";
import WorkSpace from "./WorkSpace";
import Tweets from "./Tweets";

const Content = ({open}) => {
  return (
  <div className={`${open ? "ml-[350px]" : "ml-[70px]" } absolute top-20 transition-all`}>
  <DownloadBar/>
  <WorkSpace/>
  <Tweets/>
  </div>
  );
};

export default Content;