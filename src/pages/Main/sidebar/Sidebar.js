import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
// css
import "./sidebar.css";
import "../AskQuestion/askQues.css";
// components
import { dashBordRoutes } from "../../../routes";
import Button from "../../../components/button/Button";
// imgs
import logo from "../../../assets/imgs/logo.png";
import logo2 from "../../../assets/imgs/logo2.png";
import question from "../../../assets/imgs/questionMark.svg";
import profile from "../../../assets/imgs/clone of photo.png";

export default function Sidebar({ showAsk, setShowAsk }) {
  const [showSideBar, setShowSideBar] = useState(true);
  const role = localStorage.getItem("userRole");
  return (
    <div
      className={showSideBar ? "sidebar" : "sidebar hide"}
      style={{ zIndex: showAsk ? -1 : 1 }}
    >
      <div className="img-logo">
        <img
          src={showSideBar ? logo : logo2}
          alt=""
          style={{
            marginLeft: !showSideBar && "20px",
            width: !showSideBar && "50%",
          }}
        />
      </div>
      <div className="icon" onClick={() => setShowSideBar(!showSideBar)}>
        <Icon
          icon={
            showSideBar ? "mdi:keyboard-arrow-left" : "mdi:keyboard-arrow-right"
          }
          style={{
            marginLeft: !showSideBar && "2px",
          }}
        />
      </div>
      <div className="routes">
        {dashBordRoutes.map((route, index) =>
          route.layout === "admin" ? (
            <div
              key={index}
              style={{
                width: "100%",
                // display: role === "admin" ? "block" : "none",
              }}
            >
              <NavLink
                to={route.path}
                className="link"
                activeclassname="active"
                style={{ justifyContent: !showSideBar && "center" }}
              >
                {showSideBar ? (
                  <div
                    className="route-name"
                    style={{ textTransform: "capitalize" }}
                  >
                    {route.icon}
                    {route.name}
                  </div>
                ) : (
                  <div className="route-name">{route.icon}</div>
                )}
              </NavLink>
            </div>
          ) : (
            <div
              key={index}
              style={{
                width: "100%",
                // display: role === "user" ? "block" : "none",
              }}
            >
              <NavLink
                to={route.path}
                className="link"
                activeclassname="active"
                style={{ justifyContent: !showSideBar && "center" }}
              >
                {showSideBar ? (
                  <div
                    className="route-name"
                    style={{ textTransform: "capitalize" }}
                  >
                    {route.icon}
                    {route.name}
                  </div>
                ) : (
                  <div className="route-name">{route.icon}</div>
                )}
              </NavLink>
            </div>
          )
        )}
      </div>
      <button
        className="btn-1"
        onClick={() => setShowAsk(true)}
        // style={{ display: role === 1 ? "none" : "block" }}
      >
        <img src={question} alt="" />
        {showSideBar && "Ask A Question"}
      </button>
      <div className="logout">
        <div className="info">
          <div className="img">
            <img src={profile} alt="" />
          </div>
          <div
            className="sub-info"
            style={{ display: showSideBar ? "block" : "none" }}
          >
            <p>Product Designer</p>
            <p>Maya AB</p>
          </div>
        </div>
        <Button
          title={
            <span
              onClick={() => localStorage.removeItem("userToken")}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon
                icon={"solar:logout-2-outline"}
                style={{ fontSize: "18px", marginRight: "5px" }}
              />
              logout
            </span>
          }
        />
      </div>
    </div>
  );
}
