import React, { useContext, useEffect, useState } from 'react';
import styles from './quantityPicker.module.scss'
import { CartContext } from '../../store/contexts/CartProvider';

const QuantityPicker = ({id, min, max, quantity}) => {
 const { addQuantity } = useContext(CartContext)

  const [value, setValue] = useState(quantity)
  // eslint-disable-next-line
  const [disableDec, setDisableDec] = useState(true)
  // eslint-disable-next-line
  const [disableInc, setDisableInc] = useState()


  const handleIncrement = () => {
    const plusState = value + 1;
    if (value < max) {
      setValue(plusState);
      setDisableDec(false);
    }
    if (value === (max - 1)) {
      setDisableInc(true);
    }
    if (value === min) {
      setDisableDec(false)
    }
  }

  const handleDecrement = () => {
    const minusState = value - 1;
    if (value > min) {
      setValue(minusState);
      if (value === min + 1) {
        setDisableDec(true);
      }
    } else {
      setValue(min);
    }
    if (value === max) {
      setDisableInc(false);
    }
  }

  useEffect(() => {
    addQuantity(id, value)
    // eslint-disable-next-line
  },[value])

  return (
    <div className={styles.quantityPickerContainer}>
      <button className={styles.decrementBtn} onClick={handleDecrement}>
        <img src="./storage/arrowD.png" alt=" arrow down" />
      </button>
      <input className={styles.input} type="text" value={value} readOnly />
      <button className={styles.incrementBtn} onClick={handleIncrement}>
        <img src="./storage/arrowU.png" alt=" arrow up" />
      </button>
    </div>
  )
}

export default QuantityPicker