import React, { useContext } from 'react'
import { CartContext } from '../../store/contexts/CartProvider'
import styles from './_step6Card.module.scss'

const Step6Card = ({ extraIngredient }) => {

    const { addExtraIngredient, extraIngredientCart } = useContext(CartContext)

    const handleAdd = (item) => {
        addExtraIngredient(item)
    }

    const isInCart = extraIngredientCart.some((item) => item.id === extraIngredient.id)

    return (
        <div
            className={`${styles.extraContainer} ${isInCart ? styles.active : ''}`}
            onClick={() => handleAdd(extraIngredient)}
        >
            <img className={isInCart ? styles.activeImg : styles.noImg} src="./storage/active.png" alt="bowl" />
            <h4>{extraIngredient.name}</h4>
            <h4>{extraIngredient.currency} {extraIngredient.price}</h4>
        </div>
    )
}

export default Step6Card