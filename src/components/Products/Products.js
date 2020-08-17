import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import Product from "../Product/Product";
import styles from "./Products.module.css";
import ProductInfo from "../Product/ProductInfo/ProductInfo";
import Modal from "../UI/Modal/Modal";

class Products extends React.Component {
  componentDidMount() {
    this.props.onFetchProducts(this.props.match.params.productsName);
  }
  render() {
    let prodKeys = [];
    if (this.props.products !== null)
      prodKeys = Object.keys(this.props.products);
    return prodKeys.length <= 0 ? (
      <div>Loading...</div>
    ) : (
      <div className={styles.Products}>
        <Modal isOpen={true}>
          <ProductInfo openInfo={true} />
        </Modal>
        {prodKeys.map((key) => (
          <Product
            key={key}
            productName={this.props.products[key].name}
            photoUrl={this.props.products[key].photoUrl}
            price={this.props.products[key].price}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    onFetchProducts: (productsName) =>
      dispatch(actions.fetchProducts(productsName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(Products);
