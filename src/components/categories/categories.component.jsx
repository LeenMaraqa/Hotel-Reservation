import "./categories.css";
import { Mountains, Cactus, HouseLine } from "phosphor-react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { TEMP_DATA } from "../../data/temp-data";
import Hotel from "../hotel/hotel.component";
import { beachesImg } from "../../images/beaches.png";
import "../../pages/all-hotel/allhotel.css";
const Categories = () => {
  const [params, setParams] = useSearchParams();
  const searchHotel = (event) => {
    const newParams = new URLSearchParams(params);
    if (event.target.value) {
      newParams.set("query", event.target.value);
    } else {
      newParams.delete("query");
    }
    setParams(newParams);
  };
  const [hotels, setHotels] = useState(TEMP_DATA);
  //sth
  const queryFromURL = params.get("query") || "";
  useEffect(() => {
    const searchQuery = queryFromURL.toLowerCase();
    const filteredHotels = TEMP_DATA.filter((hotel) => {
      let check = false;
      hotel.category == searchQuery ? (check = true) : (check = false);
      return check;
    });
    setHotels(filteredHotels);
  }, [queryFromURL]);
  return (
    <div>
      <div className="categories">
        <h1>Top Categories</h1>
        {/* <button><Mountains size={32} /></button>
            <button><Cactus size={32} /></button> 
                  <HouseLine size={24} weight="light" />*/}
        <button value="beaches" onClick={searchHotel}>
          <div className="beaches"></div>
          Beaches
        </button>
        <button value="deserts" onClick={searchHotel}>
          <div className="deserts"></div>
          Deserts
        </button>
        <button value="mountains" onClick={searchHotel}>
          <div className="mountains"></div>
          Mountains
        </button>
        <button value="iconic cities" onClick={searchHotel}>
          <div className="iconicCities"></div>
          Iconic Cities
        </button>
        <button value="houseboats" onClick={searchHotel}>
          <div className="houseboats"></div>
          Houseboats
        </button>
        <button value="country side" onClick={searchHotel}>
          <div className="countrySide"></div>
          Countryside
        </button>
        <button value="castles" onClick={searchHotel}>
          <div className="castles"></div>
          Castles
        </button>
        <button value="skiing" onClick={searchHotel}>
          <div className="skiing"></div>
          Skiing
        </button>
        <button value="camping" onClick={searchHotel}>
          <div className="camping"></div>
          Camping
        </button>
        <button value="tropical" onClick={searchHotel}>
          <div className="tropical"></div>
          Tropical
        </button>
      </div>

      <div className="test">
        {/* <h1 className="tophotels">Top Hotels</h1> */}
        <div className="maincontent">
          {hotels.map((hotel) => (
            <Hotel hotel={hotel} />
          ))}
        </div>
      </div>
      {/* <h1 className="tophotels">Top Hotels</h1> */}
    </div>
  );
};

export default Categories;
