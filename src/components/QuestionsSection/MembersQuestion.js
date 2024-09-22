import React from "react";
import { useState } from "react";
import "./memberquestions.css";
import Profile from "../../assets/imgs/testingProfilePic.jpg";
import AnswerQuestonDrop from "./AnswerQuestonDrop";

export default function MemberQusetions({ member, handleBorder }) {
  const [answered, setAnswered] = useState(false);
  const [showQuestionDrop, setShowQuestionDrop] = useState(false);

  return (
    <>
      <div
        className="blur-background"
        style={{ display: showQuestionDrop ? "block" : "none" }}
      ></div>
      <div
        className={
          answered ? "questions-main-section on" : "questions-main-section off"
        }
      >
        <div className="info">
          <div
            className="img"
            style={{ borderColor: handleBorder(member.agency) }}
          >
            <img
              src={Profile}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
              }}
            ></img>
          </div>
          <div className="member-name">
            <p>{member.name}</p>
            <p style={{ color: `${handleBorder(member.agency)}` }}>
              {member.agency}
            </p>
          </div>
        </div>
        <div className="the-question">
          <p>When should i write my Goals ?</p>
        </div>
        <div className="the-date">
          <p style={{ color: answered && "white" }}>
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
                fill={answered ? "white" : "#4BF0FC"}
                fillOpacity="0.75"
              />
            </svg>
            <span>12/12/2023</span>
          </p>
        </div>

        <div
          className={answered ? "switch-answered on" : "switch-answered off"}
          onClick={() => setAnswered(!answered)}
        >
          <div className={answered ? "circle on" : "circle off"}></div>
        </div>

        <div
          className={
            answered ? "answer-question-btn on" : "answer-question-btn off"
          }
        >
          <span onClick={() => !answered && setShowQuestionDrop(true)}>
            {answered ? "Question Answered " : "Answer Question"}
          </span>
        </div>
      </div>
      <AnswerQuestonDrop
        showQuestionDrop={showQuestionDrop}
        setShowQuestionDrop={setShowQuestionDrop}
      />
    </>
  );
}
