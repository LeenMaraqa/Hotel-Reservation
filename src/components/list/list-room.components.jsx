// import { useEffect } from "react";
// import { useState } from "react";
// import { useNavigate, useParams } from "react-router";
// import { fetchItem } from "../../data/tmp-data";
// import Reservation from "../../pages/reservation/reservation.pages";
// const List = () => {

//   const [loading, setLoading] = useState(false);
//   const [currentItem, setCurrentItem] = useState(null);
//   const params = useParams();
//   const navigate = useNavigate;
//   const getItem = async () => {
//     setLoading(true);
//     const item = await fetchItem(params.id);
//     if (item === null) {
//       navigate("/404", { replace: true });
//     }
//     setCurrentItem(item);
//     setLoading(false);
//   };
//   useEffect(() => {
//     getItem();
//   }, []);
//   return (
//     <div className="list">
//       <Reservation />
//       <div className="hotel">
//         <img src={currentItem.image} className="hotelImg" />
//         <div className="content">
//           <div className="box">
//             <div className="name">{currentItem.name}</div>

//             <div>Stars :{currentItem.stars}</div>
//           </div>
//           <div>City : {currentItem.city}</div>
//           <div>Address : {currentItem.address}</div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default List;
