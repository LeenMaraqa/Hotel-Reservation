import React, { useState, useEffect } from "react";
import { TEMP_DATA } from "../../data/temp-data";
import Hotel from "../../components/hotel/hotel.component";
import "./allhotel.css";
const AllHotel = () => {
  const [hotel, setHotel] = useState(TEMP_DATA);
  return (
    <div className="allhotel">
      <div className="maincontent">
        {hotel.map((hotel) => (
          <Hotel hotel={hotel} />
        ))}
      </div>
    </div>
  );
};
export default AllHotel;


