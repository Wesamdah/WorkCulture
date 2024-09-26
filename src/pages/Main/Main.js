import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { dashBordRoutes } from "../../routes";
import { createContext } from "react";
import axios from "axios";
// components
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Canvas from "./canvas/Canvas";
import AskQuestion from "./AskQuestion/AskQuestion";
import TeamMeatSetter from "../TeamMatesSetter/TeamMeatSetter";
import HomeSetters from "../Home/homesetters/HomeSetters";
import RequiredAuth from "../../RequiredAuth";
// providers
export const Context = createContext();
export const CanvasContext = createContext();

export default function Main() {
  const goals_URl = "http://localhost:3500/goals";
  const [goals, setGoals] = useState([]);
  const [errorFetch, setErrorFetch] = useState("");
  const [isLoading, setIsloading] = useState(true);
  const [showAsk, setShowAsk] = useState(false);
  // for Canvas
  const [showCanvas, setShowCanvas] = useState(false);
  // for goal in cana
  const [canavsGoal, setCnavasGoal] = useState("");

  const handleChange = (id) => {
    const ListGoals = goals.map((goal) =>
      goal.id === id
        ? { ...goal, checked: !goal.checked } &&
          axios.patch(`${goals_URl}/${id}`, { checked: !goal.checked })
        : goal
    );
    setGoals(ListGoals);
  };

  const handleGoals = (id) => {
    const chooseGoal = goals.filter((goal) => goal.id === id);
    setCnavasGoal(chooseGoal);
  };

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await fetch(goals_URl);
        if (!response.ok) throw Error("Didn't Recive Expected Data");
        const goalsList = await response.json();
        setGoals(goalsList);
        setErrorFetch(null);
      } catch (err) {
        setErrorFetch(err.message);
      } finally {
        setIsloading(false);
      }
    };
    setTimeout(() => {}, 2000);
    fetchGoals();
  }, []);

  return (
    <>
      <div
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgb(0,0,0,0.6)",
          display: showAsk ? "block" : "none",
          zIndex: "99",
        }}
      ></div>
      <div className="main-contnet" style={{ display: "flex" }}>
        <CanvasContext.Provider
          value={[
            showCanvas,
            setShowCanvas,
            handleGoals,
            canavsGoal,
            setCnavasGoal,
          ]}
        >
          <Sidebar showAsk={showAsk} setShowAsk={setShowAsk} />
          <div
            style={{ width: "100%", height: "100vh", zIndex: showAsk ? -1 : 1 }}
          >
            <Header />
            <Context.Provider
              value={[goals, handleChange, isLoading, errorFetch]}
            >
              <Routes>
                {dashBordRoutes.map((route, index) =>
                  route.layout === "admin" ? (
                    <Route
                      key={index}
                      element={<RequiredAuth allowedRoles={"admin"} />}
                    >
                      <Route path={route.path} element={route.component} />
                    </Route>
                  ) : (
                    <Route
                      key={index}
                      element={<RequiredAuth allowedRoles={"user"} />}
                    >
                      <Route path={route.path} element={route.component} />
                    </Route>
                  )
                )}
                <Route element={<RequiredAuth allowedRoles={"user"} />}>
                  <Route path="home/setter" element={<HomeSetters />} />
                  <Route path="users/:userId" element={<TeamMeatSetter />} />
                </Route>
              </Routes>
            </Context.Provider>
          </div>
          <Canvas goals={goals} />
        </CanvasContext.Provider>
      </div>

      <AskQuestion showAsk={showAsk} setShowAsk={setShowAsk} />
    </>
  );
}
