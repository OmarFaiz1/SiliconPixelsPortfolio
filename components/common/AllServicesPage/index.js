import React from "react";
import styles from "./style.module.scss";
import ServicesInGrid from "../ServicesInGrid";
import ShowServices from "../showServices";

const AllServicesPage = ({
  imageUrl,
  title,
  description,
  description2,
  services,
  gridTitle,
  gridDescription,
  gridDescription2,
  gridImageUrl,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={title} className={styles.image} />
        <div className={styles.textWrapper}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </div>
      </div>

      <ServicesInGrid
        title={gridTitle}
        description={gridDescription}
        description2={gridDescription2}
        imageUrl={gridImageUrl}
      />

      <ShowServices services={services} />
    </div>
  );
};

export default AllServicesPage;
