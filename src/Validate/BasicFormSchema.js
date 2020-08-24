import * as Yup from "yup"

const BasicFormSchema = Yup.object().shape({
    login: Yup.string()
        .min(2, `Must be longer than 2 characters`)
        .required("Required"),
    password: Yup.string()
        .min(8, `Must be longer than 8 characters`)
        .required("Required")
        .matches(/[0-9]/g, 'Must be one number')
        .matches(/[a-zA-Z]/g, `Должна быто хоть одна латинская буква`)

});

export default BasicFormSchema;