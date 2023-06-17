import React from "react";
import "./hotel.css";
import { useNavigate } from "react-router";

const Hotel = (props) => {
  const navigate = useNavigate();
  const reservation = () => {
    if (!localStorage.getItem("loggedInUsers")) {
      alert("Sorry, Please login to make reservation");
      window.location.href = "login";
    } else {
      console.log(props.hotel.name);
      navigate(`/booking/${props.hotel.id}`);
    }
  };
  return (
    <div className="hotel">
      <img src={props.hotel.image} className="hotelImg" />
      <div className="content">
        <div className="box">
          <div className="name">{props.hotel.name}</div>

          <div>Stars :{props.hotel.stars}</div>
          {/* <span>&#9733;</span> */}
          {/* <span>&#2605;</span> */}
        </div>
        {/* <div>category : {props.hotel.category}</div> */}
        <div>City : {props.hotel.city}</div>
        <div>Address : {props.hotel.address}</div>
        <button className="bookingbtn" onClick={() => reservation()}>
          Booking
        </button>
      </div>
    </div>
  );
};

export default Hotel;
