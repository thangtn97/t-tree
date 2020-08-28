import React from "react";
import styles from "./Backdrop.module.css";

const backdrop = ({ isOpen, clicked }) => {
  return isOpen ? (
    <div className={styles.Backdrop} onClick={clicked}></div>
  ) : null;
};

export default backdrop;
