import { useState, useEffect } from "react";
import "./booking.css";
import { DatePicker, Space } from "antd";
import { useParams } from "react-router-dom";
import { TEMP_DATA } from "../../data/temp-data";
const { RangePicker } = DatePicker;
const Booking = () => {
  let { id } = useParams();

  const test = id;

  const [checkin, setcheckin] = useState("");
  const [checkout, setcheckout] = useState("");
  const [room, setroom] = useState("");
  const [Currentroom, setCurrentroom] = useState({});
  const [child, setchild] = useState("");
  const [adult, setsdult] = useState("");

  // const navigate = useNavigate();
  const [reservation, setReservation] = useState(
    JSON.parse(localStorage.getItem("reservations")) || []
  );
  //setroom(TEMP_DATA.filter((item) => item.id == id));

  const handleSubmit = (event) => {
    event.preventDefault();
    const newReservation = {
      id: Date.now(),
      userName: JSON.parse(localStorage.getItem("loggedInUsers")) || "",
      checkin: event.target.date1.value,
      checkout: event.target.date2.value,
      room: event.target.room.value,
      child: event.target.child.value,
      adult: event.target.adult.value,
      hotelName: Currentroom.name,
    };
    console.log(newReservation);
    setReservation([...reservation, newReservation]);
    alert("Reservation successful");
    //**** */
  };

  useEffect(() => {
    console.log(id);
    console.log(TEMP_DATA.filter((item) => item.id == id));
    setCurrentroom(TEMP_DATA.filter((item) => item.id == id)[0]);
    localStorage.setItem("reservations", JSON.stringify(reservation));
  }, [reservation]);
  return (
    <div className="reserve">
      <div className="hotelinfo">
        {" "}
        <div>{Currentroom.name} </div>
        <br />
        <img src={Currentroom.image} width={400} />
      </div>

      <form onSubmit={handleSubmit} className="form-2">
        <div>
          <label>
            Check in
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </label>
          <input
            type="date"
            name="date1"
            placeholder="check in"
            onChange={(event) => setcheckin(event.target.value)}
            value={checkin}
            className="inputs"
            required
          />
        </div>
        <div>
          <label>
            Check out
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </label>

          <input
            type="date"
            name="date2"
            placeholder="check out"
            onChange={(event) => setcheckout(event.target.value)}
            value={checkout}
            className="inputs"
            required
          />
        </div>

        <div>
          <label>Number of adult &nbsp;</label>
          <input
            type="text"
            name="adult"
            onChange={(event) => setsdult(event.target.value)}
            value={adult}
            className="inputs"
            required
          />
        </div>
        <div>
          <label>Number of child &nbsp;</label>
          <input
            type="text"
            name="child"
            onChange={(event) => setchild(event.target.value)}
            value={child}
            className="inputs"
            required
          />
        </div>
        <div>
          <label>Number of rooms</label>
          <input
            type="text"
            name="room"
            onChange={(event) => setroom(event.target.value)}
            value={room}
            className="inputs"
            required
          />
        </div>
        <input
          className="button-50"
          type="submit"
          name="reserv_submit"
          value="Reserve Now"
        />
      </form>
    </div>
  );
};
export default Booking;
