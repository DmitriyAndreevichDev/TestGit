import React from "react";

const ModeSelector = (props) => {
    const loadElements = (leng) => {

        let elements = props.props.buyers.filter((elems) => elems.id <= leng)

    };
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <button onClick={loadElements.bind(null, 15)} type="button" className="btn btn-secondary">15 элементов</button>
            <button onClick={loadElements.bind(null, 10)} type="button" className="btn btn-secondary">10 элементов</button>
            <button onClick={loadElements.bind(null, 5)} type="button" className="btn btn-secondary">5 элементов</button>
        </div>

    )
};

export default ModeSelector