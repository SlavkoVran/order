import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import styles from './nav.module.scss'
import { CartContext } from '../../store/contexts/CartProvider'

const Nav = () => {

    let history = useHistory();
    const { orderItem } = useContext(CartContext)
    const isFull = orderItem?.length > 0 ? true : false

    const handleOpenCart = () => {
        history.push('/cart');
    }

    return (
        <div className={styles.container} >
            <img src='/storage/logo.png' alt="logo" onClick={history.goBack} />
            <div className={isFull ? styles.shoppingCartFull : styles.shoppingCart} onClick={handleOpenCart}>
                <img src={isFull ? '/storage/shopping-cart-white.png' : '/storage/shopping-cart.png'} alt=" shoping cart" />
                {isFull && <div className={styles.orderCounter}> {orderItem?.length}</div>}
                <span>Cart</span>
            </div>
        </div>
    )
}

export default Nav