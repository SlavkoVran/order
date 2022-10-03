import React from 'react'
import { Formik, Form } from 'formik'
import { deliverySchema } from "../../../schemas";
import CustomSelect from "./CustomSelect";
import { TextFiled } from './TextFiled'
import styles from './_deliveryForm.module.scss'

export const DeliveryForm = () => {
    return (
        <Formik
            initialValues={{
                fullName: '',
                phoneNumber: '',
                cashOrCard: '',
                address: '',
                choseTimeOfDelivery: '',
                deliveryAnotherDay: '',
                note: ''
            }}
            validationSchema={deliverySchema}
        >
            {formik => (

                <div className={styles.formContainer}>
                    <h1 className={styles.formTitle}>Delivery details</h1>
                    <Form >
                        <div className={styles.contentContainer}>
                            <TextFiled
                                label='Full name'
                                name='fullName'
                                type='text'
                                placeholder='Enter your full name'
                            />
                            <TextFiled
                                label='Address'
                                name='address'
                                type='text'
                                placeholder='Enter your address'
                            />
                            <TextFiled
                                label='Phone number'
                                name='phone'
                                type='tel'
                                placeholder='Enter your phone number'
                            />
                             <CustomSelect
                                label='Choose time of delivery'
                                name='time'
                            >
                                <option value=''>Chose a time</option>
                                <option value='soon'>As soon as possible</option>
                                <option value='1pm'>1 PM</option>
                                <option value='2pm'>2 PM</option>
                                <option value='3pm'>3 PM</option>
                            </CustomSelect>
                            <CustomSelect
                                label='Cash or Card'
                                name='cashOrCard'
                            >
                                <option value=''>Select cash or card</option>
                                <option value='cash'>Cash</option>
                                <option value='card'>Card</option>
                            </CustomSelect>
                            <TextFiled 
                            label='Schedule the delivery for another day' 
                            name='deliveryAnotherDay' 
                            type='date' 
                            placeholder='Pick a day' />
                        </div>
                        <div className={styles.noteContainer}>
                            <span>Note</span>
                            <textarea name="note" id="" cols="30" rows="6" placeholder='Choose a payment method'></textarea>
                        </div>
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default DeliveryForm