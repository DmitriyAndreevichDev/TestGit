// import React, {useState} from "react";
// import {connect} from "react-redux";
// import Buyers from "./Buyers";
//
//
// const BuyersFilter = (props) => {
//     const [isBuyers, setBuyers] = useState(false);
//         const changeMode = (num) => {
//             const arr = props.buyers.filter(item => item.id <= num);
//
//             return (
//                 <Buyers props={arr}/>
//             );
//         };
//         return (
//             <div>
//                 <h5>Вывести пользователей:</h5>
//                 <button onClick={changeMode.bind(null, 5)}>5</button>
//                 <button onClick={changeMode.bind(null, 10)}>10</button>
//                 <button onClick={changeMode.bind(null, 15)}>15</button>
//             </div>
//         );
//
//     }
// }
// let mapStateToProps = (state) => ({
//         buyers: state.buyers.buyersArr
//     });
//
// export default connect(mapStateToProps)(BuyersFilter);




