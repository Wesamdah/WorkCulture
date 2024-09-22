import React from "react";
import "./homesetters.css";
import Goals from "../goalscontent/Goals";
import { useContext } from "react";
import { Context } from "../../Main/Main";
import { Icon } from "@iconify/react/dist/iconify.js";
import ProgressCircle from "../../../components/progress circle/ProgressCircle";
import { CanvasContext } from "../../Main/Main";

export default function HomeSetters() {
  const [, setShowCanvas, , , setCnavasGoal] = useContext(CanvasContext);
  const [goals, handleChange, isLoading, errorFetch] = useContext(Context);
  const actuallPending = goals.filter(
    (goal) => goal.type === "actuall work" && !goal.checked
  );

  return (
    <div className="container">
      <div className="actual-work">
        <div className="to-do">
          <p>To Do</p>
          <Goals
            goals={goals}
            handleChange={handleChange}
            errorFetch={errorFetch}
            isLoading={isLoading}
            actual
          />
          <button className="add-goal">
            <Icon
              icon={"ic:baseline-plus"}
              onClick={() => {
                setShowCanvas(true);
                setCnavasGoal("");
              }}
            />
          </button>
        </div>
        <div className="done">
          <p>Done</p>
          <Goals
            goals={goals}
            handleChange={handleChange}
            errorFetch={errorFetch}
            isLoading={isLoading}
            done
            actual
          />
        </div>
        <div className="complete">
          <ProgressCircle
            goals={goals}
            isLoading={isLoading}
            errorFetch={errorFetch}
          />
          <p style={{ marginTop: "10px", fontSize: "12px" }}>
            Setter Percentage
          </p>
          <p style={{ fontWeight: 400, marginTop: "25px", fontSize: "20px" }}>
            Pending :
            <span style={{ marginLeft: "15px" }}> {actuallPending.length}</span>
          </p>
        </div>
      </div>
      <div className="x-point">
        <div className="to-do">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="22"
              viewBox="0 0 30 22"
              fill="none"
            >
              <path
                d="M0.122 19.484H1.176C1.788 19.484 2.264 19.4047 2.604 19.246C2.944 19.0647 3.27267 18.7473 3.59 18.294L8.588 10.95L3.692 3.708C3.37467 3.232 3.046 2.91467 2.706 2.756C2.366 2.59733 1.89 2.518 1.278 2.518H0.36V0.0019995H8.044V2.518H6.48L10.458 8.706L14.47 2.518H12.872V0.0019995H20.556V2.518H19.638C19.026 2.518 18.55 2.59733 18.21 2.756C17.8927 2.91467 17.5753 3.232 17.258 3.708L12.328 10.95L17.36 18.294C17.6773 18.7473 17.9947 19.0647 18.312 19.246C18.652 19.4047 19.128 19.484 19.74 19.484H20.828V22H12.974V19.518H14.572L10.458 13.194L6.378 19.518H7.942V22H0.122V19.484ZM22.0054 20.978H22.3834C22.5887 20.978 22.7287 20.936 22.8034 20.852C22.8874 20.768 22.9294 20.6373 22.9294 20.46V14.482C22.9294 14.3047 22.8874 14.1787 22.8034 14.104C22.7287 14.02 22.5887 13.978 22.3834 13.978H22.0054V12.942H26.8074C27.7407 12.942 28.4687 13.1847 28.9914 13.67C29.5234 14.146 29.7894 14.832 29.7894 15.728C29.7894 16.624 29.5187 17.3333 28.9774 17.856C28.4454 18.3693 27.7174 18.626 26.7934 18.626H24.4134V20.46C24.4134 20.6373 24.4507 20.768 24.5254 20.852C24.6094 20.936 24.754 20.978 24.9594 20.978H25.3234V22H22.0054V20.978ZM26.5974 17.59C27.1854 17.59 27.6194 17.4407 27.8994 17.142C28.1887 16.834 28.3334 16.3627 28.3334 15.728C28.3334 15.084 28.198 14.6313 27.9274 14.37C27.6567 14.1087 27.2134 13.978 26.5974 13.978H24.4134V17.59H26.5974Z"
                fill="white"
              />
            </svg>
            Current Setter 22
            <span>(X Points)</span>
          </p>
          <Goals
            goals={goals}
            handleChange={handleChange}
            errorFetch={errorFetch}
            isLoading={isLoading}
          />
        </div>
        <div className="done">
          <p>Done</p>
          <Goals
            goals={goals}
            handleChange={handleChange}
            errorFetch={errorFetch}
            isLoading={isLoading}
            done
          />
        </div>
      </div>
    </div>
  );
}
