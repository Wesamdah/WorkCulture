import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// components
import MainLayout from "./pages/Main/Main";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Error from "./pages/Error";
import Unauthorized from "./pages/Unauthorized/Unauthorized";

export function App() {
  return (
    <BrowserRouter basename="/work-culture">
      <AnimatePresence mode="wait">
        <Routes>
          {/* public Routes */}
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/*" element={<Error />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* private route */}
          <Route path="/dashbord/*" element={<MainLayout />} />
          <Route path="/dashbord" element={<Navigate to="/dashbord/home" />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
