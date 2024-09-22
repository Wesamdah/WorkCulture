import React from "react";
import "./answerquestiondrop.css";

export default function AnswerQuestonDrop({
  showQuestionDrop,
  setShowQuestionDrop,
}) {
  return (
    <div
      className={showQuestionDrop ? "question-drop on" : "question-drop off"}
    >
      <p>Answer Question</p>
      <p>When should i write my Goals ?</p>
      <textarea name="" id=""></textarea>
      <div className="btns">
        <button onClick={() => setShowQuestionDrop(false)}>Cancel</button>
        <button>Send</button>
      </div>
    </div>
  );
}
