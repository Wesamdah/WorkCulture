import React from "react";
import "./questionsSection.css";
import { useContext } from "react";
import { TeamsNamesContext } from "../../context/TheName";
import MemberQusetions from "./MembersQuestion";

export default function QuestionsSection() {
  const [names, , handleBorder, , , errorFetch, isLoading] =
    useContext(TeamsNamesContext);

  return (
    <div className="members-questions">
      {isLoading && <p>Loading Names</p>}
      {errorFetch && <p style={{ color: "red" }}>{`Error : ${errorFetch}`}</p>}
      {!errorFetch && !isLoading && names.length ? (
        <>
          {names.map((member, index) => (
            <div key={index} className="the-member-question">
              <MemberQusetions
                member={member}
                handleBorder={handleBorder}
                index={index}
              />
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
  );
}
