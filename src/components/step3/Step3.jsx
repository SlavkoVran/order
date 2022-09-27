import React, { useEffect } from 'react'
import Step3Card from './Step3Card'
import styles from './step3.module.scss'

const Step3 = ({ bases, getBases}) => {
  
    useEffect(() => {
        getBases()
    },[getBases])

    return (
        <div className='container'>
            <div className='header'>
                <h1>Pick the base</h1>
                <p>Temperature is important – the base of your poke bowl should be warm and the other ingredients should be cold.</p>
            </div>
            <div className={styles.baseListContainer}>
                {
                    bases?.map(base => {
                        return (
                            <Step3Card
                                key={base.id}
                                base={base}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Step3