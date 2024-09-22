import React, { useContext, useState } from "react";
import "./canvas.css";
import { CanvasContext } from "../Main";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Canvas({ goals }) {
  const goals_URl = "http://localhost:3500/goals";
  const [showCanvas, setShowCanvas, , canavsGoal] = useContext(CanvasContext);

  const goalsType = ["Actuall Work", "X Point"];

  const OneCanvaGoal = canavsGoal.length ? canavsGoal[0] : "";
  const [canvasDropDown, setCanvasDropDown] = useState(false);
  const [canvaGolaCheck, setCanvaGolaCheck] = useState(false);
  const [titleAddGoal, setTitleAddGoal] = useState("");
  const [typeAddGoal, setTypeAddGoal] = useState("");

  const handleAddGoalCheck = () => {
    !canavsGoal.length && setCanvaGolaCheck(!canvaGolaCheck);
  };

  const ClickSave = async () => {
    if (titleAddGoal.length && typeAddGoal.length) {
      const newGoal = {
        id: (goals.length + 1).toString(),
        checked: canvaGolaCheck,
        type: typeAddGoal.toLocaleLowerCase(),
        title: titleAddGoal.toLocaleLowerCase(),
        // description: goalDescription,
        // attachment: goalAttachment,
      };

      try {
        const response = await fetch(goals_URl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newGoal),
        });

        if (response.ok) {
          const result = await response.json();
          console.log("Goal saved successfully:", result);
          setShowCanvas(false);
          setTypeAddGoal("");
          setTitleAddGoal("");
          // setGoalDescription("");
          // setGoalAttachment("");
          setCanvasDropDown(false);
          window.location.reload();
        } else {
          console.error("Failed to save the goal:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div
      className="canvas"
      style={{ width: showCanvas ? "40%" : 0, transition: "0.5s" }}
    >
      <div
        className="left-arrow-canvas"
        style={{ display: !showCanvas && "none" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="18"
          viewBox="0 0 10 18"
          fill="none"
          onClick={() => setShowCanvas(false)}
        >
          <path
            d="M1.65923 5.79496e-05C1.87269 -0.000594382 2.0836 0.0417945 2.27646 0.12411C2.46932 0.206425 2.63924 0.326575 2.77372 0.47573L9.67496 8.18929C9.88511 8.41932 10 8.70786 10 9.00564C10 9.30341 9.88511 9.59195 9.67496 9.82199L2.53082 17.5355C2.28829 17.7981 1.93978 17.9632 1.56196 17.9945C1.18414 18.0259 0.807961 17.9209 0.51617 17.7027C0.224379 17.4845 0.040883 17.1709 0.0060481 16.8309C-0.0287868 16.491 0.0878943 16.1525 0.330421 15.89L6.71728 8.99921L0.544745 2.10843C0.370023 1.91973 0.259037 1.68994 0.224917 1.44626C0.190797 1.20257 0.234971 0.955195 0.352215 0.733395C0.469459 0.511596 0.654864 0.324654 0.886491 0.194693C1.11812 0.0647324 1.38628 -0.00281068 1.65923 5.79496e-05Z"
            fill="black"
          />
        </svg>
      </div>
      <div className="canvas-content" style={{ opacity: showCanvas ? 1 : 0 }}>
        <div
          className="canvas-header"
          style={{ display: "flex", alignItems: "center", width: "100%" }}
        >
          <div
            className={
              canavsGoal
                ? OneCanvaGoal.checked
                  ? "check-box"
                  : "non-checked-box"
                : canvaGolaCheck
                ? "check-box"
                : "non-checked-box"
            }
            style={{ color: "white" }}
            onClick={() => handleAddGoalCheck()}
          >
            {OneCanvaGoal.checked ? (
              <Icon icon={"material-symbols:check"} />
            ) : null}
            {!canavsGoal && canvaGolaCheck && (
              <Icon icon={"material-symbols:check"} />
            )}
          </div>
          <div className="goal-name" style={{ color: "white" }}>
            {canavsGoal.length ? (
              <p>{OneCanvaGoal.title}</p>
            ) : (
              <input
                type="text"
                value={titleAddGoal}
                onChange={(e) => setTitleAddGoal(e.target.value)}
              />
            )}
          </div>
          <div className="goal-type" style={{ color: "white" }}>
            {!canavsGoal.length ? (
              <div
                className="canvasGoal-type"
                style={{ color: "white", userSelect: "none" }}
                onClick={() => setCanvasDropDown(!canvasDropDown)}
              >
                <input
                  type="text"
                  style={{
                    position: "relative",
                    caretColor: "transparent",
                  }}
                  value={typeAddGoal}
                  onChange={() => typeAddGoal}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                >
                  <path
                    d="M11.78 0.78725L11.78 3.54725L6.284 9.35525L0.764 3.54725L0.764 0.787249L6.284 6.59525L11.78 0.78725Z"
                    fill="url(#paint0_linear_126_2059)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_126_2059"
                      x1="40.2368"
                      y1="-4.89977"
                      x2="36.2433"
                      y2="23.9501"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00FEFC" />
                      <stop offset="1" stopColor="#0002FE" />
                    </linearGradient>
                  </defs>
                </svg>
                <div
                  className={
                    canvasDropDown ? "canvas-dropdown" : "hidden-canvasDropDown"
                  }
                >
                  {goalsType.map((goal, index) => (
                    <span
                      key={index}
                      onClick={() => {
                        setTypeAddGoal(goal);
                        setCanvasDropDown(false);
                      }}
                    >
                      {goal}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <p>{OneCanvaGoal.type}</p>
            )}
          </div>
        </div>
        <div className="canvas-info" style={{ margin: "40px 0" }}>
          <p style={{ marginBottom: "15px" }}>
            Assignee: <span style={{ marginLeft: "38px" }}>Maya AB</span>
          </p>
          <p>
            Goal Setter: <span style={{ marginLeft: "25px" }}>23</span>
            <span style={{ fontSize: "9px", marginLeft: "5px" }}>
              (this setter)
            </span>
          </p>
        </div>
        <div className="canvas-textarea">
          <textarea placeholder="Goal Description"></textarea>
        </div>
        <div
          className="canvas-attachment"
          style={{
            display:
              (OneCanvaGoal.type || typeAddGoal.toLocaleLowerCase()) ===
                "x point" && "none",
          }}
        >
          <textarea placeholder="Goal Attachment"></textarea>
        </div>
        <div className="canvas-btns">
          <button
            className="cancel"
            onClick={() => {
              setShowCanvas(false);
              setTypeAddGoal("");
              setTitleAddGoal("");
              setCanvasDropDown(false);
              setCanvaGolaCheck(false);
            }}
          >
            Cancel
          </button>
          <button className="save" onClick={() => ClickSave()}>
            Save
          </button>
        </div>
      </div>
      Canvas
    </div>
  );
}
