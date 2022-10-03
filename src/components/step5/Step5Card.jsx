import React, { useContext, useRef } from 'react'
import { CartContext } from '../../store/contexts/CartProvider'
import styles from './_step5Card.module.scss'

const Step5Card = ({ ingredient, isLimit }) => {

    const { addIngredient, ingredientCart } = useContext(CartContext)
    const ref = useRef(null)
    const isDisabled = isLimit && !ref.current?.checked
    const isChecked = ingredientCart.includes(ingredient.name)

    return (
        <div className={styles.checkboxContainer}>
            {
                ref.current?.checked ? <img src="./storage/selected.png" alt="" /> : <img src="./storage/select.png" alt="" />
            }
            <input
                disabled={isDisabled}
                ref={ref}
                type="checkbox"
                value={ingredient.name}
                checked={isChecked}
                id={ingredient.id}
                onChange={addIngredient} />
            <span className={isDisabled ? styles.limit : ''} >{ingredient.name}</span>
        </div>
    )
}

export default Step5Card