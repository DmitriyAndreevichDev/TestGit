import React from "react";

import Auth from "./Auth/Auth";
import Terminals from "./Terminals/Terminals";
import {Route, Switch} from "react-router-dom";
import BuyerInfo from "./BuyerPage/BuyerPage";
import Buyers from "./Buyers/Buyers";
import NotFound from "./NotFound";


const Content = () => {
    return (
        <section className={`content-wrapper`}>
            <Switch>
                <Route exact path={`/`} component={Auth}/>
                <Route path={`/buyer/:userId?`} component={BuyerInfo}/>
                <Route path={`/terminals`} component={Terminals}/>
                <Route path={`/buyers`} component={Buyers}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </section>
    )
};

export default Content