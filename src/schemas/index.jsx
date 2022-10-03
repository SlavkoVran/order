import * as yup from "yup";

const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s/0-9]*$/g

export const deliverySchema = yup.object().shape({
    fullName: yup
        .string()
        .min(3, "*Name must be at least 3 characters long")
        .required("*Required"),
    address: yup
        .string()
        .required("*Address id required"),
    phone: yup
        .string()
        .matches(phoneRegExp, '*Phone number is not valid')
        .min(12, '*Phone must be at least 12 characters')
        .required("*A phon number is required"),
    cashOrCard: yup
        .string()
        .oneOf(['card', 'cash'], "")
        .required('*Please choose a payment method'),
    time: yup
        .string()
        .oneOf(['soon', '1pm', '2pm', '3pm'], "")
        .required('*Please choose a payment method'),
});