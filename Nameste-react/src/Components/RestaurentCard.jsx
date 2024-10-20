import styles from './RestaurentCard.module.css';
import { IMAGE_URL } from '../utils/constents';
import { useState } from 'react';
export default function RestaurantCard({ restaurant }) {
  console.log('restaurant',restaurant)
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img
          className={styles.image}
          src={IMAGE_URL + restaurant.cloudinaryImageId}
          alt={restaurant.name}
        />
      </div>
      <div className={styles.details}>
        <h2 className={styles.name}>{restaurant.name}</h2>
        <p className={styles.description}>{restaurant.cuisines.join(', ')}</p>
        <p className={styles.rating}>
          Rating: {restaurant.avgRating}
        </p>
      </div>
    </div>
  );
}