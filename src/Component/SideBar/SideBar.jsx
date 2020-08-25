import React from "react";
import {Link, NavLink} from "react-router-dom";
import {connect} from "react-redux";
import avatar__png from '../../Common/img/Avatar.png'

const SideBar = (props) => {
    return (
        <nav className={`nav`}>
            <div className={`nav__avatar`} >
                <Link to={`/`}>{<img src={props.avatar || avatar__png} alt="avatar"/>}</Link>
            </div>
            <ul>
                <li>
                    <NavLink
                        activeClassName={`btn btn-outline-primary`}
                        className={`btn`}
                        to={`/terminals`}
                    >
                        Терминалы
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName={`btn btn-outline-primary`}
                        className={`btn`}
                        to={`/buyers`}>
                        Покупатели
                    </NavLink>
                </li>
            </ul>
            <div className={`nav__copyright`}>Copyright © 2020</div>
        </nav>
    )
};
const mapDispatchToProps = (state) => (
    {
        avatar: state.auth.avatar
    }
)
export default connect(mapDispatchToProps)(SideBar)