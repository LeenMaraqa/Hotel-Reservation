import "./view-reservation.css";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Navigate } from "react-router-dom";

const MyReservation = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("reservations"))
  );
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUsers"))
  );

  if (currentUser == null) {
    alert("please login to see your reservation");
    window.location.href = "login";
  }
  if (data == null) {
    alert("You have not made any reservations recently ");
    window.location.href = "/home";
  }
  console.log("data:", data);
  console.log("currentUser:", currentUser);
  const filterReservation = data.filter((data) => currentUser == data.userName);
  console.log("filterReservation.length", filterReservation.length);
  console.log("filterReservation :", filterReservation);
  if (filterReservation.length == 0) {
    alert("You have not made any reservations recently");
  }

  const tableRows = filterReservation.map((element) => {
    return (
      <div>
        <tr>
          <td>{element.hotelName}</td>
          <td>{element.checkin}</td>
          <td>{element.checkout}</td>
          <td>{element.adult}</td>
          <td>{element.child}</td>
          <td>{element.room}</td>
        </tr>
      </div>
    );
  });
  return (
    <div className="reservation">
      <h1 className="hello-box">
        Hello {currentUser} , This information is related to your reservations{" "}
      </h1>
      <div className="res-data">
        <table>
          <thead>
            <tr className="tableHeader">
              <th className="th1"> Hotel Name</th>
              <th className="th2">checkin</th>
              <th className="th3">checkout</th>
              <th className="th4">adult</th>
              <th className="th5">child</th>
              <th className="th6">room</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReservation;
