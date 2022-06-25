import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useIntl } from "react-intl";
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from "react-pro-sidebar";
import { Row, Col } from "react-bootstrap";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Switch from "@mui/material/Switch";
import AppsIcon from "@mui/icons-material/Apps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faThList, faHome, faEnvelope, faUnlockAlt, faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import sidebarBg from "../assets/bg2.jpg";
import "../App.css";

const Aside = ({ image, collapsed, rtl, toggled, handleCollapsedChange, btnCollapsedClose, handleToggleSidebar, handleImageChange }) => {
  const intl = useIntl();
  const navigate = useNavigate();
  const [listEvent, setListEvent] = useState([]);

  const baseUrl = "https://api.adicara.kiarta.id/api";
  const token = sessionStorage.getItem("token");

  var config = {
    method: "get",
    url: baseUrl + "/profile",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios(config)
      .then((res) => {
        console.log(res);
        console.log(res.data.events);
        setListEvent(res.data.events);
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      });
  }, []);

  return (
    <ProSidebar className="navadi" image={image ? sidebarBg : false} collapsed={collapsed} breakPoint="md">
      <SidebarHeader>
        <div className="headernav">
          <div className="adicara-title">
            <Menu iconShape="circle">
              <MenuItem>
                <Link to="/" />
                {intl.formatMessage({ id: "Adicara" })}
              </MenuItem>
            </Menu>
          </div>
          <div className="closeaside">
            <ChevronLeftIcon onClick={btnCollapsedClose} />
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<AppsIcon />} suffix={<span className="badge red">{intl.formatMessage({ id: "new" })}</span>}>
            <Link to="/dashboard" />
            {intl.formatMessage({ id: "Dashboard" })}
          </MenuItem>
        </Menu>
        <Menu iconShape="circle">
          {listEvent.map((data) => {
            return (
              <SubMenu title={intl.formatMessage({ id: `${data.nama_event}` })} icon={<FontAwesomeIcon icon={faCalendarDay} />}>
                <MenuItem>
                  <Link to={`/dashboard/${data.id}/workspace`} /> {intl.formatMessage({ id: "Workspace" })}{" "}
                </MenuItem>
                <MenuItem>
                  <Link to={`/dashboard/${data.id}/setting`} />
                  {intl.formatMessage({ id: "Setting" })}{" "}
                </MenuItem>
                <MenuItem>
                  <Link to={`/dashboard/${data.id}/member`} />
                  {intl.formatMessage({ id: "Member" })}{" "}
                </MenuItem>
              </SubMenu>
            );
          })}
        </Menu>
      </SidebarContent>
      <div className="block">
        <Switch onChange={handleImageChange} checked={image} />
        <span> {intl.formatMessage({ id: "image" })}</span>
      </div>

      <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px",
          }}
        >
          <a href="https://www.instagram.com/crevart_st/" target="_blank" className="sidebar-btn" rel="noopener noreferrer">
            <span style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}>{intl.formatMessage({ id: "join us to develop" })}</span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
