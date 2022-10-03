import React from 'react'
import styles from './singleOrderItem.module.scss'
import QuantityPicker from '../../components/quantityPicker/QuantityPicker'

const SingleOrderItem = ({ item, removeOrder }) => {

    const { id, name, img, base, sauce, size, ingredient, extras, quantity, itemPrice } = item

    return (
        <tr className={styles.item}>
            <td className={styles.trash} onClick={() => { removeOrder(id) }} >
                <img src="./storage/trash.png" alt="" />
            </td>
            <td className={styles.itemImg}>
                <img src={`${img}`} alt="" />
            </td>
            <td>
                <h4>{name}</h4>
                <p>{size}</p>
            </td>
            <td>{base}</td>
            <td>{sauce}</td>
            <td>
                {ingredient?.map((item, key) => <p key={key}>{item}</p>)}

            </td>
            <td>
                {extras?.map((item, key) => <p key={key}>{item.name}</p>)}

            </td>
            <td>
                <QuantityPicker
                    id={id}
                    quantity={quantity}
                    min={1}
                    max={10} />
            </td>
            <td><h4 className={styles.price}>${itemPrice}</h4></td>
        </tr>
    )
}

export default SingleOrderItem