import React from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./membersreminder.css";
import Profile from "../../../assets/imgs/clone of photo.png";
import { TeamsNamesContext } from "../../../context/TheName";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function MembersReminder({ member, index }) {
  const [
    names,
    handleRank,
    handleBorder,
    handleCompleteColor,
    handleCompleteNumberColor,
    ,
    ,
  ] = useContext(TeamsNamesContext);

  const notes = [
    {
      id: 1,
      title: "Hard Reminder",
      type: "Hard",
    },
    {
      id: 2,
      title: "Soft Reminder",
      type: "Soft",
    },
    {
      id: 3,
      title: "Good Job",
      type: "Good",
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

  const [showReminder, setShowReminder] = useState(false);

  const [typeReminder, setTypeReminder] = useState("");

  const handleChoose = (type) => {
    setTypeReminder(type);
  };

  return (
    <>
      <div
        className="blur-background"
        style={{ display: showReminder ? "block" : "none" }}
      ></div>
      <div className="info">
        <div className="rank">{handleRank(names, index)}</div>
        <div
          className="img"
          style={{ borderColor: handleBorder(member.agency) }}
        >
          <img
            src={Profile}
            alt=""
            style={{ width: "100%", height: "100%" }}
          ></img>
        </div>
        <Link to={`/dashbord/users/${member.id}`} className="text">
          <p>{member.name}</p>
          <p style={{ color: handleBorder(member.agency) }}>{member.agency}</p>
        </Link>
      </div>
      <div
        className="complete-percentage"
        style={{
          backgroundColor: handleCompleteColor(member.percentage),
        }}
      >
        <span
          style={{
            color: handleCompleteNumberColor(member.percentage),
          }}
        >
          {member.percentage}%
        </span>
      </div>
      <div className="send-reminder">
        <span onClick={() => setShowReminder(true)}>Send Reminder</span>
      </div>
      <div
        className={
          showReminder ? "type-of-reminder on" : "type-of-reminder off"
        }
      >
        <div className="the-member-name">
          <p>What kind of Reminder do you want to send to {member.name} ?</p>
        </div>
        <div className="the-reminders">
          {notes.map((reminder) => (
            <div
              className={`the-reminder ${
                typeReminder === reminder.type ? "on" : ""
              }`}
              key={reminder.id}
              onClick={() => handleChoose(reminder.type)}
            >
              <div
                className="icon"
                style={{ backgroundColor: `${chooseColor(reminder.type)}` }}
              >
                {reminder.type.toLocaleLowerCase() === "hard" ||
                reminder.type.toLocaleLowerCase() === "soft" ? (
                  <Icon icon={"emojione-monotone:exclamation-mark"} />
                ) : (
                  <Icon icon={"mdi:check-bold"} />
                )}
              </div>
              <div className="text">
                <span>{reminder.title}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="btns">
          <button onClick={() => setShowReminder(false)}>Cancel</button>
          <button>Send</button>
        </div>
      </div>
    </>
  );
}
