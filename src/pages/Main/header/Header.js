import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// css files
import "./header.css";
// images
import ShortInfo from "./shortinfo/ShortInfo";
import ProfileImg from "../../../assets/imgs/clone of photo.png";

export default function Header({ userId, choosenName }) {
  const [aboutUsTitleSpan, setAboutUsTitleSpan] = useState("About Us");
  useEffect(() => {
    const handleScrollY = () => {
      if (window.scrollY >= window.innerHeight) {
        setAboutUsTitleSpan("FAQ");
      } else {
        setAboutUsTitleSpan("About Us");
      }
    };
    window.addEventListener("scroll", handleScrollY);
  }, []);

  const pathname = useLocation().pathname;
  const renderHeaderBasedOnPath = () => {
    if (pathname.includes("/dashbord/home")) {
      if (pathname.includes("setter")) {
        return (
          <div className="header" style={{ justifyContent: "space-between" }}>
            <div
              className="title"
              style={{ display: "flex", alignItems: "center" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M17.82 4.5H21C21 4.5 20.96 7.95 16.88 10.5C17.18 9.9 17.38 9.24 17.44 8.54L17.82 4.5Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.18 4.5H3C3 4.5 3.04 7.95 7.12 10.5C6.82 9.9 6.62 9.24 6.56 8.54L6.18 4.5Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.59 13.26C13.47 13.57 13.36 13.96 13.31 14.39C13.26 14.78 13.27 15.13 13.31 15.42C13.36 15.86 13.47 16.25 13.6 16.56C13.4 16.52 13.2 16.5 13 16.5H11C10.8 16.5 10.6 16.52 10.4 16.56C10.53 16.25 10.64 15.86 10.69 15.42C10.73 15.13 10.74 14.78 10.69 14.39C10.64 13.96 10.53 13.57 10.41 13.26C10.92 13.42 11.45 13.5 12 13.5C12.55 13.5 13.08 13.42 13.59 13.26Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 13.5C9.18 13.5 6.82 11.35 6.56 8.54L6 2.5H18L17.44 8.54C17.18 11.35 14.82 13.5 12 13.5Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 19.5H8C8 17.84 9.34 16.5 11 16.5H13C14.66 16.5 16 17.84 16 19.5Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 22.5H5C5 20.84 6.34 19.5 8 19.5H16C17.66 19.5 19 20.84 19 22.5Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "600",
                  margin: "0 20px 0 10px",
                }}
              >
                Current Setter 22
              </span>
              <span
                style={{
                  color: "wheat",
                }}
              >
                (Actuall Work)
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifySelf: "flex-end",
                alignItems: "center",
              }}
            >
              <button style={{ fontWeight: "600", color: "white" }}>
                This Setter
              </button>
              <div
                className="text"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "10px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="17"
                  viewBox="0 0 9 17"
                  fill="none"
                >
                  <path
                    d="M8.08325 16.6252L0.374918 8.50024L8.08325 0.375244L8.08325 16.6252Z"
                    fill="white"
                  />
                </svg>
                <div className="setter-number" style={{ margin: "0 10px" }}>
                  <p>Setter 22</p>
                  <p>12Apr-17Apr</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="17"
                  viewBox="0 0 9 17"
                  fill="none"
                >
                  <path
                    d="M0.916748 16.6252L8.62508 8.50024L0.916747 0.375244L0.916748 16.6252Z"
                    fill="white"
                  />
                </svg>
              </div>
              <ShortInfo />
            </div>
          </div>
        );
      } else {
        return (
          <div className="header" style={{ justifyContent: "flex-end" }}>
            <ShortInfo />
          </div>
        );
      }
    } else if (pathname.includes("/dashbord/setters")) {
      return (
        <div className="header" style={{ justifyContent: "space-between" }}>
          <div
            className="title"
            style={{ display: "flex", alignItems: "center" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
            >
              <g clipPath="url(#clip0_126_2925)">
                <path
                  d="M23.841 16.224C25.6189 16.224 27.0605 14.7834 27.0605 13.0055C27.0605 11.2276 25.6189 9.78601 23.841 9.78601C22.0636 9.78601 20.6219 11.2276 20.6219 13.0055C20.622 14.7834 22.0636 16.224 23.841 16.224Z"
                  fill="white"
                />
                <path
                  d="M27.9632 19.3262C27.8198 18.4643 27.1072 17.2578 26.5679 16.7189C26.4969 16.6475 26.1794 16.631 26.0936 16.6841C25.4379 17.0874 24.6677 17.3247 23.841 17.3247C23.0153 17.3247 22.245 17.0874 21.5893 16.6841C21.5031 16.631 21.1861 16.6475 21.115 16.7189C20.9642 16.8697 20.7997 17.0704 20.6393 17.3031C21.0733 18.1202 21.4174 18.9881 21.5416 19.7354C21.6658 20.4846 21.6255 21.1939 21.4247 21.8406C22.1377 22.0985 22.9928 22.2117 23.841 22.2117C26.0534 22.2117 28.3174 21.4446 27.9632 19.3262Z"
                  fill="white"
                />
                <path
                  d="M13.9173 14.8659C16.7986 14.8659 19.1346 12.5299 19.1346 9.64861C19.1346 6.76822 16.7986 4.43219 13.9173 4.43219C11.0364 4.43219 8.70128 6.76822 8.70128 9.64861C8.70128 12.5299 11.0364 14.8659 13.9173 14.8659Z"
                  fill="white"
                />
                <path
                  d="M18.335 15.665C18.2218 15.5523 17.7077 15.5235 17.5679 15.61C16.5044 16.2644 15.2562 16.6475 13.9173 16.6475C12.5793 16.6475 11.3305 16.2644 10.2675 15.61C10.1278 15.5234 9.61368 15.5523 9.50048 15.665C8.62433 16.5402 7.4696 18.4969 7.23729 19.8917C6.66449 23.3275 10.3345 24.5679 13.9173 24.5679C17.501 24.5679 21.171 23.3275 20.5982 19.8917C20.3658 18.4969 19.2111 16.5402 18.335 15.665Z"
                  fill="white"
                />
                <path
                  d="M4.15893 16.224C5.93638 16.224 7.37795 14.7834 7.37795 13.0055C7.37795 11.2276 5.93638 9.78601 4.15893 9.78601C2.38099 9.78601 0.939423 11.2276 0.939423 13.0055C0.939423 14.7834 2.38099 16.224 4.15893 16.224Z"
                  fill="white"
                />
                <path
                  d="M6.29421 19.7354C6.42622 18.9505 6.7987 18.0263 7.26568 17.1717C7.13552 16.9939 7.00542 16.839 6.88532 16.7189C6.81428 16.6475 6.49721 16.631 6.41107 16.6841C5.75532 17.0874 4.98504 17.3247 4.15893 17.3247C3.33271 17.3247 2.56195 17.0874 1.90674 16.6841C1.82099 16.631 1.50303 16.6475 1.432 16.7189C0.8913 17.2578 0.180636 18.4643 0.0366985 19.3262C-0.31702 21.4446 1.9466 22.2117 4.15893 22.2117C4.94846 22.2117 5.74575 22.1145 6.42622 21.8923C6.21179 21.2325 6.1664 20.5066 6.29421 19.7354Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_126_2925">
                  <rect
                    width="28"
                    height="28"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span
              style={{
                color: "white",
                fontSize: "20px",
                fontWeight: "600",
                margin: "0 20px 0 10px",
              }}
            >
              Setters
            </span>
            <div className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M7 13C3.68629 13 1 10.3137 1 7C1 5.46329 1.57771 4.06151 2.52779 3L4.33333 1M4.33333 1H1M4.33333 1V4.33333M7 1C10.3137 1 13 3.68629 13 7C13 8.53673 12.4223 9.93847 11.4722 11L9.66667 13M9.66667 13H13M9.66667 13V9.66667"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifySelf: "flex-end",
              alignItems: "center",
            }}
          >
            <button style={{ fontWeight: "600", color: "white" }}>
              This Setter
            </button>
            <div
              className="text"
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="17"
                viewBox="0 0 9 17"
                fill="none"
              >
                <path
                  d="M8.08325 16.6252L0.374918 8.50024L8.08325 0.375244L8.08325 16.6252Z"
                  fill="white"
                />
              </svg>
              <div className="setter-number" style={{ margin: "0 10px" }}>
                <p>Setter 22</p>
                <p>12Apr-17Apr</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="17"
                viewBox="0 0 9 17"
                fill="none"
              >
                <path
                  d="M0.916748 16.6252L8.62508 8.50024L0.916747 0.375244L0.916748 16.6252Z"
                  fill="white"
                />
              </svg>
            </div>
            <ShortInfo />
          </div>
        </div>
      );
    } else if (pathname.includes("/dashbord/team")) {
      return (
        <div className="header" style={{ justifyContent: "space-between" }}>
          <div
            className="title"
            style={{ display: "flex", alignItems: "center" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
            >
              <g clipPath="url(#clip0_126_2925)">
                <path
                  d="M23.841 16.224C25.6189 16.224 27.0605 14.7834 27.0605 13.0055C27.0605 11.2276 25.6189 9.78601 23.841 9.78601C22.0636 9.78601 20.6219 11.2276 20.6219 13.0055C20.622 14.7834 22.0636 16.224 23.841 16.224Z"
                  fill="white"
                />
                <path
                  d="M27.9632 19.3262C27.8198 18.4643 27.1072 17.2578 26.5679 16.7189C26.4969 16.6475 26.1794 16.631 26.0936 16.6841C25.4379 17.0874 24.6677 17.3247 23.841 17.3247C23.0153 17.3247 22.245 17.0874 21.5893 16.6841C21.5031 16.631 21.1861 16.6475 21.115 16.7189C20.9642 16.8697 20.7997 17.0704 20.6393 17.3031C21.0733 18.1202 21.4174 18.9881 21.5416 19.7354C21.6658 20.4846 21.6255 21.1939 21.4247 21.8406C22.1377 22.0985 22.9928 22.2117 23.841 22.2117C26.0534 22.2117 28.3174 21.4446 27.9632 19.3262Z"
                  fill="white"
                />
                <path
                  d="M13.9173 14.8659C16.7986 14.8659 19.1346 12.5299 19.1346 9.64861C19.1346 6.76822 16.7986 4.43219 13.9173 4.43219C11.0364 4.43219 8.70128 6.76822 8.70128 9.64861C8.70128 12.5299 11.0364 14.8659 13.9173 14.8659Z"
                  fill="white"
                />
                <path
                  d="M18.335 15.665C18.2218 15.5523 17.7077 15.5235 17.5679 15.61C16.5044 16.2644 15.2562 16.6475 13.9173 16.6475C12.5793 16.6475 11.3305 16.2644 10.2675 15.61C10.1278 15.5234 9.61368 15.5523 9.50048 15.665C8.62433 16.5402 7.4696 18.4969 7.23729 19.8917C6.66449 23.3275 10.3345 24.5679 13.9173 24.5679C17.501 24.5679 21.171 23.3275 20.5982 19.8917C20.3658 18.4969 19.2111 16.5402 18.335 15.665Z"
                  fill="white"
                />
                <path
                  d="M4.15893 16.224C5.93638 16.224 7.37795 14.7834 7.37795 13.0055C7.37795 11.2276 5.93638 9.78601 4.15893 9.78601C2.38099 9.78601 0.939423 11.2276 0.939423 13.0055C0.939423 14.7834 2.38099 16.224 4.15893 16.224Z"
                  fill="white"
                />
                <path
                  d="M6.29421 19.7354C6.42622 18.9505 6.7987 18.0263 7.26568 17.1717C7.13552 16.9939 7.00542 16.839 6.88532 16.7189C6.81428 16.6475 6.49721 16.631 6.41107 16.6841C5.75532 17.0874 4.98504 17.3247 4.15893 17.3247C3.33271 17.3247 2.56195 17.0874 1.90674 16.6841C1.82099 16.631 1.50303 16.6475 1.432 16.7189C0.8913 17.2578 0.180636 18.4643 0.0366985 19.3262C-0.31702 21.4446 1.9466 22.2117 4.15893 22.2117C4.94846 22.2117 5.74575 22.1145 6.42622 21.8923C6.21179 21.2325 6.1664 20.5066 6.29421 19.7354Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_126_2925">
                  <rect
                    width="28"
                    height="28"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span
              style={{
                color: "white",
                fontSize: "20px",
                fontWeight: "600",
                margin: "0 20px 0 10px",
              }}
            >
              Team Mates
            </span>
            <div className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M7 13C3.68629 13 1 10.3137 1 7C1 5.46329 1.57771 4.06151 2.52779 3L4.33333 1M4.33333 1H1M4.33333 1V4.33333M7 1C10.3137 1 13 3.68629 13 7C13 8.53673 12.4223 9.93847 11.4722 11L9.66667 13M9.66667 13H13M9.66667 13V9.66667"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifySelf: "flex-end",
              alignItems: "center",
            }}
          >
            <button style={{ fontWeight: "600", color: "white" }}>
              This Setter
            </button>
            <div
              className="text"
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="17"
                viewBox="0 0 9 17"
                fill="none"
              >
                <path
                  d="M8.08325 16.6252L0.374918 8.50024L8.08325 0.375244L8.08325 16.6252Z"
                  fill="white"
                />
              </svg>
              <div className="setter-number" style={{ margin: "0 10px" }}>
                <p>Setter 22</p>
                <p>12Apr-17Apr</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="17"
                viewBox="0 0 9 17"
                fill="none"
              >
                <path
                  d="M0.916748 16.6252L8.62508 8.50024L0.916747 0.375244L0.916748 16.6252Z"
                  fill="white"
                />
              </svg>
            </div>
            <ShortInfo />
          </div>
        </div>
      );
    } else if (pathname.includes("/dashbord/profile")) {
      return (
        <div className="header" style={{ justifyContent: "space-between" }}>
          <div
            className="title"
            style={{ display: "flex", alignItems: "center" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
            >
              <g clipPath="url(#clip0_126_2925)">
                <path
                  d="M23.841 16.224C25.6189 16.224 27.0605 14.7834 27.0605 13.0055C27.0605 11.2276 25.6189 9.78601 23.841 9.78601C22.0636 9.78601 20.6219 11.2276 20.6219 13.0055C20.622 14.7834 22.0636 16.224 23.841 16.224Z"
                  fill="white"
                />
                <path
                  d="M27.9632 19.3262C27.8198 18.4643 27.1072 17.2578 26.5679 16.7189C26.4969 16.6475 26.1794 16.631 26.0936 16.6841C25.4379 17.0874 24.6677 17.3247 23.841 17.3247C23.0153 17.3247 22.245 17.0874 21.5893 16.6841C21.5031 16.631 21.1861 16.6475 21.115 16.7189C20.9642 16.8697 20.7997 17.0704 20.6393 17.3031C21.0733 18.1202 21.4174 18.9881 21.5416 19.7354C21.6658 20.4846 21.6255 21.1939 21.4247 21.8406C22.1377 22.0985 22.9928 22.2117 23.841 22.2117C26.0534 22.2117 28.3174 21.4446 27.9632 19.3262Z"
                  fill="white"
                />
                <path
                  d="M13.9173 14.8659C16.7986 14.8659 19.1346 12.5299 19.1346 9.64861C19.1346 6.76822 16.7986 4.43219 13.9173 4.43219C11.0364 4.43219 8.70128 6.76822 8.70128 9.64861C8.70128 12.5299 11.0364 14.8659 13.9173 14.8659Z"
                  fill="white"
                />
                <path
                  d="M18.335 15.665C18.2218 15.5523 17.7077 15.5235 17.5679 15.61C16.5044 16.2644 15.2562 16.6475 13.9173 16.6475C12.5793 16.6475 11.3305 16.2644 10.2675 15.61C10.1278 15.5234 9.61368 15.5523 9.50048 15.665C8.62433 16.5402 7.4696 18.4969 7.23729 19.8917C6.66449 23.3275 10.3345 24.5679 13.9173 24.5679C17.501 24.5679 21.171 23.3275 20.5982 19.8917C20.3658 18.4969 19.2111 16.5402 18.335 15.665Z"
                  fill="white"
                />
                <path
                  d="M4.15893 16.224C5.93638 16.224 7.37795 14.7834 7.37795 13.0055C7.37795 11.2276 5.93638 9.78601 4.15893 9.78601C2.38099 9.78601 0.939423 11.2276 0.939423 13.0055C0.939423 14.7834 2.38099 16.224 4.15893 16.224Z"
                  fill="white"
                />
                <path
                  d="M6.29421 19.7354C6.42622 18.9505 6.7987 18.0263 7.26568 17.1717C7.13552 16.9939 7.00542 16.839 6.88532 16.7189C6.81428 16.6475 6.49721 16.631 6.41107 16.6841C5.75532 17.0874 4.98504 17.3247 4.15893 17.3247C3.33271 17.3247 2.56195 17.0874 1.90674 16.6841C1.82099 16.631 1.50303 16.6475 1.432 16.7189C0.8913 17.2578 0.180636 18.4643 0.0366985 19.3262C-0.31702 21.4446 1.9466 22.2117 4.15893 22.2117C4.94846 22.2117 5.74575 22.1145 6.42622 21.8923C6.21179 21.2325 6.1664 20.5066 6.29421 19.7354Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_126_2925">
                  <rect
                    width="28"
                    height="28"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span
              style={{
                color: "white",
                fontSize: "20px",
                fontWeight: "600",
                margin: "0 20px 0 10px",
              }}
            >
              Profile
            </span>
            <div className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M7 13C3.68629 13 1 10.3137 1 7C1 5.46329 1.57771 4.06151 2.52779 3L4.33333 1M4.33333 1H1M4.33333 1V4.33333M7 1C10.3137 1 13 3.68629 13 7C13 8.53673 12.4223 9.93847 11.4722 11L9.66667 13M9.66667 13H13M9.66667 13V9.66667"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifySelf: "flex-end",
              alignItems: "center",
            }}
          >
            <ShortInfo />
          </div>
        </div>
      );
    } else if (pathname.includes("/dashbord/about-us")) {
      return (
        <div className="header" style={{ justifyContent: "space-between" }}>
          <div
            className="title"
            style={{ display: "flex", alignItems: "center" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
              className="aboutus-title-svg"
            >
              <g clipPath="url(#clip0_126_2925)">
                <path
                  d="M23.841 16.224C25.6189 16.224 27.0605 14.7834 27.0605 13.0055C27.0605 11.2276 25.6189 9.78601 23.841 9.78601C22.0636 9.78601 20.6219 11.2276 20.6219 13.0055C20.622 14.7834 22.0636 16.224 23.841 16.224Z"
                  fill="white"
                />
                <path
                  d="M27.9632 19.3262C27.8198 18.4643 27.1072 17.2578 26.5679 16.7189C26.4969 16.6475 26.1794 16.631 26.0936 16.6841C25.4379 17.0874 24.6677 17.3247 23.841 17.3247C23.0153 17.3247 22.245 17.0874 21.5893 16.6841C21.5031 16.631 21.1861 16.6475 21.115 16.7189C20.9642 16.8697 20.7997 17.0704 20.6393 17.3031C21.0733 18.1202 21.4174 18.9881 21.5416 19.7354C21.6658 20.4846 21.6255 21.1939 21.4247 21.8406C22.1377 22.0985 22.9928 22.2117 23.841 22.2117C26.0534 22.2117 28.3174 21.4446 27.9632 19.3262Z"
                  fill="white"
                />
                <path
                  d="M13.9173 14.8659C16.7986 14.8659 19.1346 12.5299 19.1346 9.64861C19.1346 6.76822 16.7986 4.43219 13.9173 4.43219C11.0364 4.43219 8.70128 6.76822 8.70128 9.64861C8.70128 12.5299 11.0364 14.8659 13.9173 14.8659Z"
                  fill="white"
                />
                <path
                  d="M18.335 15.665C18.2218 15.5523 17.7077 15.5235 17.5679 15.61C16.5044 16.2644 15.2562 16.6475 13.9173 16.6475C12.5793 16.6475 11.3305 16.2644 10.2675 15.61C10.1278 15.5234 9.61368 15.5523 9.50048 15.665C8.62433 16.5402 7.4696 18.4969 7.23729 19.8917C6.66449 23.3275 10.3345 24.5679 13.9173 24.5679C17.501 24.5679 21.171 23.3275 20.5982 19.8917C20.3658 18.4969 19.2111 16.5402 18.335 15.665Z"
                  fill="white"
                />
                <path
                  d="M4.15893 16.224C5.93638 16.224 7.37795 14.7834 7.37795 13.0055C7.37795 11.2276 5.93638 9.78601 4.15893 9.78601C2.38099 9.78601 0.939423 11.2276 0.939423 13.0055C0.939423 14.7834 2.38099 16.224 4.15893 16.224Z"
                  fill="white"
                />
                <path
                  d="M6.29421 19.7354C6.42622 18.9505 6.7987 18.0263 7.26568 17.1717C7.13552 16.9939 7.00542 16.839 6.88532 16.7189C6.81428 16.6475 6.49721 16.631 6.41107 16.6841C5.75532 17.0874 4.98504 17.3247 4.15893 17.3247C3.33271 17.3247 2.56195 17.0874 1.90674 16.6841C1.82099 16.631 1.50303 16.6475 1.432 16.7189C0.8913 17.2578 0.180636 18.4643 0.0366985 19.3262C-0.31702 21.4446 1.9466 22.2117 4.15893 22.2117C4.94846 22.2117 5.74575 22.1145 6.42622 21.8923C6.21179 21.2325 6.1664 20.5066 6.29421 19.7354Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_126_2925">
                  <rect
                    width="28"
                    height="28"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span
              style={{
                color: "white",
                fontSize: "20px",
                fontWeight: "600",
                margin: "0 20px 0 10px",
              }}
              className="aboutus-title-span"
            >
              {aboutUsTitleSpan}
            </span>
            <div className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M7 13C3.68629 13 1 10.3137 1 7C1 5.46329 1.57771 4.06151 2.52779 3L4.33333 1M4.33333 1H1M4.33333 1V4.33333M7 1C10.3137 1 13 3.68629 13 7C13 8.53673 12.4223 9.93847 11.4722 11L9.66667 13M9.66667 13H13M9.66667 13V9.66667"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifySelf: "flex-end",
              alignItems: "center",
            }}
          >
            <ShortInfo />
          </div>
        </div>
      );
    } else if (pathname.includes(`/dashbord/users/${userId}`)) {
      return (
        <div className="header" style={{ justifyContent: "space-between" }}>
          <div
            className="title"
            style={{ display: "flex", alignItems: "center" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M17.8199 4.5H20.9999C20.9999 4.5 20.9599 7.95 16.8799 10.5C17.1799 9.9 17.3799 9.24 17.4399 8.54L17.8199 4.5Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.18 4.5H3C3 4.5 3.04 7.95 7.12 10.5C6.82 9.9 6.62 9.24 6.56 8.54L6.18 4.5Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.5899 13.26C13.4699 13.57 13.3599 13.96 13.3099 14.39C13.2599 14.78 13.2699 15.13 13.3099 15.42C13.3599 15.86 13.4699 16.25 13.5999 16.56C13.3999 16.52 13.1999 16.5 12.9999 16.5H10.9999C10.7999 16.5 10.5999 16.52 10.3999 16.56C10.5299 16.25 10.6399 15.86 10.6899 15.42C10.7299 15.13 10.7399 14.78 10.6899 14.39C10.6399 13.96 10.5299 13.57 10.4099 13.26C10.9199 13.42 11.4499 13.5 11.9999 13.5C12.5499 13.5 13.0799 13.42 13.5899 13.26Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 13.5C9.18 13.5 6.82 11.35 6.56 8.54L6 2.5H18L17.44 8.54C17.18 11.35 14.82 13.5 12 13.5Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 19.5H8C8 17.84 9.34 16.5 11 16.5H13C14.66 16.5 16 17.84 16 19.5Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 22.5H5C5 20.84 6.34 19.5 8 19.5H16C17.66 19.5 19 20.84 19 22.5Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              style={{
                color: "white",
                fontSize: "20px",
                fontWeight: "600",
                margin: "0 20px 0 10px",
              }}
              className="aboutus-title-span"
            >
              {choosenName && choosenName.name}
            </span>
            <span>(Setter 22)</span>
          </div>
          <div
            style={{
              display: "flex",
              justifySelf: "flex-end",
              alignItems: "center",
            }}
          >
            <ShortInfo choosenName />
          </div>
        </div>
      );
    } else if (pathname.includes("/dashbord/admin/analytics")) {
      return (
        <div className="header" style={{ justifyContent: "space-between" }}>
          <div
            className="title"
            style={{ display: "flex", alignItems: "center" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
            >
              <g clipPath="url(#clip0_960_8795)">
                <path
                  d="M0.97228 10.876H2.86105C3.12184 10.876 3.33333 11.0873 3.33333 11.3481V16.0704C3.33333 16.3311 3.12184 16.5426 2.86105 16.5426H0.97228C0.711497 16.5426 0.5 16.3311 0.5 16.0704V11.3481C0.5 11.0873 0.711497 10.876 0.97228 10.876Z"
                  fill="url(#paint0_linear_960_8795)"
                />
                <path
                  d="M5.6944 7.09814H7.58334C7.84413 7.09814 8.05562 7.30964 8.05562 7.57042V16.0704C8.05562 16.3312 7.84413 16.5427 7.58334 16.5427H5.6944C5.43361 16.5427 5.22229 16.3312 5.22229 16.0704V7.57042C5.22229 7.30964 5.43361 7.09814 5.6944 7.09814Z"
                  fill="url(#paint1_linear_960_8795)"
                />
                <path
                  d="M10.4166 8.98682H12.3056C12.5663 8.98682 12.7777 9.19831 12.7777 9.4591V16.0701C12.7777 16.3309 12.5663 16.5424 12.3056 16.5424H10.4166C10.1558 16.5424 9.94434 16.3309 9.94434 16.0701V9.4591C9.94434 9.19831 10.1558 8.98682 10.4166 8.98682Z"
                  fill="url(#paint2_linear_960_8795)"
                />
                <path
                  d="M15.1389 6.15381H17.0277C17.2885 6.15381 17.5 6.36531 17.5 6.62609V16.0705C17.5 16.3313 17.2885 16.5428 17.0277 16.5428H15.1389C14.8781 16.5428 14.6666 16.3313 14.6666 16.0705V6.62609C14.6666 6.36531 14.8781 6.15381 15.1389 6.15381Z"
                  fill="url(#paint3_linear_960_8795)"
                />
                <path
                  d="M16.0833 0.486816C15.3013 0.487681 14.6675 1.12148 14.6667 1.90348C14.6686 2.05774 14.6959 2.21061 14.7476 2.35588L12.3836 3.76113C12.0734 3.43204 11.6236 3.27259 11.1753 3.3326C10.7269 3.39261 10.335 3.6648 10.1222 4.06393L8.03711 3.03118C8.04731 2.97048 8.05336 2.90926 8.05561 2.84787C8.05665 2.27442 7.712 1.75701 7.18247 1.53687C6.65295 1.31689 6.04302 1.43777 5.63749 1.84313C5.23179 2.24848 5.11057 2.85825 5.33036 3.38794L2.62569 5.40641C2.41125 5.27861 2.16638 5.21048 1.91667 5.2091C1.13432 5.2091 0.5 5.84324 0.5 6.62576C0.5 7.40811 1.13432 8.04243 1.91667 8.04243C2.69902 8.04243 3.33333 7.40811 3.33333 6.62576C3.33212 6.45525 3.29996 6.28664 3.23839 6.12772L5.97004 4.08901C6.5044 4.38697 7.17089 4.29964 7.61031 3.87388L9.98139 5.04827C10.1395 5.75228 10.802 6.22473 11.5191 6.14484C12.2363 6.06494 12.7786 5.45847 12.7777 4.73682C12.7777 4.70085 12.7698 4.66695 12.7672 4.63167L15.3383 3.10312C15.5612 3.24406 15.8194 3.31928 16.0833 3.32015C16.8657 3.32015 17.5 2.68583 17.5 1.90348C17.5 1.12113 16.8657 0.486816 16.0833 0.486816Z"
                  fill="url(#paint4_linear_960_8795)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_960_8795"
                  x1="-0.240976"
                  y1="4.76194"
                  x2="6.08057"
                  y2="5.50237"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00FEFC" />
                  <stop offset="1" stopColor="#0002FE" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_960_8795"
                  x1="4.48131"
                  y1="-3.09204"
                  x2="10.8581"
                  y2="-2.6439"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00FEFC" />
                  <stop offset="1" stopColor="#0002FE" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_960_8795"
                  x1="9.20336"
                  y1="0.834709"
                  x2="15.5626"
                  y2="1.39333"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00FEFC" />
                  <stop offset="1" stopColor="#0002FE" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_960_8795"
                  x1="13.9257"
                  y1="-5.05532"
                  x2="20.3079"
                  y2="-4.64757"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00FEFC" />
                  <stop offset="1" stopColor="#0002FE" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_960_8795"
                  x1="-3.94585"
                  y1="-7.66529"
                  x2="26.1446"
                  y2="8.19447"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00FEFC" />
                  <stop offset="1" stopColor="#0002FE" />
                </linearGradient>
                <clipPath id="clip0_960_8795">
                  <rect
                    width="17"
                    height="17"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span
              style={{
                color: "white",
                fontSize: "20px",
                fontWeight: "600",
                margin: "0 20px 0 10px",
              }}
            >
              Analytics
            </span>
            <span>(Admin)</span>
          </div>
          <div
            style={{
              display: "flex",
              justifySelf: "flex-end",
              alignItems: "center",
            }}
          >
            <div className="img-1">
              <img src={ProfileImg} alt="" />
            </div>
          </div>
        </div>
      );
    } else if (pathname.includes("/dashbord/admin/controlPanel")) {
      return (
        <div className="header" style={{ justifyContent: "space-between" }}>
          <div
            className="title"
            style={{ display: "flex", alignItems: "center" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                opacity="0.8"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.929 3.43L2.93 3.428L2.932 3.429L3.459 2.901C3.56234 2.79779 3.70108 2.73777 3.84706 2.73313C3.99304 2.72848 4.13531 2.77956 4.245 2.876L5.455 3.937C5.787 4.242 6.229 4.429 6.715 4.429C7.229 4.429 7.695 4.219 8.031 3.881C8.349 3.561 8.551 3.127 8.57 2.646H8.574L8.679 1.039C8.68865 0.893353 8.75332 0.756826 8.85991 0.657106C8.96651 0.557385 9.10703 0.501935 9.253 0.502H9.999H10.746C11.049 0.502 11.3 0.737 11.32 1.039L11.425 2.646H11.43C11.449 3.13 11.653 3.566 11.974 3.886C12.31 4.221 12.774 4.429 13.286 4.429C13.778 4.429 14.226 4.237 14.558 3.925L15.754 2.875C15.8638 2.77869 16.0062 2.72779 16.1521 2.73262C16.2981 2.73745 16.4368 2.79765 16.54 2.901L17.068 3.429L17.07 3.427V3.429L17.069 3.431L17.597 3.958C17.7004 4.06121 17.7606 4.19988 17.7654 4.34586C17.7702 4.49184 17.7193 4.63419 17.623 4.744L16.563 5.956C16.2463 6.29833 16.0706 6.74764 16.071 7.214C16.071 7.729 16.281 8.194 16.619 8.531C16.939 8.849 17.372 9.051 17.854 9.07V9.074L19.46 9.179C19.763 9.199 19.998 9.45 19.998 9.753V10.5H20V10.502H19.998V11.248C19.9981 11.394 19.9426 11.5345 19.8429 11.6411C19.7432 11.7477 19.6066 11.8124 19.461 11.822L17.854 11.929V11.93C17.37 11.95 16.934 12.153 16.614 12.474C16.279 12.81 16.071 13.274 16.071 13.786C16.071 14.272 16.258 14.714 16.564 15.046H16.562L17.624 16.257C17.824 16.485 17.812 16.829 17.598 17.043L17.07 17.571V17.573L16.541 18.1C16.4378 18.2031 16.2994 18.2631 16.1536 18.2679C16.0079 18.2727 15.8658 18.222 15.756 18.126L14.588 17.105C14.2412 16.7625 13.7734 16.5706 13.286 16.571C12.771 16.571 12.306 16.781 11.969 17.119C11.651 17.439 11.449 17.874 11.429 18.357H11.425L11.32 19.964C11.3107 20.1038 11.2508 20.2354 11.1513 20.3341C11.0519 20.4328 10.9199 20.4918 10.78 20.5H9.22C9.08014 20.4918 8.9481 20.4328 8.84867 20.3341C8.74924 20.2354 8.68926 20.1038 8.68 19.964L8.575 18.357H8.571C8.55352 17.8883 8.35873 17.4436 8.026 17.113C7.85397 16.941 7.64973 16.8046 7.42495 16.7116C7.20017 16.6186 6.95926 16.5708 6.716 16.571C6.212 16.571 5.756 16.771 5.421 17.097L4.244 18.127C4.13412 18.2229 3.99192 18.2734 3.84617 18.2684C3.70043 18.2634 3.56203 18.2032 3.459 18.1L2.931 17.572L2.93 17.571L2.402 17.043C2.29865 16.9398 2.23845 16.8011 2.23362 16.6551C2.22879 16.5092 2.27969 16.3668 2.376 16.257L3.438 15.047L3.437 15.046C3.75453 14.7033 3.93066 14.2532 3.93 13.786C3.93 13.271 3.72 12.806 3.382 12.469C3.05248 12.1402 2.61114 11.9478 2.146 11.93V11.929L0.539 11.822C0.393353 11.8124 0.256826 11.7477 0.157106 11.6411C0.0573849 11.5345 0.00193485 11.394 0.00200009 11.248V10.502H0V10.5L0.000999928 9.753C0.000999928 9.45 0.236 9.199 0.539 9.179L2.145 9.074V9.07C2.61304 9.05202 3.05687 8.85726 3.387 8.525C3.722 8.189 3.929 7.725 3.929 7.215C3.929 6.725 3.739 6.28 3.43 5.948L2.376 4.744C2.27969 4.63419 2.22879 4.49184 2.23362 4.34586C2.23845 4.19988 2.29865 4.06121 2.402 3.958L2.93 3.431L2.929 3.43ZM14.286 10.5C14.286 11.6367 13.8344 12.7269 13.0307 13.5307C12.2269 14.3344 11.1367 14.786 10 14.786C8.86328 14.786 7.77312 14.3344 6.96934 13.5307C6.16556 12.7269 5.714 11.6367 5.714 10.5C5.714 9.36328 6.16556 8.27312 6.96934 7.46934C7.77312 6.66556 8.86328 6.214 10 6.214C11.1367 6.214 12.2269 6.66556 13.0307 7.46934C13.8344 8.27312 14.286 9.36328 14.286 10.5Z"
                fill="url(#paint0_linear_954_2118)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_954_2118"
                  x1="-5.23042"
                  y1="-21.0789"
                  x2="37.6513"
                  y2="-11.0337"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00FEFC" />
                  <stop offset="1" stopColor="#0002FE" />
                </linearGradient>
              </defs>
            </svg>
            <span
              style={{
                color: "white",
                fontSize: "20px",
                fontWeight: "600",
                margin: "0 20px 0 10px",
              }}
            >
              Control Panel
            </span>
            <span>(Admin)</span>
          </div>
          <div
            style={{
              display: "flex",
              justifySelf: "flex-end",
              alignItems: "center",
            }}
          >
            <div className="img-1">
              <img src={ProfileImg} alt="" />
            </div>
          </div>
        </div>
      );
    } else if (pathname.includes("/dashbord/admin/questions")) {
      return (
        <div className="header" style={{ justifyContent: "space-between" }}>
          <div
            className="title"
            style={{ display: "flex", alignItems: "center" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="23"
              viewBox="0 0 24 23"
              fill="none"
            >
              <path
                d="M12 22.5C14.2745 22.5 16.4979 21.8549 18.3891 20.6462C20.2802 19.4375 21.7542 17.7195 22.6246 15.7095C23.495 13.6995 23.7228 11.4878 23.279 9.35401C22.8353 7.22022 21.74 5.26021 20.1317 3.72183C18.5234 2.18345 16.4743 1.1358 14.2435 0.711367C12.0128 0.286929 9.70049 0.504766 7.59914 1.33733C5.49779 2.16989 3.70173 3.57979 2.4381 5.38873C1.17446 7.19767 0.5 9.32441 0.5 11.5C0.5 14.4174 1.7116 17.2153 3.86827 19.2782C4.93614 20.2996 6.20389 21.1099 7.59914 21.6627C8.99438 22.2155 10.4898 22.5 12 22.5ZM12 20.3C11.6588 20.3 11.3253 20.2032 11.0416 20.0219C10.758 19.8406 10.5369 19.5829 10.4063 19.2814C10.2757 18.9799 10.2416 18.6482 10.3081 18.3281C10.3747 18.008 10.539 17.714 10.7802 17.4833C11.0215 17.2525 11.3288 17.0954 11.6635 17.0317C11.9981 16.968 12.3449 17.0007 12.6601 17.1256C12.9753 17.2505 13.2447 17.462 13.4343 17.7333C13.6238 18.0047 13.725 18.3237 13.725 18.65C13.725 19.0876 13.5433 19.5073 13.2198 19.8167C12.8963 20.1262 12.4575 20.3 12 20.3ZM7.4 8.1934C7.38304 7.3483 7.627 6.51717 8.10135 5.804C8.5757 5.09084 9.25938 4.52731 10.0668 4.1839C10.7829 3.87802 11.5679 3.74952 12.3495 3.81027C13.1311 3.87102 13.8842 4.11906 14.5392 4.5315C15.1432 4.914 15.6442 5.42753 16.0014 6.03028C16.3587 6.63303 16.5621 7.30796 16.595 8.00012C16.628 8.69227 16.4896 9.38209 16.1911 10.0134C15.8926 10.6447 15.4424 11.1997 14.8773 11.6331C14.0847 12.2173 13.5147 13.0343 13.2546 13.9585C13.183 14.2421 12.9965 14.4868 12.7362 14.6388C12.4758 14.7909 12.1631 14.8378 11.8666 14.7692C11.5701 14.7006 11.3143 14.5222 11.1553 14.2733C10.9964 14.0243 10.9474 13.7251 11.019 13.4415C11.3934 12.0443 12.243 10.806 13.434 9.9215C13.7171 9.70491 13.9427 9.42739 14.0923 9.11156C14.2419 8.79573 14.3114 8.45054 14.295 8.10415C14.2787 7.75776 14.1769 7.41997 13.9981 7.11834C13.8193 6.81671 13.5685 6.55978 13.2661 6.3685C12.9274 6.15643 12.5375 6.03093 12.1337 6.00397C11.7298 5.97701 11.3255 6.04949 10.9592 6.2145C10.5709 6.3923 10.2447 6.67394 10.0202 7.02534C9.79574 7.37674 9.6825 7.78284 9.69425 8.1945C9.67443 8.47215 9.54533 8.73229 9.33296 8.9225C9.12059 9.11272 8.84074 9.21887 8.5498 9.21957C8.25886 9.22026 7.97846 9.11545 7.7651 8.92626C7.55173 8.73707 7.42127 8.47755 7.4 8.2V8.1934Z"
                fill="url(#paint0_linear_1186_1986)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1186_1986"
                  x1="-5.51498"
                  y1="-23.2368"
                  x2="43.5616"
                  y2="-11.2178"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00FEFC" />
                  <stop offset="1" stopColor="#0002FE" />
                </linearGradient>
              </defs>
            </svg>
            <span
              style={{
                color: "white",
                fontSize: "20px",
                fontWeight: "600",
                margin: "0 20px 0 10px",
              }}
            >
              Questions
            </span>
            <span>(Admin)</span>
          </div>
          <div
            style={{
              display: "flex",
              justifySelf: "flex-end",
              alignItems: "center",
            }}
          >
            <div className="img-1">
              <img src={ProfileImg} alt="" />
            </div>
          </div>
        </div>
      );
    }
  };

  return renderHeaderBasedOnPath();
}
