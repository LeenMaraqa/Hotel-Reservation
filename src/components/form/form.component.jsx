import "./form.css";
import { CalendarBlank, MagnifyingGlass } from "phosphor-react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { TEMP_DATA } from "../../data/temp-data";
import AllHotel from "../../pages/all-hotel/all-hotel";
import Hotel from "../hotel/hotel.component";
import Categories from "../categories/categories.component";
const Form = () => {
  // let check = false;
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
  //************************** */
  const queryFromURL = params.get("query") || "";
  useEffect(() => {
    const searchQuery = queryFromURL.toLowerCase();
    const filteredHotels = TEMP_DATA.filter((hotel) => {
      let check = false;
      check =
        hotel.name.toLowerCase().startsWith(searchQuery) ||
        hotel.city.toLowerCase().startsWith(searchQuery);
      return check;
    });
    setHotels(filteredHotels);
  }, [queryFromURL]);
  return (
    <div>
      <form className="form">
        {/* <span><MagnifyingGlass size={30} color=' #adb3b6'/></span> */}
        <input
          type="text"
          placeholder="search hotels, destinations"
          className="text-input"
          onChange={searchHotel}
        />
        {/* <CalendarBlank size={30} /> */}
        <input type="date" className="input-date" />
        <label> Check in</label>
        {/* <CalendarBlank size={30}/> */}
        <input type="date" className="input-date" />
        <label> Check out</label>
        <button className="button-17" onClick={searchHotel}>
          Search
        </button>
      </form>
      <Categories />
      <div className="allhotel">
        {hotels.map((hotel) => (
          <Hotel hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default Form;
