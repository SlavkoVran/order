import React, { useEffect, useContext } from 'react'
// import CartItem from './cartItem'
import styles from './cart.module.scss'
import { CartContext } from '../../store/contexts/CartProvider'
import SingleOrderItem from '../../components/singleOrderItem/SingleOrderItem'


const Cart = () => {

    const { orderItem } = useContext(CartContext)

    // const { bowl, base, sauce, ingredient, extraIngredient, size, subtotal } = orderItem

    return (
        <div className={styles.cartContainer}>
            <div className='container'>
                <h1>Checkout</h1>
                <div className={styles.content}>
                    <table>
                        <tbody>
                            <tr className={styles.header}>
                                <td className={styles.trash}></td>
                                <td></td>
                                <td>Item</td>
                                <td>Base</td>
                                <td>Sauce</td>
                                <td>Ingredient</td>
                                <td>Extras</td>
                                <td>Quantity</td>
                                <td>Price</td>
                            </tr>
                            {
                                orderItem.map((item, key) => {
                                    return (
                                        <SingleOrderItem
                                            key={key}
                                            item={item}
                                        // handleAddBowl={handleSelect}
                                        />
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart