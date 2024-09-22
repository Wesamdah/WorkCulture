import React from "react";
import "./note.css";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Note({ withBorder }) {
  const notes = [
    {
      id: 1,
      title: "Hard Reminder",
      type: "Hard",
      content: "A Hard reminder has been sent to you by the admin",
      date: "12/12/2023",
    },
    {
      id: 2,
      title: "Soft Reminder",
      type: "Soft",
      content: "A Soft reminder has been sent to you by the admin",
      date: "12/12/2023",
    },
    {
      id: 3,
      title: "Good Job",
      type: "Good",
      content: "A difficult reminder has been sent to you by the admin",
      date: "12/12/2023",
    },
  ];

  const chooseColor = (item) => {
    switch (item.toLocaleLowerCase()) {
      case "hard":
        return "#FF003D";
      case "soft":
        return "#FFC85C";
      default:
        return " #22A364";
    }
  };

  return (
    <>
      {notes.map((note) => (
        <div
          className="note"
          key={note.id}
          style={{
            border: withBorder && `1px solid ${chooseColor(note.type)}`,
            borderRadius: withBorder && "8px",
          }}
        >
          <div
            className="icon"
            style={{ backgroundColor: `${chooseColor(note.type)}` }}
          >
            {note.type.toLocaleLowerCase() === "hard" ||
            note.type.toLocaleLowerCase() === "soft" ? (
              <Icon icon={"emojione-monotone:exclamation-mark"} />
            ) : (
              <Icon icon={"mdi:check-bold"} />
            )}
          </div>
          <div className="text">
            <span>
              {note.title} {note.content}
            </span>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "3px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                style={{
                  marginRight: "5PX",
                }}
              >
                <path
                  d="M0.5 10H9.5C9.63261 10 9.75978 9.94732 9.85355 9.85355C9.94732 9.75978 10 9.63261 10 9.5V2C10 1.86739 9.94732 1.74021 9.85355 1.64645C9.75978 1.55268 9.63261 1.5 9.5 1.5H7.5V0.5C7.5 0.367392 7.44732 0.240215 7.35355 0.146447C7.25978 0.0526784 7.13261 0 7 0C6.86739 0 6.74021 0.0526784 6.64645 0.146447C6.55268 0.240215 6.5 0.367392 6.5 0.5V1.5H3.5V0.5C3.5 0.367392 3.44732 0.240215 3.35355 0.146447C3.25978 0.0526784 3.13261 0 3 0C2.86739 0 2.74021 0.0526784 2.64645 0.146447C2.55268 0.240215 2.5 0.367392 2.5 0.5V1.5H0.5C0.367392 1.5 0.240215 1.55268 0.146447 1.64645C0.0526784 1.74021 0 1.86739 0 2V9.5C0 9.63261 0.0526784 9.75978 0.146447 9.85355C0.240215 9.94732 0.367392 10 0.5 10ZM1 2.5H9V4H1V2.5ZM1 5H9V9H1V5Z"
                  fill="#4BF0FC"
                  fillOpacity="0.75"
                />
              </svg>
              <span
                style={{
                  fontSize: "10px",
                  fontFamily: "400",
                  color: "rgba(75, 240, 252, 0.75)",
                }}
              >
                {note.date}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
