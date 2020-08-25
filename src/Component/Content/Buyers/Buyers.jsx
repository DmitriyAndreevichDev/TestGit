import React, {useState} from "react";
import _ from "lodash";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import TableSearch from "./TableSearch";


const Buyers = (props) => {
    const [sort, setSort] = useState(`asc`);

    // paginator
    const [pageNumbers, setPageNumbers] = useState([]);
    const [pageSize, setPageSize] = useState(15);
    const [newPage, setNewPage] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    // search
    const  [searchString, setSearchString] = useState(``)

    const searchHandler = (search) => {
        setSearchString(search);
        let sortFilterNewPage = newPage.filter(item => {
          return item[`name`].toLowerCase().includes(searchString.toLowerCase())
        });
        setNewPage(sortFilterNewPage)
    };

    const enterUserUpload = (pageSize) => {
        const pageArr = [];
        for (let i = 1; i <= Math.ceil(props.buyers.length / pageSize); i++) {
            pageArr.push(i)
        }
        setPageNumbers(pageArr);
        setPageSize(pageSize);
        console.log(pageNumbers)
    };

    const handleClick = pageNumber => {
        const indexOfLastTodo = pageNumber * pageSize;
        const indexOfFirstTodo = indexOfLastTodo - pageSize;
        const changePage = props.buyers.slice(indexOfFirstTodo, indexOfLastTodo);
        setNewPage(changePage);
        setCurrentPage(pageNumber);
        console.log(currentPage);
    };


    const onSorting = sortField => {
        const clonedArr = newPage;
        sort === 'asc' ? setSort('desc') : setSort('asc');
        const orderArr = _.orderBy(clonedArr, sortField, sort);
        setNewPage(orderArr);
    };



    return (
        <div>
            <section className={`content__buyers`}>
                <h3>Buyers</h3>

                <TableSearch onSearch={searchHandler}/>

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
                        newPage.map((person) =>
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


            <ul>
                <button onClick={enterUserUpload.bind(null, 15)}>Загрузить 15 элементов</button>
                <button onClick={enterUserUpload.bind(null, 10)}>Загрузить 10 элементов</button>
                <button onClick={enterUserUpload.bind(null, 5)}>Загрузить 5 элементов</button>
            </ul>

            <ul className="paginator">
                {
                    pageNumbers.map(el =>
                        <li key={el}>
                            <button onClick={()=>{
                                handleClick(el)
                            }}>{el}</button>
                        </li>)
                }

            </ul>
        </div>

    );


}

const mapStateToProps = (state) => ({
    buyers: state.buyers.buyersArr
});

export default connect(mapStateToProps)(Buyers);