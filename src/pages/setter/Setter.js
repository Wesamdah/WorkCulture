import React from "react";
import "./setter.css";
import { useEffect } from "react";

// Rsuite library
import { Calendar } from "rsuite";
import "rsuite/dist/rsuite.min.css";

export default function Setter() {
  const setterData = [
    {
      setternumber: "22",
      complete: "20%",
      color: "#A744FF",
    },
    {
      setternumber: "23",
      complete: "100%",
      color: "#038A50",
    },
    {
      setternumber: "24",
      complete: "100%",
      color: "#23C1FF",
    },
    {
      setternumber: "25",
      complete: "90%",
      color: "#018DFD",
    },
    {
      setternumber: "26",
      complete: "70%",
      color: "#A744FF",
    },
    {
      setternumber: "27",
      complete: "30%",
      color: "#0002FE",
    },
  ];
  const date = new Date();

  useEffect(() => {
    document.title = "Work Culture | Setter";

    const path1 = document.querySelector(
      ".rs-calendar-header-backward.rs-btn-icon.rs-btn-icon-placement-left.rs-btn.rs-btn-subtle.rs-btn-sm"
    );
    const path2 = document.querySelector(
      ".rs-calendar-header-forward.rs-btn-icon.rs-btn-icon-placement-left.rs-btn.rs-btn-subtle.rs-btn-sm"
    );
    const path3 = document.querySelectorAll("svg.rs-icon");

    const pathelement1 = path1?.querySelector("path"); //assuming the path element is a child to the path1
    const pathelement2 = path2?.querySelector("path"); //assuming the path element is a child to the path2
    path3[0]?.setAttribute("viewBox", "0 0 35 35");
    path3[1]?.setAttribute("viewBox", "0 0 35 35");

    pathelement1?.setAttribute(
      "d",
      "M21.5833 27.6253L13.8749 19.5003L21.5833 11.3753L21.5833 27.6253Z"
    );
    pathelement2?.setAttribute(
      "d",
      "M15.4167 27.6253L23.1251 19.5003L15.4167 11.3753L15.4167 27.6253Z"
    );

    const clickTitle = document.querySelector(
      ".rs-calendar-header-title.rs-calendar-header-title-date.rs-btn.rs-btn-subtle.rs-btn-sm"
    );
    if (clickTitle) {
      // Add an event listener to prevent the default action on click
      clickTitle.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
      });
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (clickTitle) {
        clickTitle.removeEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
        });
      }
    };
  }, []);
  return (
    <div className="setter-container">
      <Calendar value={date} />
      {setterData.map((setter, index) => (
        <div
          key={index}
          className={`setter-row-${index}`}
          style={{
            position: "absolute",
            left: "320px",
            width: "50%",
            height: "fit-content",
            padding: "5px",
            borderRadius: "12px",
            backgroundColor: `${setter.color}`,
            zIndex: "20",
            textAlign: "center",
          }}
        >
          <p style={{ color: "white", fontSize: "12px", fontWeight: "700" }}>
            setter {setter.setternumber} : {setter.complete}
          </p>
        </div>
      ))}
    </div>
  );
}
