import React, {useState} from "react";

const TableSearch = (props) => {

    const [value, setValue] = useState(``);

    const valueChangeHandler = (e) => {
        setValue(e.target.value)
    };

    return(
        <div className={`input-group mb-3`}>
            <div className={`input-group-prepend`}>
                <button
                    className={`btn btn-primary`}
                    onClick={() => {
                        props.onSearch(value)
                    }}
                >
                    Search
                </button>
            </div>
            <input
                type="text"
                className={`form-control`}
                onChange={valueChangeHandler}
                value = {value}
            />
        </div>
    )
};
export default TableSearch;