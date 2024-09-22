import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./teamMateSetter.css";
import Header from "../Main/header/Header";
import MateInfo from "./MateInfo/MateInfo";
import MateCompleaton from "./MateCompleation/MateCompleaton";
import TeamGoals from "./TeamGoals/TeamGoals";
import { Context } from "../Main/Main";

export default function TeamMateSetter() {
  const { userId } = useParams();

  const Names_Url = `http://localhost:3501/names/${userId}`;
  const [choosenName, setChoosenName] = useState(null); // Set initial state to null

  const [goals, , isLoading, errorFetch] = useContext(Context);

  useEffect(() => {
    fetch(Names_Url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((theName) => setChoosenName(theName))
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setChoosenName("Error loading name"); // Set a fallback value in case of error
      });
  }, [Names_Url]); // Added Names_Url as a dependency to useEffect

  console.log(choosenName);

  return (
    <div className="mateSetter-wrapper">
      <Header userId={userId} choosenName={choosenName} />
      <div className="mateSetter-container">
        <MateInfo choosenName={choosenName} />
        <MateCompleaton
          goals={goals}
          isLoading={isLoading}
          errorFetch={errorFetch}
        />
      </div>
      <div className="mates-goals-container">
        <TeamGoals
          goals={goals}
          isLoading={isLoading}
          errorFetch={errorFetch}
        />
      </div>
    </div>
  );
}
