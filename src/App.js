
import React from "react";
import Header from "./Component/Header/Header";
import Content from "./Component/Content/Content";
import Footer from "./Component/Footer/Footer";


const App = () => {
    return(
        <div className={`app__container`}>
            <Header />
            <Content />
            <Footer />
        </div>
    )
};



export default App;
