import React from "react";
import "./App.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, useMatch, useRoutes, Routes, Link, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// core styles
import "./scss/mainstyle.scss";

import Dashboard from "./components/Dashboard";
import DContent from "./components/DContent";
import Workspace from "./components/Workspace";
import Setting from "./components/Setting";
import Member from "./components/Member";
import Kanban from "./components/Kanban/Kanban";

import Landingpage from "./components/Landingpage";
import About from "./components/About";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Profile from "./components/SettingUser";
import NewEvent from "./components/NewEvent";

ReactDOM.render(
  <div className="singlepage">
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<DContent />} />
          <Route path="profile" element={<Profile />} />
          <Route path="newevent" element={<NewEvent />} />
          <Route path=":id/workspace" element={<Workspace />} />
          <Route path=":id/workspace/:sieId" element={<Kanban />} />

          <Route path=":id/setting" element={<Setting />} />
          <Route path=":id/member" element={<Member />} />
        </Route>
      </Routes>
    </Router>
  </div>,
  document.getElementById("root")
);
