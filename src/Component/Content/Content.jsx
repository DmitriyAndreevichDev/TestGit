import React from "react";
import Card from "./Cards/Card";

const Content = () => {
    return (
        <section className={`content__container`}>
            <div className="content__card-creator"><div className={`geometric-plus`}></div></div>
            <div className={`card__conteiner`}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </section>
    )
};

export default Content