import React from "react";
import Modal from "../../UI/Modal/Modal";

const productInfo = ({ openInfo, desc }) => {
  return (
    <div>
      <div>
        <img src="" alt="cay_canh" />{" "}
      </div>
      <div>
        <h3>Thông tin</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default productInfo;
