import React from "react";
import Button from "../../../components/button/Button";

export default function AskQuestion({ showAsk, setShowAsk }) {
  return (
    <div className={showAsk ? "question-block" : "hidde-question"}>
      <p style={{ opacity: showAsk ? "1" : "0" }}>Ask Your Question</p>
      <form
        className={showAsk ? "form" : "hidde-form"}
        action=""
        onSubmit={(e) => e.preventDefault()}
      >
        <textarea
          style={{
            width: "100%",
            height: "150px",
            backgroundColor: "black",
            resize: "none",
            borderRadius: "7PX",
          }}
        ></textarea>

        <div className={showAsk ? "btns" : "hidee-btns"}>
          <button
            style={{ backgroundColor: "black", border: "none" }}
            className="btn-1"
            onClick={() => setShowAsk(false)}
          >
            Cancel
          </button>
          <Button title={"Send"} />
        </div>
      </form>
    </div>
  );
}
