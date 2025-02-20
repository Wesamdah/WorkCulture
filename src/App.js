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
          <Route path="/work-culture/SignUp" element={<SignUp />} />
          <Route path="/work-culture/Login" element={<Login />} />
          <Route
            path="/work-culture"
            element={<Navigate to="/work-culture/login" />}
          />
          <Route path="/*" element={<Error />} />
          <Route path="/work-culture/unauthorized" element={<Unauthorized />} />

          {/* private route */}
          <Route path="/work-culture/dashbord/*" element={<MainLayout />} />
          <Route
            path="/work-culture/dashbord"
            element={<Navigate to="/work-culture/dashbord/home" />}
          />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
