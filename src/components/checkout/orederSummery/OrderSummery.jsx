import React from 'react'
import styles from './_orderSummery.module.scss'
import { SingleExtras } from '../singleExtras/SingleExtras'

export const OrderSummery = ({ order }) => {

    const sumPrice = order.quantity * order.sizePrice
    const { name, quantity, extras } = order

    return (
        <div>
            <div className={styles.bowl} >
                <p>{name} x{quantity}</p>
                <span>${sumPrice}</span>
            </div>
            <p>with:</p>
            <div className={styles.marginBottom}>
                {extras.map((extra, key) => <SingleExtras key={key} extra={extra} />)}
            </div>
        </div>
    )
}