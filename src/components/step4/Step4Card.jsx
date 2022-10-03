import React, { useContext } from 'react'
import { CartContext } from '../../store/contexts/CartProvider'
import styles from './_step4Card.module.scss'

const Step4Card = ({ sauce }) => {

    const { addSauce, sauceCart } = useContext(CartContext)

    const handleAdd = (item) => {
        addSauce(item)
    }

    return (
        <div className={`${styles.cardContainer} ${sauceCart?.id === sauce.id ? styles.active : ''}`} onClick={() => handleAdd(sauce)}>
            <img className={sauceCart?.id === sauce.id ? styles.activeImg : styles.noImg} src="./storage/active.png" alt="bowl" />
            <h2>{sauce.name}</h2>
            <p className='description'>{sauce.description}</p>
        </div>
    )
}

export default Step4Card