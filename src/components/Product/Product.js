import React from "react";
import styles from "./Product.module.css";

const product = ({ productName, photoUrl, price }) => {
  return (
    <div className={styles.Product}>
      <div className={styles.Image}>
        <img className={styles.Image} src={photoUrl} alt="cay_canh_mini" />
      </div>
      <div className={styles.Info}>
        <p>{productName}</p>
        <p>{price}đ</p>
      </div>
      <div className={styles.Quantity}>
        <span>-</span>
        <input type="text" />
        <span>+</span>
      </div>
      <button className={styles.BtnAdd}>Add To Cart</button>
    </div>
  );
};

export default product;
