import React from "react";
import "./questionpage.css";
import QuestionsSection from "../../../components/QuestionsSection/QuestionsSection";

export default function QuestionPage() {
  return (
    <div className="QuestionPage-wrapper">
      <div className="the-questions-container">
        <div className="the-questions">
          <QuestionsSection />
        </div>
      </div>
    </div>
  );
}
