import React from "react";
import styles from "./Homepage.module.css";
import BestSellerItem from "./BestSellerItem/BestSellerItem";

class Homepage extends React.Component {
  state = {
    bestSeller: [
      {
        productName: "Cây phú quý thủy sinh",
        price: 20000,
        photoUrl:
          "https://cayxinh.vn/wp-content/uploads/2017/11/cay-phu-quy-1308192.jpg",
      },
      {
        productName: "Cây phú quý thủy sinh",
        price: 20000,
        photoUrl:
          "https://cayxinh.vn/wp-content/uploads/2017/11/cay-phu-quy-1308192.jpg",
      },
      {
        productName: "Cây phú quý thủy sinh",
        price: 20000,
        photoUrl:
          "https://cayxinh.vn/wp-content/uploads/2017/11/cay-phu-quy-1308192.jpg",
      },
      {
        productName: "Cây phú quý thủy sinh",
        price: 20000,
        photoUrl: "../../assets/images/cay-phu-quy-1308192.jpg",
      },
      {
        productName: "Cây phú quý thủy sinh",
        price: 20000,
        photoUrl: "/assets/images/cay-phu-quy-1308192.jpg",
      },
      {
        productName: "Cây phú quý thủy sinh",
        price: 20000,
        photoUrl: "../../assets/images/cay-phu-quy-1308192.jpg",
      },
    ],
    randomBlog: {},
  };

  render() {
    return (
      <div className={styles.Homepage}>
        <div className={styles.Header}></div>
        <div className={styles.BestSeller}>
          <h2>Sản phẩm bán chạy</h2>
          <div className={styles.BestSellerContainer}>
            {this.state.bestSeller.map((item) => (
              <BestSellerItem
                price={item.price}
                name={item.productName}
                photoUrl={item.photoUrl}
              />
            ))}
          </div>
        </div>
        <div>
          <h2>Có thể bạn chưa biết </h2>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Homepage;
