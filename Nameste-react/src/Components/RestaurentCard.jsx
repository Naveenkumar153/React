import React from 'react';
import styles from './RestaurantCard.module.css';

export default function RestaurantCard({ restaurant }) {
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={restaurant.imageUrl}
        alt={restaurant.name}
      />
      <div className={styles.details}>
        <h2 className={styles.name}>{restaurant.name}</h2>
        <p className={styles.description}>{restaurant.description}</p>
        <p className={styles.rating}>
          Rating: {restaurant.rating}
        </p>
      </div>
    </div>
  );
}