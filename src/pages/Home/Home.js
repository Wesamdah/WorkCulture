import React, { useContext, useEffect } from "react";
import "./home.css";
import CurrentSetter from "./current/CurrentSetter";
import XPoints from "./xpoint/XPoints";
import { Context } from "../Main/Main";
import SettersStatistics from "./setters-statistics/SettersStatistics";
import TeamMates from "./teammeats/TeamMates";

export default function Home() {
  const [goals, handleChange, isLoading, errorFetch] = useContext(Context);

  useEffect(() => {
    document.title = "Work Culture | Home";
  }, []);

  return (
    <>
      <div className="wrapper">
        <CurrentSetter
          goals={goals}
          handleChange={handleChange}
          errorFetch={errorFetch}
          isLoading={isLoading}
        />
        <XPoints
          goals={goals}
          handleChange={handleChange}
          errorFetch={errorFetch}
          isLoading={isLoading}
        />
        <SettersStatistics />
        <TeamMates />
      </div>
    </>
  );
}
