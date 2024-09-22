import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./pages/Main/Main";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
// import Error from "./pages/Error";
import { AnimatePresence } from "framer-motion";
import RequiredAuth from "./RequiredAuth";
export function App() {
  return (
    <>
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/*" element={<Navigate to="/Login" />} />
            {/* <Route path="/*" element={<Error />} /> */}
            <Route element={<RequiredAuth />}>
              <Route path="/dashbord/*" element={<MainLayout />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
}

export default App;
