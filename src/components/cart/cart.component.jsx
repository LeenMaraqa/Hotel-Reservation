import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { TEMP_DATA } from "../../data/temp-data";
import Hotel from "../hotel/hotel.component";
import "./cart.css";

const Cart = (props) => {
    const [hotel , setHotel] = useState();
    const param = useParams();
    useEffect(()=>{
const currentHotel = TEMP_DATA.find((p)=> p.id == param.id)[0] ||null;
setHotel(currentHotel);
    },[ param.id , props.hotel])
  return (
    <div className="cart">
     <Hotel hotel = {hotel}/>
    </div>
  );
};

export default Cart;
