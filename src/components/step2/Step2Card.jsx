import React, { useEffect, useContext } from 'react'
import { CartContext } from '../../store/contexts/CartProvider'
import styles from './_step2Card.module.scss'


const Step1Card = ({ size }) => {
    const { addSize, sizeCart } = useContext(CartContext)
    
    const handleAddSize = (item) => {
        addSize(item)
    }
    return (
        <div className={`${styles.cardContainer} ${sizeCart?.id == size.id ? styles.active : '' }`} onClick={() => handleAddSize(size)}>
            <div className={styles.imgContainer}>
            <img className={ sizeCart?.id == size.id ? styles.activeImg : styles.noImg} src="./storage/active.png" alt="bowl size" />
                <img src={`./storage/${size.id}.png`} alt="bowl size" />
            </div>
            <div className={styles.detailsContainer}>
                <h2 className={sizeCart?.id == size.id ? styles.activeTitle : ''} >{size.name}</h2>
                <p className={styles.description}>{size.description}</p>
                <p className={styles.currency}>{size.currency} {size.price}</p>
            </div>
        </div>
    )
}

export default Step1Card