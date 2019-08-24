import React from 'react';
import styles from './Order.scss';

const Order = ({ id }) => (
    <div className={styles.component}>
        <h2>Order view</h2>
        <h3>{id}</h3>
    </div>
)

export default Order;