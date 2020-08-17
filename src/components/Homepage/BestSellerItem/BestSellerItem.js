import React from "react";
import styles from "./BestSellerItem.module.css";

const bestSellerItem = ({ price, name, photoUrl }) => {
  console.log(photoUrl);
  return (
    <div className={styles.BestSellerItem}>
      <img className={styles.Image} src={photoUrl} alt="cay_canh_mini" />
      <div className={styles.Info}>
        <h3 className={styles.Title}>{name}</h3>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default bestSellerItem;
