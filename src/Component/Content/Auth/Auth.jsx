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
                    <Form>
                    {
                        errors.login &&
                        touched.login && <div className="field-error">{errors.login}</div>
                    }
                    <label htmlFor="login"> Login:
                        <Field type="login" name={`login`} placeholder={`You login`} />
                    </label>
                    {
                        errors.password &&
                        touched.password && <div className="field-error">{errors.password}</div>
                    }
                    <label htmlFor="password"> Password:
                        <Field type="password" name={`password`} placeholder={`You password`}/>
                    </label>
                    <button type={`submit`}>Show Page</button>

                </Form>
                )}
            </Formik>


            {/*Карточка пользователя*/}
            {!login ? <div></div> : <div className="card__user">
                <div className={`user-card__avatar`}>{<img src={props.avatar} alt="avatar"/> || null}</div>
                <div className={`user-card__name`}>{login}</div>
                <button onClick={confirm} >login</button>
                </div>}

        </section>
    )
};


const mapStateToProps = (state) => ({
    avatar: state.auth.avatar
})
export default connect(mapStateToProps, {setAvatarActionCreator})(Auth)