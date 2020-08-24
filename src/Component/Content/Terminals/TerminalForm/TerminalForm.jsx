import React from "react";
import {Field, Form, Formik} from "formik";
import {addTerminal} from "../../../../Redux/terminalsReducer";
import {connect} from "react-redux";

const TerminalForm = (props) => {
    return (
        <Formik
            initialValues={
                {
                   id:``, nameTerminal: ``, description: ``
                }
            }
            onSubmit={ values => {
                props.addTerminal(values.id, values.nameTerminal, values.description)

            }}

        >
            <Form>
                <label htmlFor="text"> Название терминала
                    <Field type="text" name={`nameTerminal`}/>
                </label>
                <label htmlFor="text"> Описание
                    <Field type="text" name={`description`}/>
                </label>

                <button type={"submit"}>Добавить</button>
            </Form>
        </Formik>
    )
};

export default connect(null, {addTerminal})(TerminalForm)