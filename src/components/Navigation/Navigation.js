import React from "react";
import { connect } from "react-redux";
import NavigationItems from "./NavigationItems/NavigationItems";
import Search from "./Search/Search";
import styles from "./Navigation.module.css";

const navigation = () => {
  return (
    <div className={styles.Navigation}>
      <div className={styles.Container}>
        <div>logo</div>
        <Search />
        <NavigationItems />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(navigation);
