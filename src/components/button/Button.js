import React from "react";
import "./button.css";

export default function Button({ title, nonColored, handleClick, nonBorder }) {
  return (
    <>
      {nonColored ? (
        <button
          className="component-btn"
          style={{
            backgroundColor: "black",
            border: nonBorder ? "none" : "1px solid #01b9fd",
          }}
          onClick={handleClick}
        >
          <div>{title}</div>
        </button>
      ) : (
        <button
          className="component-btn"
          style={{
            backgroundImage:
              "linear-gradient(to right, #00fefc -20%, #0002fe 125%)",
          }}
          onClick={handleClick}
        >
          <div>{title}</div>
        </button>
      )}
    </>
  );
}
