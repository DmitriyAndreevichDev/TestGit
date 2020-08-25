import React from "react";
import {Field, Form, Formik} from "formik";
import {addTerminal} from "../../../../Redux/terminalsReducer";
import {connect} from "react-redux";
import {TerminalValidateSchema} from "../../../../Validate/BasicFormSchema";

const TerminalForm = (props) => {
    return (
        <Formik
            initialValues={
                {
                   id:``, nameTerminal: ``, description: ``
                }
            }
            validationSchema={TerminalValidateSchema}
            onSubmit={ (values, {resetForm}) => {
                props.addTerminal(values.id, values.nameTerminal, values.description);
                resetForm({values: ''})
            }}

        >
            {({touched, errors}) => (
                <Form className={`terminal__form`}>
                {
                    errors.nameTerminal &&
                    touched.nameTerminal && <div className="field-error">{errors.nameTerminal}</div>
                }
                <label htmlFor="text" className={`mt-4`}> Название терминала
                </label>
                    <Field type="text" name={`nameTerminal`}/>
                    {
                    errors.description &&
                    touched.description && <div className="field-error">{errors.description}</div>
                }
                <label htmlFor="text" className={`mt-4`}> Описание
                </label>
                    <Field type="text" name={`description`}/>

                <button
                    type={"submit"}
                    className={`btn btn-primary mt-3`}
                >
                    Добавить
                </button>
            </Form>)}
        </Formik>
    )
};

export default connect(null, {addTerminal})(TerminalForm)