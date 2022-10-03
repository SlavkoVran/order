import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import styles from './cart.module.scss'
import { CartContext } from '../../store/contexts/CartProvider'
import SingleOrderItem from '../../components/singleOrderItem/SingleOrderItem'


const Cart = () => {

    const { orderItem, removeOrder, total } = useContext(CartContext)
    let history = useHistory();

    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                <h1 className={styles.title}>Checkout</h1>
                <div className={styles.content}>
                    <table>
                        <tbody>
                            <tr className={styles.header}>
                                <td className={styles.trash}></td>
                                <td></td>
                                <td> <span>Item</span> </td>
                                <td>Base</td>
                                <td>Sauce</td>
                                <td>Ingredient</td>
                                <td>Extras</td>
                                <td>Quantity</td>
                                <td></td>
                            </tr>
                            {
                                orderItem.map((item, key) => {
                                    return (
                                        <SingleOrderItem
                                            key={key}
                                            item={item}
                                            removeOrder={removeOrder}
                                        />
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className={styles.totalContainer}>
                    <p>Subtotal <span>${total}</span></p>
                    <p>Delivery fee    <span>$0</span></p>
                    <h3>Total  <span>${total}</span></h3>
                    <div className={styles.btnContainer}>
                        <button className={styles.orderMoreBtn} onClick={() => { history.push('/'); }}>Order more</button>
                        <button className={styles.proceedBtn} onClick={() => { history.push('/checkout') }}>Procced to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart