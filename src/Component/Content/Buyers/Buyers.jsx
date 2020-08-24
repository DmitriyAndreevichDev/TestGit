import React, {useState} from "react";
import _ from "lodash";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const Buyers = (props) => {
    const [sort, setSort] = useState(`asc`);
    const [arr, setArr] = useState(_.orderBy(props.buyers, [props.id, props.buyers], `asc`));
    const [isSelected, setSelected] = useState(true)

    const onSorting = sortField => {
        const clonedArr = arr;
        sort === 'asc' ? setSort('desc') : setSort('asc');
        const orderArr = _.orderBy(clonedArr, sortField, sort);
        setArr(orderArr);
        console.log(props.buyers)
    };
    if(isSelected){
        return (
            <div>

            </div>
        )
    }
        return (
            <section className={`content__buyers`}>
                <h3>Buyers</h3>
                <table className={`table`}>
                    <thead>
                    <tr>

                        <th onClick={onSorting.bind(null, 'id')}>Id покупателя</th>
                        <th onClick={onSorting.bind(null, 'name')}>Имя покупателя</th>
                        <th onClick={onSorting.bind(null, 'averageCheck')}>Средний чек</th>
                        <th onClick={onSorting.bind(null, 'totalItem')}>Количество покупок</th>
                        <th onClick={onSorting.bind(null, 'total')}>Общая выручка</th>

                    </tr>
                    </thead>
                    {/*Информация о покупателе*/}
                    <tbody>
                    {
                        arr.map((person) =>
                            <tr key={person.id}>
                                <th><Link to={`/buyer/${person.id}`}>{person.id}</Link></th>
                                <th>{person.name}</th>
                                <th>{person.averageCheck}</th>
                                <th>{person.totalItem}</th>
                                <th>{person.total}</th>
                            </tr>)
                    }
                    </tbody>
                </table>

            </section>
        );





}

const mapStateToProps = (state) => ({
    buyers: state.buyers.buyersArr
});

export default connect(mapStateToProps)(Buyers);