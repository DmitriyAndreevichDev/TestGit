import React from "react";
import TerminalForm from "./TerminalForm/TerminalForm";
import {connect} from "react-redux";
import {addTerminal, removeTerminal} from "../../../Redux/terminalsReducer";

const Terminals = (props) => {
    const onRemove = (id) => {
        props.removeTerminal(id)
    };

    return (
        <section className={`terminals__wrapper`}>
            <h3>Terminals</h3>
            <TerminalForm/>
            <div className={`terminals__items-wrapper`}>
                <div>
                    <table className={`table`}>
                        <thead>
                        <tr>
                            <th>№ Терминала</th>
                            <th>Имя Терминала</th>
                            <th>Описание Терминала</th>
                            <th></th>
                        </tr>
                        </thead>
                        {props.terminalItems.map((item, index) =>
                            <tbody>
                            <tr>
                                <th>{item.id = index + 1}</th>
                                <th>{item.data.name}</th>
                                <th>{item.data.description}</th>
                                <th>
                                    <button
                                        type="button"
                                        className="btn btn-danger btn-sm"
                                        onClick={() => onRemove(item.id)}
                                    >
                                        &times;
                                    </button>
                                </th>
                            </tr>
                            </tbody>)
                        }
                    </table>
                </div>
            </div>
        </section>
    )
};

const mapStateToProps = (state) => {
    return {
        terminalItems: state.terminals.terminalItems
    }
};

export default connect(mapStateToProps, {addTerminal, removeTerminal})(Terminals)