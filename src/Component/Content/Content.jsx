import React from "react";

import Auth from "./Auth/Auth";
import Terminals from "./Terminals/Terminals";
import {Route} from "react-router-dom";
import BuyerInfo from "./BuyerPage/BuyerPage";
// import BuyersFilter from "./Buyers/BuyersFilter";
import Buyers from "./Buyers/Buyers";


const Content = () => {
    return (
        <section className={`content-wrapper`}>
            <Route path={`/auth`} component={Auth}/>
            <Route path={`/buyer/:userId?`} component={BuyerInfo}/>
            <Route path={`/terminals`} component={Terminals}/>
            <Route path={`/buyers`} component={Buyers}/>
        </section>
    )
};

export default Content