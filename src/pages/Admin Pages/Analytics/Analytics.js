import React, { useEffect } from "react";
import "./analytics.css";
import lineImg from "../../../assets/imgs/admin line pic.png";
import ProfileImg from "../../../assets/imgs/testingProfilePic.jpg";
export default function Analytics() {
  const simpleNmaeArray = [
    {
      name: "lynn Deeb",
      agency: "Product Syro",
    },
    {
      name: "lynn Deeb",
      agency: "Product Syro",
    },
    {
      name: "lynn Deeb",
      agency: "Product Syro",
    },
  ];

  useEffect(() => {
    document.title = "Work Culture | Analytics";
  }, []);
  return (
    <div className="analytics-wrapper">
      <div className="cards-container">
        <div className="overdue-tasks-border">
          <div className="overdue-tasks">
            <div className="text-info">
              <p>Overdue Tasks</p>
              <p>55</p>
            </div>
            <div className="image-info">
              <img src={lineImg} alt="" />
            </div>
          </div>
        </div>
        <div className="candidaye-of-bob-border">
          <div className="candidaye-of-bob">
            <div className="text-info">
              <p>Candidaye of BOB</p>
              <p>Lynn Deeb</p>
            </div>
            <div className="image-info">
              <img src={lineImg} alt="" />
            </div>
          </div>
        </div>
        <div className="total-members-border">
          <div className="total-members">
            <div className="text-info">
              <p>Total Members</p>
              <p>300</p>
            </div>
            <div className="image-info">
              <img src={lineImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="agencies-container">
        <div className="prosyro-container">
          <div className="prosyro">
            <p>ProSyro Agency</p>
            <div
              className="percentage"
              style={{
                background:
                  "linear-gradient(103.18deg, #00fefc -41.67%, #0002fe 141.58%)",
                color: "white",
              }}
            >
              55%
            </div>

            <div className="the-members">
              {simpleNmaeArray.map((member) => (
                <div className="the-member">
                  <div
                    className="profile-pic"
                    style={{ border: "2px solid #23C1FF" }}
                  >
                    <img src={ProfileImg} alt="" />
                  </div>
                  <div>
                    <p
                      style={{
                        color: "white",
                        fontWeight: "700",
                        fontSize: "14px",
                      }}
                    >
                      {member.name}
                    </p>
                    <p
                      style={{
                        color: " #23C1FF",
                        fontWeight: "600",
                        fontSize: "12px",
                      }}
                    >
                      {member.agency}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="isyro-container">
          <div className="isyro">
            <p>iSyro Agency</p>
            <div
              className="percentage"
              style={{ backgroundColor: "yellow", color: "black" }}
            >
              55%
            </div>
            <div className="the-members">
              {simpleNmaeArray.map((member) => (
                <div className="the-member">
                  <div
                    className="profile-pic"
                    style={{ border: "2px solid #FFEB37" }}
                  >
                    <img src={ProfileImg} alt="" />
                  </div>
                  <div>
                    <p
                      style={{
                        color: "white",
                        fontWeight: "700",
                        fontSize: "14px",
                      }}
                    >
                      {member.name}
                    </p>
                    <p
                      style={{
                        color: " #FFEB37",
                        fontWeight: "600",
                        fontSize: "12px",
                      }}
                    >
                      {member.agency}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="artsyro-container">
          <div className="artsyro">
            <p>ArtSyro Agency</p>
            <div
              className="percentage"
              style={{ backgroundColor: "#9824FF", color: "black" }}
            >
              55%
            </div>
            <div className="the-members">
              {simpleNmaeArray.map((member) => (
                <div className="the-member">
                  <div
                    className="profile-pic"
                    style={{ border: "2px solid #9824FF" }}
                  >
                    <img src={ProfileImg} alt="" />
                  </div>
                  <div>
                    <p
                      style={{
                        color: "white",
                        fontWeight: "700",
                        fontSize: "14px",
                      }}
                    >
                      {member.name}
                    </p>
                    <p
                      style={{
                        color: " #9824FF",
                        fontWeight: "600",
                        fontSize: "12px",
                      }}
                    >
                      {member.agency}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="devsyro-container">
          <div className="devsyro">
            <p>DevSyro Agency</p>
            <div
              className="percentage"
              style={{ backgroundColor: "white", color: "black" }}
            >
              55%
            </div>
            <div className="the-members">
              {simpleNmaeArray.map((member) => (
                <div className="the-member">
                  <div
                    className="profile-pic"
                    style={{ border: "3px solid white" }}
                  >
                    <img src={ProfileImg} alt="" />
                  </div>
                  <div>
                    <p
                      style={{
                        color: "white",
                        fontWeight: "700",
                        fontSize: "14px",
                      }}
                    >
                      {member.name}
                    </p>
                    <p
                      style={{
                        color: " white",
                        fontWeight: "600",
                        fontSize: "12px",
                      }}
                    >
                      {member.agency}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bussnies-container">
          <div className="bussnies">
            {" "}
            <p>Business Agency</p>
            <div
              className="percentage"
              style={{ backgroundColor: "#09C76A", color: "white" }}
            >
              55%
            </div>
            <div className="the-members">
              {simpleNmaeArray.map((member) => (
                <div className="the-member">
                  <div
                    className="profile-pic"
                    style={{ border: "3px solid #09C76A" }}
                  >
                    <img src={ProfileImg} alt="" />
                  </div>
                  <div>
                    <p
                      style={{
                        color: "white",
                        fontWeight: "700",
                        fontSize: "14px",
                      }}
                    >
                      {member.name}
                    </p>
                    <p
                      style={{
                        color: " #09C76A",
                        fontWeight: "600",
                        fontSize: "12px",
                      }}
                    >
                      {member.agency}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
