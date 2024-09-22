import React from "react";
import "./shrotinfo.css";
import Note from "../../../../components/notenotification/Note";
import ProfileImg from "../../../../assets/imgs/clone of photo.png";
import { useState } from "react";

export default function ShortInfo({ choosenName }) {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <>
      <div className="img-1">
        <img src={ProfileImg} alt="" />
      </div>
      {choosenName ? null : (
        <>
          <div
            className="img-2"
            style={{ position: "relative" }}
            onClick={() => setShowDropDown(!showDropDown)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="38"
              viewBox="0 0 37 38"
              fill="none"
            >
              <path
                d="M23.125 28.25H13.875C13.875 29.4766 14.3623 30.653 15.2296 31.5204C16.097 32.3877 17.2734 32.875 18.5 32.875C19.7266 32.875 20.903 32.3877 21.7704 31.5204C22.6377 30.653 23.125 29.4766 23.125 28.25Z"
                stroke="#2CA9BC"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M29.8775 22.6692C30.1809 22.9729 30.4214 23.3335 30.5854 23.7303C30.7495 24.1271 30.8337 24.5523 30.8333 24.9817C30.8333 25.8485 30.489 26.6798 29.876 27.2927C29.2631 27.9057 28.4318 28.25 27.565 28.25H9.43496C8.56814 28.25 7.73683 27.9057 7.1239 27.2927C6.51097 26.6798 6.16663 25.8485 6.16663 24.9817C6.16625 24.5523 6.25047 24.1271 6.41447 23.7303C6.57848 23.3335 6.81906 22.9729 7.12246 22.6692L9.24996 20.5417V14.375C9.24996 11.9217 10.2245 9.56897 11.9592 7.83426C13.6939 6.09955 16.0467 5.125 18.5 5.125C20.9532 5.125 23.306 6.09955 25.0407 7.83426C26.7754 9.56897 27.75 11.9217 27.75 14.375V20.5417L29.8775 22.6692Z"
                stroke="url(#paint0_linear_151_9842)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_151_9842"
                  x1="-0.284221"
                  y1="-19.8257"
                  x2="52.2269"
                  y2="-6.7046"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00FEFC" />
                  <stop offset="1" stopColor="#0002FE" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div
            className={"notfication-section"}
            style={{ zIndex: `${showDropDown ? "100" : "-1"}` }}
          >
            <div
              className={showDropDown ? "border-dropdown" : "hidde-dropdown"}
            >
              <div className="dropdown">
                <div
                  className="notfication"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <span>Notification</span>
                  <div className="img">
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
                <div className="contnent">
                  <Note />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
