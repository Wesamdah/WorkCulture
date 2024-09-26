import "./teammates.css";
// import { useState, useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
// import FirstImg from "../../../assets/imgs/first.png";
// import SecondImg from "../../../assets/imgs/second.png";
// import ThirdImg from "../../../assets/imgs/third.png";
import Profile from "../../../assets/imgs/clone of photo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
// import { TheNameProvider } from "../../../provider/TheName";
import { TeamsNamesContext } from "../../../context/TheName";

export default function TeamMates() {
  const [
    names,
    handleRank,
    handleBorder,
    handleCompleteColor,
    handleCompleteNumberColor,
    errorFetch,
    isLoading,
  ] = useContext(TeamsNamesContext);
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
  //     try {
  //       const response = await fetch(Names_Url);
  //       if (!response.ok) throw Error("Didn't Recive Expected Data");
  //       const namesList = await response.json();
  //       setNames(namesList);
  //       setErrorFetch(null);
  //     } catch (err) {
  //       setErrorFetch(err.message);
  //     } finally {
  //       setIsloading(false);
  //     }
  //   };
  //   setTimeout(() => {
  //     fetchNames();
  //   }, 2000);
  // }, []);

  return (
    <div className="card-4">
      <div className="head">
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
          >
            <g clipPath="url(#clip0_126_2925)">
              <path
                d="M23.841 16.224C25.6189 16.224 27.0605 14.7834 27.0605 13.0055C27.0605 11.2276 25.6189 9.78601 23.841 9.78601C22.0636 9.78601 20.6219 11.2276 20.6219 13.0055C20.622 14.7834 22.0636 16.224 23.841 16.224Z"
                fill="white"
              ></path>
              <path
                d="M27.9632 19.3262C27.8198 18.4643 27.1072 17.2578 26.5679 16.7189C26.4969 16.6475 26.1794 16.631 26.0936 16.6841C25.4379 17.0874 24.6677 17.3247 23.841 17.3247C23.0153 17.3247 22.245 17.0874 21.5893 16.6841C21.5031 16.631 21.1861 16.6475 21.115 16.7189C20.9642 16.8697 20.7997 17.0704 20.6393 17.3031C21.0733 18.1202 21.4174 18.9881 21.5416 19.7354C21.6658 20.4846 21.6255 21.1939 21.4247 21.8406C22.1377 22.0985 22.9928 22.2117 23.841 22.2117C26.0534 22.2117 28.3174 21.4446 27.9632 19.3262Z"
                fill="white"
              ></path>
              <path
                d="M13.9173 14.8659C16.7986 14.8659 19.1346 12.5299 19.1346 9.64861C19.1346 6.76822 16.7986 4.43219 13.9173 4.43219C11.0364 4.43219 8.70128 6.76822 8.70128 9.64861C8.70128 12.5299 11.0364 14.8659 13.9173 14.8659Z"
                fill="white"
              ></path>
              <path
                d="M18.335 15.665C18.2218 15.5523 17.7077 15.5235 17.5679 15.61C16.5044 16.2644 15.2562 16.6475 13.9173 16.6475C12.5793 16.6475 11.3305 16.2644 10.2675 15.61C10.1278 15.5234 9.61368 15.5523 9.50048 15.665C8.62433 16.5402 7.4696 18.4969 7.23729 19.8917C6.66449 23.3275 10.3345 24.5679 13.9173 24.5679C17.501 24.5679 21.171 23.3275 20.5982 19.8917C20.3658 18.4969 19.2111 16.5402 18.335 15.665Z"
                fill="white"
              ></path>
              <path
                d="M4.15893 16.224C5.93638 16.224 7.37795 14.7834 7.37795 13.0055C7.37795 11.2276 5.93638 9.78601 4.15893 9.78601C2.38099 9.78601 0.939423 11.2276 0.939423 13.0055C0.939423 14.7834 2.38099 16.224 4.15893 16.224Z"
                fill="white"
              ></path>
              <path
                d="M6.29421 19.7354C6.42622 18.9505 6.7987 18.0263 7.26568 17.1717C7.13552 16.9939 7.00542 16.839 6.88532 16.7189C6.81428 16.6475 6.49721 16.631 6.41107 16.6841C5.75532 17.0874 4.98504 17.3247 4.15893 17.3247C3.33271 17.3247 2.56195 17.0874 1.90674 16.6841C1.82099 16.631 1.50303 16.6475 1.432 16.7189C0.8913 17.2578 0.180636 18.4643 0.0366985 19.3262C-0.31702 21.4446 1.9466 22.2117 4.15893 22.2117C4.94846 22.2117 5.74575 22.1145 6.42622 21.8923C6.21179 21.2325 6.1664 20.5066 6.29421 19.7354Z"
                fill="white"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_126_2925">
                <rect
                  width="28"
                  height="28"
                  fill="white"
                  transform="translate(0 0.5)"
                ></rect>
              </clipPath>
            </defs>
          </svg>
          Team Mates
        </p>
        <div className="btns">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M7 13C3.68629 13 1 10.3137 1 7C1 5.46329 1.57771 4.06151 2.52779 3L4.33333 1M4.33333 1H1M4.33333 1V4.33333M7 1C10.3137 1 13 3.68629 13 7C13 8.53673 12.4223 9.93847 11.4722 11L9.66667 13M9.66667 13H13M9.66667 13V9.66667"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <Link to={"/dashbord/team"}>
            <Icon className="right-arrow" icon={"ri:arrow-right-line"} />
          </Link>
        </div>
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
