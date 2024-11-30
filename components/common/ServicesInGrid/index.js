import React from "react";
import styles from "./style.module.scss";

const ServicesInGrid = ({ title, description, description2, imageUrl }) => {
  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <p className={styles.description}>{description2}</p>
      </div>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={title} className={styles.image} />
      </div>
    </div>
  );
};

export default ServicesInGrid;
