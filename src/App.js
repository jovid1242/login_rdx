import { Routes, Route } from "react-router-dom";
import { selectUser } from "./slices/user";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

import Register from "./pages/Registration";
import { useSelector } from "react-redux";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      {user ? (
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" exact element={<Login />} />
        </Routes>
      )}
    </>
  );
}

export default App;
