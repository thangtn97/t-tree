import React from "react";
import { connect } from "react-redux";
import NavigationItems from "./NavigationItems/NavigationItems";

const navigation = () => {
  return (
    <div>
      <NavigationItems />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(navigation);
