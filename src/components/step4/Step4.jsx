import React, { useEffect } from 'react'
import Step4Card from './Step4Card'
import styles from './step4.module.scss'

const Step4 = ({ sauces, getSauces}) => {
  
    useEffect(() => {
        getSauces()
    },[getSauces])

    return (
        <div className='container'>
            <div className='header'>
                <h1>Pick a sauce</h1>
                <p>Most sauces mix well with the base of the poke bowl. Make sure to read the their ingredients and pick one thats right for you.</p>
            </div>
            <div className={styles.baseListContainer}>
                {
                    sauces?.map(sauce => {
                        return (
                            <Step4Card
                                key={sauce.id}
                                sauce={sauce}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Step4