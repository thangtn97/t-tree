import React from "react";
import styles from "./Backdrop.module.css";

const backdrop = ({ isOpen }) => {
  return isOpen ? <div className={styles.Backdrop}></div> : null;
};

export default backdrop;
