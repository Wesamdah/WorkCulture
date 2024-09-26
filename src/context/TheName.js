import React from "react";
import { createContext, useState, useEffect } from "react";
import FirstImg from "../assets/imgs/first.png";
import SecondImg from "../assets/imgs/second.png";
import ThirdImg from "../assets/imgs/third.png";

export const TeamsNamesContext = createContext();

export const TheNameProvider = ({ children }) => {
  const Names_Url = "http://localhost:3501/names";
  const [names, setNames] = useState([]);
  names.sort((a, b) => b.percentage - a.percentage);

  const [errorFetch, setErrorFetch] = useState("");
  const [isLoading, setIsloading] = useState(true);

  const handleRank = (allNames, index) => {
    if (allNames[index] === allNames[0]) {
      return <img src={FirstImg} alt="" />;
    } else if (allNames[index] === allNames[1]) {
      return <img src={SecondImg} alt="" />;
    } else if (allNames[index] === allNames[2]) {
      return <img src={ThirdImg} alt="" />;
    } else {
      return index + 1;
    }
  };

  const handleBorder = (agency) => {
    switch (agency.toLowerCase()) {
      case "devsyro":
        return "white";
      case "prosyro":
        return "#23C1FF";
      default:
        return "#A744FF";
    }
  };

  const handleCompleteColor = (percentage) => {
    if (percentage < 50) {
      return "rgba(238, 93, 80, 0.1)";
    } else if (percentage >= 50 && percentage < 75) {
      return "rgba(255, 235, 55, 0.1)";
    } else {
      return "rgba(5, 205, 153, 0.1)";
    }
  };

  const handleCompleteNumberColor = (percentage) => {
    if (percentage < 50) {
      return "rgba(238, 93, 80, 1)";
    } else if (percentage >= 50 && percentage < 75) {
      return "rgba(255, 235, 55, 1)";
    } else {
      return "rgba(5, 205, 153, 1)";
    }
  };

  useEffect(() => {
    const fetchNames = async () => {
      try {
        const response = await fetch(Names_Url);
        if (!response.ok) throw Error("Didn't Recive Expected Data");
        const namesList = await response.json();
        setNames(namesList);
        setErrorFetch(null);
      } catch (err) {
        setErrorFetch(err.message);
      } finally {
        setIsloading(false);
      }
    };
    setTimeout(() => {
      fetchNames();
    }, 2000);
  }, []);
  return (
    <TeamsNamesContext.Provider
      value={[
        names,
        handleRank,
        handleBorder,
        handleCompleteColor,
        handleCompleteNumberColor,
        errorFetch,
        isLoading,
      ]}
    >
      {children}
    </TeamsNamesContext.Provider>
  );
};
