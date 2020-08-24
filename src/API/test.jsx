import React, {useState} from "react";
import {Field, Form, Formik} from "formik";
import BasicFormSchema from "../../../Validate/BasicFormSchema";


const Auth = () => {
    const [login, setLogin] = useState(``);
    const [avatar, setAvatar] = useState(``);
    //
    // useEffect(() => {
    //     fetch('https://api.github.com/users/${login}')
    //         .then(res => res.json())
    //         .then(data => {
    //             setData(data)
    //         })
    // }, []);
    // //добавляем данные
    const setData = ({login, avatar_url}) => {
        setLogin(login);
        setAvatar(avatar_url)
    };
    const handleSearch = e => {
        setLogin(e.target.value)
    };
    const handleSubmit = () => {
        fetch(`https://api.github.com/users/${login}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            },[])
    };

    return (
        <section className={`content-wrapper__form`}>
            <Formik
                initialValues={
                    {
                        // login: '',
                        password: '',
                    }
                }

                //Валидация формы
                validationSchema={BasicFormSchema}
                onSubmit={handleSubmit}
            >
                {({touched, errors}) => (<Form onSubmit={handleSubmit}>
                    {
                        errors.login &&
                        touched.login && <div className="field-error">{errors.login}</div>
                    }
                    <label htmlFor="login"> Login:
                        <Field type="login" name={`login`} placeholder={`You login`} onChange={handleSearch}/>
                    </label>
                    {
                        errors.password &&
                        touched.password && <div className="field-error">{errors.password}</div>
                    }
                    <label htmlFor="password"> Password:
                        <Field type="password" name={`password`} placeholder={`You password`}/>
                    </label>
                    <button type={`submit`}>Login</button>
                </Form>)}
            </Formik>

            {/*Карточка пользователя*/}
            <div className="card__user">
                <div className={`user-card__avatar`}><img src={avatar} alt="avatar"/></div>
                <div className={`user-card__name`}>{login}</div>

            </div>

        </section>
    )
};

export default Auth