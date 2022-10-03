import React, { useContext } from 'react'
import styles from './_footer.module.scss'
import { useHistory } from "react-router-dom";
import { CartContext } from '../../../store/contexts/CartProvider'

const Footer = () => {
  let history = useHistory();
  const { sendSaveOrder } = useContext(CartContext)

  const handleSendOrder = () => {
    sendSaveOrder()
  }

  return (
    <div className={styles.container} >
      <div className={styles.steper}>
        <p>Fill out all necessary fields to place the order.</p>
      </div>
      <div className={styles.btnsContainer}>
        <button className={styles.backToCartBtn} onClick={() => { history.push('/cart'); }}>
          Back to Cart
        </button>
        <button className={styles.placeOrderBtn} onClick={handleSendOrder}>
          Place Order
        </button>
      </div>
    </div>
  )
}

export default Footer