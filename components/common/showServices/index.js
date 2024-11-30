import React from "react";
import styles from "./style.module.scss";

const ShowServices = ({ services }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <i className={`fas fa-code-branch ${styles.icon}`} />
        Our Custom Services
      </h1>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.topRightIcon}>
              <i className="fas fa-info-circle" />
            </div>
            <div className={styles.iconContainer}>
              <i className={`${service.icon} ${styles.icon}`}></i>
            </div>
            <h2 className={styles.serviceTitle}>{service.title}</h2>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowServices;
