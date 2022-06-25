import React from "react";
import { BrowserRouter as Router, useMatch, useRoutes, Routes, Link, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";

import Dashboard from "./Dashboard";
import About from "./About";
import Home from "./Home";
import NotFound from "./NotFound";
import NavbarAdi from "./NavbarAdi";

function Landingpage() {
  return (
    <div className="landingpage">
      <NavbarAdi />
      <Outlet />
    </div>
  );
}

export default Landingpage;
