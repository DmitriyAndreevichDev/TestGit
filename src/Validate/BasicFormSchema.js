import * as Yup from "yup"

const BasicFormSchema = Yup.object().shape({
    login: Yup.string()
        .min(2, `Логин должен быть длиннее 2 символов`)
        .required("Заполните поле"),
    password: Yup.string()
        .min(8, `Пароль должен быть длиннее 8 символов`)
        .required("Заполните поле")
        .matches(/[0-9]/g, 'Должна быть хоть одна цифра')
        .matches(/[a-zA-Z]/g, `Должна быто хоть одна латинская буква`),

});
export const TerminalValidateSchema = Yup.object().shape({
    nameTerminal: Yup.string()
        .min(5, `Имя терминала должно быть длиннее 5 символов`)
        .required("Заполните поле"),
    description: Yup.string()
        .min(5, `Описание терминала должно быть длиннее 5 символов`)
        .required("Заполните поле"),
});

export default BasicFormSchema;