import React, { useState } from "react";
import Aside from "./Aside";
import DMain from "./DMain";
import { Outlet } from "react-router-dom";

function Layout({ setLocale }) {
  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCollapsed(event.target.checked);
  };

  const btnCollapsedOpen = () => {
    setCollapsed(false);
  };
  const btnCollapsedClose = () => {
    setCollapsed(true);
  };

  const handleRtlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRtl(event.target.checked);
    setLocale(event.target.checked ? "ar" : "en");
  };
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.checked);
  };

  return (
    <div className={`app ${rtl ? "rtl" : ""} `}>
      <Aside image={image} collapsed={collapsed} btnCollapsedClose={btnCollapsedClose} handleCollapsedChange={handleCollapsedChange} handleImageChange={handleImageChange} />
      <DMain rtl={rtl} handleRtlChange={handleRtlChange} btnCollapsedOpen={btnCollapsedOpen} />
    </div>
  );
}

export default Layout;
