import React, { useEffect } from 'react'
import Step1Card from './Step1Card'
import styles from './step1.module.scss'

const Step1 = ({ bowls, getBowls }) => {

    useEffect(() => {
        getBowls()
    }, [getBowls])

    return (
        <div className='container'>
            <div className='header'>
                <h1>Make your own poke bowl</h1>
                <p>Select the type of bowl your’d like, the size, add the base, sauce and all the added ingredients. We’ll take care of the rest!</p>
            </div>
            <div className={styles.bowlListContainer}>
                {
                    bowls.map(bowl => {
                        return (
                            <Step1Card
                                key={bowl.id}
                                bowl={bowl}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Step1