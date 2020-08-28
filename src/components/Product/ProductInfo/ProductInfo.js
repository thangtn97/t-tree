import React from "react";
import styles from "./ProductInfo.module.css";

const productInfo = ({ product, addToCart }) => {
  return (
    <div className={styles.ProductInfo}>
      <div className={styles.SlideImage}>
        <img src={product.photoUrl} alt="cay_canh" />
      </div>
      <div className={styles.Detail}>
        <div className={styles.Info}>
          <h1> {product.name} </h1>
          <p>{product.desc}</p>
        </div>
        <div className={styles.Payment}>
          <span>
            <p style={{ display: "inline" }}>So luong</p>
            <input type="text" />
          </span>
          <button className={styles.BtnAdd} onClick={addToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default productInfo;
