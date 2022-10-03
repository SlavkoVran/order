import React from 'react'
import styles from './_singleExtras.module.scss'

export const SingleExtras = ({ extra }) => {

    const { name, price } = extra

    return (
        <div className={styles.extrasContainer}>
            <p>{name}</p>
            <p>${price}</p>
        </div>
    )
}