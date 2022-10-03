import React, { useEffect, useContext, useId } from 'react'
import { useHistory } from "react-router-dom";
import Step6Card from './Step6Card'
import styles from './step6.module.scss'
import { CartContext } from '../../store/contexts/CartProvider'
import { StoreContext } from '../../store/contexts/StoreProvider'

const Step6 = ({ extraIngredients, getExtraIngredients }) => {

    const { nextStep } = useContext(StoreContext)
    const id = useId()
    let history = useHistory();
    const {
        bowlCart,
        sizeCart,
        baseCart,
        sauceCart,
        ingredientCart,
        extraIngredientCart,
        subtotal,
        resetOrder,
        quantity
    } = useContext(CartContext)

    const handleAddToCart = () => {

        let orderItem = {
            id: id,
            img: bowlCart.imagePath,
            name: bowlCart.name,
            size: sizeCart.name,
            base: baseCart.name,
            sauce: sauceCart.name,
            ingredient: ingredientCart,
            extras: extraIngredientCart,
            subtotal: subtotal,
            bowlId: bowlCart.id,
            sizeId: sizeCart.id,
            baseId: baseCart.id,
            sauceId: sauceCart.id,
            quantity: quantity,
            itemPrice: Number(subtotal),
            sizePrice: Number(sizeCart.price),
        }
        nextStep(1)
        resetOrder(orderItem)
    }

    const handleGoToCheckout = () => {
        history.push('/cart');
    }

    useEffect(() => {
        getExtraIngredients()
    }, [getExtraIngredients])

    return (
        <div className='container'>
            <div className={styles.extraContainer}>
                <div className={styles.left}>
                    <div className='header'>
                        <h1>Pick an extra ingredient</h1>
                        <p>Weather its more sashimi or an ingrediant you’d like to try out, feel free to add whatever you’d like.</p>
                    </div>
                    <div className={styles.extraListContainer}>
                        {extraIngredients?.map(extraIngredient => {
                            return (
                                <Step6Card
                                    key={extraIngredient.id}
                                    extraIngredient={extraIngredient}
                                />
                            )
                        })
                        }
                    </div>
                </div>
                <div className={styles.right} >
                    <div className={styles.title}>
                        <h3>{bowlCart?.name}</h3>
                        <p>{sizeCart?.currency}{sizeCart?.price}</p>
                    </div>
                    <p>{sizeCart?.name} size</p>
                    <p>{baseCart?.name} base</p>
                    <p>{sauceCart?.name} sauce</p>
                    <p>Added ingredients:</p>
                    <div className={styles.extraList}>
                        {ingredientCart?.map((item, key) => {
                            return (
                                <p key={key}>{item}</p>
                            )
                        })
                        }
                    </div>
                    {extraIngredientCart?.map((item, key) => {
                        return (
                            <div className={styles.sumExtraIng} key={key}>
                                <p>{item.name}</p>
                                <h2>{item.currency}{item.price}</h2>
                            </div>
                        )
                    })
                    }
                    <div className={styles.line}></div>
                    <div className={styles.priceFooter}>
                        <div className={styles.fullPrice}>
                            <p>Full price</p>
                            <h3>${subtotal}</h3>
                        </div>
                        <div className={styles.btnContainer}>
                            <button className={styles.checkoutBtn} onClick={handleGoToCheckout} >
                                Go to checkout
                            </button>
                            <button className={styles.addToCartBtn} onClick={handleAddToCart} >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Step6