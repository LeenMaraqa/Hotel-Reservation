// import './App.css';
import Header from "./components/header/header.component";
import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/home/home";
import AllHotel from "./pages/all-hotel/all-hotel";
import LoginPage from "./pages/login/login-page";
import NotFound from "./pages/not-found/not-found";
import Signup from "./pages/signup/signup";
import List from "./components/list/list-room.components";
import Booking from "./pages/booking/booking";
import MyReservation from "./pages/reservation/view-reservation";
const getLoggedInUser = () => {
  const localUser = JSON.parse(localStorage.getItem("loggedInUsers"));
  return localUser || null;
};
function App() {
  const [currentUser, setcurrentUser] = useState(getLoggedInUser());
  const handleLogout = () => {
    localStorage.removeItem("loggedInUsers");
    setcurrentUser(null);
    window.location.href = "login";
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Header user={currentUser} handleLogout={handleLogout} />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="allhotel" element={<AllHotel />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<Signup />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="myReservation" element={<MyReservation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
