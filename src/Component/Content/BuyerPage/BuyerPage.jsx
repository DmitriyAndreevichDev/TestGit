import React from "react";
import {connect} from "react-redux";


const BuyerPage = (props) => {

    const id = props.match.params.userId;

    const buyer = props.buyers[id-1];
    console.log(buyer);
    return (
        <section>
            <h3>Id Пользователя: {buyer.id}</h3>
            <h3>Имя пользователя: {buyer.name}</h3>

            <ul> Основная информация:
                <li>Средний чек: {buyer.averageCheck}</li>
                <li>Количество покупок: {buyer.totalItem}</li>
                <li>Общая выручка: {buyer.total}</li>
            </ul>
        </section>
    )
};
const mapStateToProps = (state) => (
    {
        buyers: state.buyers.buyersArr
    }
);
export default connect(mapStateToProps)(BuyerPage)