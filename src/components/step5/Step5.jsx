import React, { useEffect, useContext, useState } from 'react'
import Step5Card from './Step5Card'
import styles from './step5.module.scss'
import { CartContext } from '../../store/contexts/CartProvider'

const Step5 = ({ ingredients, getIngredients }) => {

    const { sizeCart, ingredientCart } = useContext(CartContext)
    const [limit, setLimit] = useState(0)
    const isLimit = ingredientCart?.length >= limit ? true : false

    useEffect(() => {
        getIngredients()
    }, [getIngredients])

    useEffect(() => {
        if (sizeCart?.name === 'Small') {
            setLimit(5)
        } else if (sizeCart?.name === 'Medium') {
            setLimit(8)
        } else {
            setLimit(10)
        }
    }, [sizeCart?.name])

    return (
        <div className='container'>
            <div className='header'>
                <h1>Pick other ingredients</h1>
                <p>This is what its all about. Pick up to {limit} added ingredients to make your poke bowl perfectly to your taste.</p>
            </div>
            <div className={styles.baseListContainer}>
                {ingredients?.map(ingredient => {
                    return (
                        <Step5Card
                            isLimit={isLimit}
                            key={ingredient.id}
                            ingredient={ingredient}
                        />
                    )
                })
                }
                {isLimit ? <div className={styles.errMessage}><span>*</span> You’ve chosen the maximum amout of ingrediants for a {sizeCart?.name} size bowl.</div> : ''}
            </div>
        </div>
    )
}

export default Step5