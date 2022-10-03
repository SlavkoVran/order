import React, { useContext } from 'react'
import styles from './_checkout.module.scss'
import { CartContext } from '../../store/contexts/CartProvider'
import DeliveryForm from '../../components/checkout/form/DeliveryForm'
import Footer from '../../components/checkout/footer/Footer'
import { OrderSummery } from '../../components/checkout/orederSummery/OrderSummery'

const Checkout = () => {

    const { orderItem, total } = useContext(CartContext)

    return (
        <div>
            <div className={styles.detailsContainer}>
                <div className={styles.details}>
                    <DeliveryForm />
                </div>
                <div className={styles.orderSummeryContainer}>
                    <h3>Order summery</h3>
                    {orderItem.map((order, key) => {
                        return <OrderSummery key={key} order={order} />
                    })}
                    <p className={styles.freeDelivery}>Free delivery</p>
                    <hr />
                    <div className={styles.total}>
                        <p>Total</p>
                        <h3>${total}</h3>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Checkout