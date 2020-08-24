import React from "react";
import Header from "./Component/Header/Header";
import Content from "./Component/Content/Content";
import Footer from "./Component/Footer/Footer";
import SideBar from "./Component/SideBar/SideBar";


const App = () => {
    return(
        <div className={`container-app`}>
            <Header />
            <div className={`container__sidebar-content`}>
                <SideBar />
                <Content />
            </div>

            <Footer />
        </div>
    )
};



export default App;
