import React, { useEffect } from 'react'
import Step1Card from './Step2Card'
import styles from './step2.module.scss'

const Step2 = ({ sizes, getSizes }) => {

    useEffect(() => {
        getSizes()
    }, [getSizes])

    return (
        <div className='container'>
            <div className={styles.header}>
                <h1>Pick a size</h1>
            </div>
            <div className={styles.priceListContainer}>
                {
                    sizes.map(size => {
                        return (
                            <Step1Card
                                key={size.id}
                                size={size}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Step2