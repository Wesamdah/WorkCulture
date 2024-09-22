import React from "react";
// import { useState, useEffect } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import FirstImg from "../../assets/imgs/first.png";
// import SecondImg from "../../assets/imgs/second.png";
// import ThirdImg from "../../assets/imgs/third.png";
import Profile from "../../assets/imgs/clone of photo.png";
import "./team.css";
import { TeamsNamesContext } from "../../provider/TheName";
import { useContext } from "react";

export default function Team() {
  const [
    names,
    handleRank,
    handleBorder,
    handleCompleteColor,
    handleCompleteNumberColor,
    errorFetch,
    isLoading,
  ] = useContext(TeamsNamesContext);

  const [yourAgencies, setYourAgencies] = useState(true);

  useEffect(() => {
    document.title = "Work Culture | Team";
  }, []);

  // const Names_Url = "http://localhost:3501/names";
  // const [names, setNames] = useState([]);
  // names.sort((a, b) => b.percentage - a.percentage);

  // const [errorFetch, setErrorFetch] = useState("");
  // const [isLoading, setIsloading] = useState(true);

  // const handleRank = (allNames, index) => {
  //   if (allNames[index] === allNames[0]) {
  //     return <img src={FirstImg} alt="" />;
  //   } else if (allNames[index] === allNames[1]) {
  //     return <img src={SecondImg} alt="" />;
  //   } else if (allNames[index] === allNames[2]) {
  //     return <img src={ThirdImg} alt="" />;
  //   } else {
  //     return index + 1;
  //   }
  // };

  // const handleBorder = (agency) => {
  //   switch (agency.toLowerCase()) {
  //     case "devsyro":
  //       return "white";
  //     case "prosyro":
  //       return "#23C1FF";
  //     default:
  //       return "#A744FF";
  //   }
  // };

  // const handleCompleteColor = (percentage) => {
  //   if (percentage < 50) {
  //     return "rgba(238, 93, 80, 0.1)";
  //   } else if (percentage >= 50 && percentage < 75) {
  //     return "rgba(255, 235, 55, 0.1)";
  //   } else {
  //     return "rgba(5, 205, 153, 0.1)";
  //   }
  // };

  // const handleCompleteNumberColor = (percentage) => {
  //   if (percentage < 50) {
  //     return "rgba(238, 93, 80, 1)";
  //   } else if (percentage >= 50 && percentage < 75) {
  //     return "rgba(255, 235, 55, 1)";
  //   } else {
  //     return "rgba(5, 205, 153, 1)";
  //   }
  // };

  // useEffect(() => {
  //   const fetchNames = async () => {
  //     if (yourAgencies) {
  //       try {
  //         const response = await fetch(Names_Url);
  //         if (!response.ok) throw Error("Didn't Recive Expected Data");
  //         const namesList = await response.json();
  //         setNames(namesList);
  //         setErrorFetch(null);
  //       } catch (err) {
  //         setErrorFetch(err.message);
  //       } finally {
  //         setIsloading(false);
  //       }
  //     } else {
  //       try {
  //         const response = await fetch(Names_Url);
  //         if (!response.ok) throw Error("Didn't Recive Expected Data");
  //         const namesList = await response.json();
  //         setNames(namesList);
  //         setErrorFetch(null);
  //       } catch (err) {
  //         setErrorFetch(err.message);
  //       } finally {
  //         setIsloading(false);
  //       }
  //     }
  //   };

  //   setTimeout(() => {
  //     fetchNames();
  //   }, 2000);
  // }, [yourAgencies]);

  return (
    <div className="team">
      <div className="title">
        <p
          className={yourAgencies ? "activated" : "not-active"}
          onClick={() => setYourAgencies(true)}
        >
          Leagership Board
        </p>
        <p
          className={!yourAgencies ? "activated" : "not-active"}
          onClick={() => setYourAgencies(false)}
        >
          Team Agencies
        </p>
      </div>
      <div className="names-container" style={{ padding: "25px 20px  0 " }}>
        {isLoading && <p>Loading Names</p>}
        {errorFetch && (
          <p style={{ color: "red" }}>{`Error : ${errorFetch}`}</p>
        )}
        {!errorFetch && !isLoading && names.length ? (
          <>
            {names.map((justName, index) => (
              <div
                key={index}
                className="name-block"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "60px",
                  width: "100%",
                }}
              >
                <div
                  className="info"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <div className="rank">{handleRank(names, index)}</div>
                  <div
                    className="img"
                    style={{ borderColor: handleBorder(justName.agency) }}
                  >
                    <img
                      src={Profile}
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    ></img>
                  </div>
                  <Link to={`/dashbord/users/${justName.id}`} className="text">
                    <p>{justName.name}</p>
                    <p style={{ color: handleBorder(justName.agency) }}>
                      {justName.agency}
                    </p>
                  </Link>
                </div>
                <div
                  className="complete-percentage"
                  style={{
                    backgroundColor: handleCompleteColor(justName.percentage),
                    padding: "7px",
                    borderRadius: "7px",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      color: handleCompleteNumberColor(justName.percentage),
                    }}
                  >
                    {justName.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            {!isLoading && (
              <p
                style={{
                  margin: "15px 0",
                  display: "flex",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                "there are no Names"
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
