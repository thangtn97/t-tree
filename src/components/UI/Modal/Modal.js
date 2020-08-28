import React, { Fragment } from "react";
import Backdrop from "../Backdrop/Backdrop";
import styles from "./Modal.module.css";

class Modal extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.isOpen !== this.props.isOpen ||
      nextProps.children !== this.props.children
    );
  }
  render() {
    return (
      <Fragment>
        <Backdrop isOpen={this.props.isOpen} clicked={this.props.closeModal} />
        <div
          className={styles.Modal}
          style={{
            transform: this.props.isOpen
              ? "translateY(0)"
              : "translateY(-100vh)",
            opacity: this.props.isOpen ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}
export default Modal;
