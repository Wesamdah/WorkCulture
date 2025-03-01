import React from "react";
import "./currentsetter.css";
import CololredCal from "../../../assets/imgs/coloredCalender.svg";
import Goals from "../goalscontent/Goals";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import ProgressCircle from "../../../components/progress circle/ProgressCircle";
import { useContext } from "react";
import { CanvasContext } from "../../Main/Main";

export default function CurrentSetter({
  goals,
  handleChange,
  errorFetch,
  isLoading,
}) {
  const [, setShowCanvas, , , setCnavasGoal] = useContext(CanvasContext);
  return (
    <div className="card">
      <div className="content">
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M17.82 4H21C21 4 20.96 7.45 16.88 10C17.18 9.4 17.38 8.74 17.44 8.04L17.82 4Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.18 4H3C3 4 3.04 7.45 7.12 10C6.82 9.4 6.62 8.74 6.56 8.04L6.18 4Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.59 12.76C13.47 13.07 13.36 13.46 13.31 13.89C13.26 14.28 13.27 14.63 13.31 14.92C13.36 15.36 13.47 15.75 13.6 16.06C13.4 16.02 13.2 16 13 16H11C10.8 16 10.6 16.02 10.4 16.06C10.53 15.75 10.64 15.36 10.69 14.92C10.73 14.63 10.74 14.28 10.69 13.89C10.64 13.46 10.53 13.07 10.41 12.76C10.92 12.92 11.45 13 12 13C12.55 13 13.08 12.92 13.59 12.76Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 13C9.18 13 6.82 10.85 6.56 8.04L6 2H18L17.44 8.04C17.18 10.85 14.82 13 12 13Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 19H8C8 17.34 9.34 16 11 16H13C14.66 16 16 17.34 16 19Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 22H5C5 20.34 6.34 19 8 19H16C17.66 19 19 20.34 19 22Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Current Setter
          <span>(Actuall Work)</span>
          <img src={CololredCal} alt="" />
        </p>
        <div className="btns">
          <Link to={"setter"}>
            <Icon
              className="plus"
              icon={"ic:baseline-plus"}
              onClick={() => {
                setShowCanvas(true);
                setCnavasGoal("");
              }}
            />
            <Icon
              className="right-arrow"
              icon={"ri:arrow-right-line"}
              onClick={() => {
                setCnavasGoal("");
              }}
            />
          </Link>
        </div>
      </div>
      <div
        className="card-1-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          className="golas-section"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "65%",
          }}
        >
          <Goals
            goals={goals}
            handleChange={handleChange}
            errorFetch={errorFetch}
            isLoading={isLoading}
            actual
          />

          <button
            className="add-goal"
            onClick={() => {
              setShowCanvas(true);
              setCnavasGoal("");
            }}
          >
            <Icon icon={"ic:baseline-plus"} />
          </button>
        </div>
        <div className="percentage-section">
          <ProgressCircle
            goals={goals}
            isLoading={isLoading}
            errorFetch={errorFetch}
          />
          <p
            style={{
              marginTop: "10px",
              fontFamily: "400",
              fontSize: "11px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Setter Percentage
          </p>
        </div>
      </div>
    </div>
  );
}
