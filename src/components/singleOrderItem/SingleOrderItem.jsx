import React, { useEffect, useContext } from 'react'
// import CartItem from './cartItem'
import styles from './singleOrderItem.module.scss'
import { CartContext } from '../../store/contexts/CartProvider'
import QuantityPicker from '../../components/quantityPicker/QuantityPicker'


const SingleOrderItem = ({ item }) => {

    const { bowlCart, baseCart, sauceCart, sizeCart, ingredientCart, extraIngredientCart, subtotal, } = item

    return (
        <tr className={styles.item}>
            <td className={styles.trash}>
                <img src="./storage/trash.png" alt="" />
            </td>
            <td className={styles.itemImg}>
                <img src={`${bowlCart.imagePath}`} alt="" />
            </td>
            <td>
                <h4>{bowlCart.name}</h4>
                <p>{sizeCart.name}</p>
            </td>
            <td>{baseCart.name}</td>
            <td>{sauceCart.name}</td>
            <td>
                {ingredientCart?.map((item, key) =>  <p key={key}>{item}</p>)}

            </td>
            <td>
                {extraIngredientCart?.map((item, key) => <p key={key}>{item.name}</p>)}

            </td>
            <td>
                <QuantityPicker min={1} max={10} />
            </td>
            <td><h4>${subtotal}</h4></td>
        </tr>
    )
}

export default SingleOrderItem