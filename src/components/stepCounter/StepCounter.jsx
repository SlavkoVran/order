import React, { useContext } from 'react'
import { StoreContext } from '../../store/contexts/StoreProvider'
import styles from './stepCounter.module.scss'

const StepCounter = () => {

  const { step, nextStep, backStep } = useContext(StoreContext)
  const progresStep = step * 16.66

  const handleNext = () => {
    nextStep(step + 1)
  }

  const handleBack = () => {
    backStep(step - 1)
  }

  const handleAddToCart = () => {
    nextStep(1)
  }

  return (
    <div className={styles.container} >
      <div className={styles.steper}>
        <p>Step {step} <span>of 6</span></p>
        <div className={styles.progresContainer}>
          <div className={styles.progres} style={{ width: `${progresStep}%` }}></div>
        </div>
      </div>
      <div className={styles.btnsContainer}>
        {step !== 1 && <button className={styles.backBtn} onClick={handleBack}>
          Back
        </button>}
        {step <= 5 ? (
          <button className={styles.nextBtn} onClick={handleNext}>
            Next
            <img src="./storage/arrow.png" alt="" />
          </button>
        ) :
          (
            <button className={styles.addToCartBtn} onClick={handleAddToCart}>
              Add to Cart
            </button>
          )
        }
      </div>
    </div>
  )
}

export default StepCounter