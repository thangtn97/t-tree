import React, { Fragment } from "react";
import Backdrop from "../Backdrop/Backdrop";
import styles from "./Modal.module.css";

const modal = ({ isOpen, children }) => {
  return (
    <Fragment>
      <Backdrop isOpen={isOpen} />
      <div className={styles.Modal}>{children}</div>
    </Fragment>
  );
};
export default modal;
