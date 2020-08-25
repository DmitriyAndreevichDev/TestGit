import React, {useState} from "react";
import {Field, Form, Formik} from "formik";
import BasicFormSchema from "../../../Validate/BasicFormSchema";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {setAvatarActionCreator} from "../../../Redux/authReducer";


const Auth = (props) => {

    const [login, setLogin] = useState(``);

    const [isAuth, setAuth] = useState(false);

    if (login === true){setAuth(true)}
    if ( isAuth === true ) return <Redirect to={`/terminals`}/>
    //  //добавляем данные
    const setData = ({login, avatar_url}) => {
        setLogin(login);

        props.setAvatarActionCreator(avatar_url)
    };

    const confirm = () => {
        setAuth(true);
    };



    return (
        <section className={`content-wrapper__form`}>
            <Formik
                initialValues={
                    {
                        login: '',
                        password: '',
                    }
                }

                //Валидация формы
                validationSchema={BasicFormSchema}
                onSubmit={(values)=>{
                    fetch(`https://api.github.com/users/${values.login}`)
                        .then(res => res.json())
                        .then(data => setData(data))
                }}

            >
                {({touched, errors}) => (
                    <Form className={`form-group auth-wrapper card`}>
                    {
                        errors.login &&
                        touched.login && <div className="field-error">{errors.login}</div>
                    }
                    <label htmlFor="login" > Login:
                        <Field type="login" name={`login`} placeholder={`You login`} className={`form-control`}/>
                    </label>
                    {
                        errors.password &&
                        touched.password && <div className="field-error">{errors.password}</div>
                    }
                    <label htmlFor="password"> Password:
                        <Field type="password" name={`password`} placeholder={`You password`} className={`form-control`}/>
                    </label>
                    <button type={`submit`} className={`btn btn-primary`}>Show Page</button>

                </Form>
                )}
            </Formik>


            {/*Карточка пользователя*/}
            {!login ? <div></div> : <div className="card__user card">
                <div className={`user-card__avatar`}>
                    <h5 className={`card-title`}> Это вы? </h5>
                    {<img src={props.avatar} className={`card-img-top`} alt="avatar"/> || null}</div>
                <h2 className={`user-card__name`}>{login}</h2>
                <button onClick={confirm} className={`btn btn-primary`}>login</button>
                </div>}

        </section>
    )
};


const mapStateToProps = (state) => ({
    avatar: state.auth.avatar
})
export default connect(mapStateToProps, {setAvatarActionCreator})(Auth)