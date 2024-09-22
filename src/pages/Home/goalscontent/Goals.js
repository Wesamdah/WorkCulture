import React from "react";
import "./goals.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext } from "react";
import { CanvasContext } from "../../Main/Main";

export default function Goals({
  goals,
  actual,
  handleChange,
  errorFetch,
  isLoading,
  done,
}) {
  const [, setShowCanvas, handleGoals, ,] = useContext(CanvasContext);

  return (
    <div
      className={actual ? "goals-container" : "goals-container-2"}
      style={{ maxHeight: goals.length ? "270px" : "fit-content" }}
    >
      {isLoading && <p>Loading Items</p>}
      {errorFetch && <p style={{ color: "red" }}>{`Error : ${errorFetch}`}</p>}
      {!errorFetch && !isLoading && goals.length ? (
        <>
          {goals.map((goal, index) =>
            !done ? (
              actual ? (
                goal.type === "actuall work" && (
                  <div key={index}>
                    {!goal.checked && (
                      <div
                        key={index}
                        className="goal-box"
                        style={{
                          borderColor: goal.checked && "white",
                          opacity: goal.checked && 0.6,
                        }}
                      >
                        {/* for actuall goals don't complet */}
                        {handleChange ? (
                          <>
                            {" "}
                            <div
                              className={
                                goal.checked ? "checked" : "non-checked"
                              }
                              onClick={() => handleChange(goal.id)}
                            >
                              {goal.checked ? (
                                <Icon icon={"material-symbols:check"} />
                              ) : null}
                            </div>
                            <div
                              className="text"
                              style={{
                                width: "80%",
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                              }}
                              onClick={() => {
                                setShowCanvas(true);
                                handleGoals(goal.id);
                              }}
                            >
                              <p>{goal.title}</p>
                            </div>
                          </>
                        ) : (
                          <>
                            {" "}
                            <div
                              className={
                                goal.checked ? "checked" : "non-checked"
                              }
                            >
                              {goal.checked ? (
                                <Icon icon={"material-symbols:check"} />
                              ) : null}
                            </div>
                            <div
                              className="text"
                              style={{
                                width: "80%",
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                              }}
                            >
                              <p>{goal.title}</p>
                            </div>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                )
              ) : (
                <div key={index}>
                  {goal.type === "x point" && (
                    <>
                      {!goal.checked && (
                        <div
                          key={index}
                          className="goal-box"
                          style={{
                            borderColor: goal.checked && "white",
                            opacity: goal.checked && 0.6,
                          }}
                        >
                          {/* for x goals don't complet */}
                          {handleChange ? (
                            <>
                              {" "}
                              <div
                                className={
                                  goal.checked ? "checked" : "non-checked"
                                }
                                onClick={() => handleChange(goal.id)}
                              >
                                {goal.checked ? (
                                  <Icon icon={"material-symbols:check"} />
                                ) : null}
                              </div>
                              <div
                                className="text"
                                style={{
                                  width: "80%",
                                  height: "100%",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "flex-start",
                                }}
                                onClick={() => {
                                  setShowCanvas(true);
                                  handleGoals(goal.id);
                                }}
                              >
                                <p>{goal.title}</p>
                              </div>
                            </>
                          ) : (
                            <>
                              {" "}
                              <div
                                className={
                                  goal.checked ? "checked" : "non-checked"
                                }
                              >
                                {goal.checked ? (
                                  <Icon icon={"material-symbols:check"} />
                                ) : null}
                              </div>
                              <div
                                className="text"
                                style={{
                                  width: "80%",
                                  height: "100%",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "flex-start",
                                }}
                              >
                                <p>{goal.title}</p>
                              </div>
                            </>
                          )}
                        </div>
                      )}
                    </>
                  )}
                </div>
              )
            ) : actual ? (
              goal.type === "actuall work" && (
                <div key={index}>
                  {goal.checked && (
                    <div
                      key={index}
                      className="goal-box"
                      style={{
                        borderColor: goal.checked && "white",
                        opacity: goal.checked && 0.6,
                      }}
                    >
                      {/* for actuall goals did complet */}
                      {handleChange ? (
                        <>
                          {" "}
                          <div
                            className={goal.checked ? "checked" : "non-checked"}
                            onClick={() => handleChange(goal.id)}
                          >
                            {goal.checked ? (
                              <Icon icon={"material-symbols:check"} />
                            ) : null}
                          </div>
                          <div
                            className="text"
                            style={{
                              width: "80%",
                              height: "100%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "flex-start",
                            }}
                            onClick={() => {
                              setShowCanvas(true);
                              handleGoals(goal.id);
                            }}
                          >
                            <p>{goal.title}</p>
                          </div>
                        </>
                      ) : (
                        <>
                          {" "}
                          <div
                            className={goal.checked ? "checked" : "non-checked"}
                          >
                            {goal.checked ? (
                              <Icon icon={"material-symbols:check"} />
                            ) : null}
                          </div>
                          <div
                            className="text"
                            style={{
                              width: "80%",
                              height: "100%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "flex-start",
                            }}
                          >
                            <p>{goal.title}</p>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              )
            ) : (
              <div key={index}>
                {goal.type === "x point" && (
                  <>
                    {goal.checked && (
                      <div
                        key={index}
                        className="goal-box"
                        style={{
                          borderColor: goal.checked && "white",
                          opacity: goal.checked && 0.6,
                        }}
                      >
                        {/* for x goals did complet */}
                        {handleChange ? (
                          <>
                            {" "}
                            <div
                              className={
                                goal.checked ? "checked" : "non-checked"
                              }
                              onClick={() => handleChange(goal.id)}
                            >
                              {goal.checked ? (
                                <Icon icon={"material-symbols:check"} />
                              ) : null}
                            </div>
                            <div
                              className="text"
                              style={{
                                width: "80%",
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                              }}
                              onClick={() => {
                                setShowCanvas(true);
                                handleGoals(goal.id);
                              }}
                            >
                              <p>{goal.title}</p>
                            </div>
                          </>
                        ) : (
                          <>
                            {" "}
                            <div
                              className={
                                goal.checked ? "checked" : "non-checked"
                              }
                            >
                              {goal.checked ? (
                                <Icon icon={"material-symbols:check"} />
                              ) : null}
                            </div>
                            <div
                              className="text"
                              style={{
                                width: "80%",
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                              }}
                            >
                              <p>{goal.title}</p>
                            </div>
                          </>
                        )}
                      </div>
                    )}
                  </>
                )}
              </div>
            )
          )}
        </>
      ) : (
        !isLoading && (
          <p
            style={{
              margin: "15px 0",
              display: "flex",
              justifyContent: "flex-start",
              color: "white",
            }}
          >
            "there are no goals"
          </p>
        )
      )}
    </div>
  );
}
