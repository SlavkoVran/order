import React, { useEffect, useContext, useState } from 'react'
import { CartContext } from '../../store/contexts/CartProvider'
import styles from './_step3Card.module.scss'


const Step3Card = ({ base }) => {
    const { addBase, baseCart } = useContext(CartContext)

    const handleAdd = (item,) => {
        addBase(item)
    }

    return (
        <div className={ `${styles.cardContainer} ${baseCart?.id == base.id ? styles.active : '' }`} onClick={() => handleAdd(base)}> 
            <img className={ baseCart?.id == base.id ? styles.activeImg : styles.noImg} src="./storage/active.png" alt="bowl" />
            <img className={styles.img} src={base.imagePath} alt="bowl" />
            <h2>{base.name}</h2>
            <p className='description'>{base.description}</p>
        </div>
    )
}

export default Step3Card