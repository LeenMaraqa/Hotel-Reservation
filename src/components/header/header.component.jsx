import React from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { SignOut } from "phosphor-react";
const Header = (props) => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("loggedInUsers");
  return (
    <div className="header">
      <div className="container">
        <span>trxvl.</span>
        <div className="links">
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
          <Link
            to="/allHotel"
            style={{ textDecoration: "none", color: "white" }}
          >
            All Hotel
          </Link>
          <Link
            to="/myReservation"
            style={{ textDecoration: "none", color: "white" }}
          >
            My Reservation
          </Link>
          {userName == null ? (
            <div className="optional-box">
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                Login
              </Link>
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "white" }}
              >
                Sign up
              </Link>
            </div>
          ) : (
            <div className="userBox">
              <div
                className="userName"
                style={{ textDecoration: "none", color: "white" }}
              >
                {JSON.parse(userName)}
              </div>
              <button onClick={props.handleLogout}>
                <SignOut size={28} weight="light" />
              </button>
            </div>
          )}
          {/* 
          {userName !== null ? (
            <div className="userBox">
              <div
                className="userName"
                style={{ textDecoration: "none", color: "white" }}
              >
                {JSON.parse(userName)}
              </div>
              <button onClick={props.handleLogout}>
                <SignOut size={28} weight="light" />
              </button>
            </div>
          ) : (
            <div></div>
          )} */}

          {/* <button onClick={()=>navigate('/login')} className = 'logout'>Logout</button> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
