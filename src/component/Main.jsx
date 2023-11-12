import { useState } from "react";
//Components
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Content from "./Content";

const Main = () => {
  const [open, setOpen] = useState(false);
  const [pin, setPin] = useState(false);

  return (
    <>
      <Navbar />
      <Sidebar open={open} pin={pin} setOpen={setOpen} setPin={setPin} />
      <Content open={open} />
    </>
  );
};
export default Main;
