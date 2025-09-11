import React from 'react';
import styles from './BackgroundAnimation.module.scss';

const BackgroundAnimation = () => (
  <div className={styles.animationWrapper}>
    <div className={styles.starsSmall} />
    <div className={styles.starsMedium} />
    <div className={styles.starsLarge} />
  </div>
);

export default BackgroundAnimation;
