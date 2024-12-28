import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/RegisterPage/Register";
import Users from "./pages/OurUser/OurUser";
import UserDetails from "./pages/UserDetails.jsx/UserDetails";
import LandingPages from "./pages/LandingPages/LandingPages";
import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/OurUser"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
