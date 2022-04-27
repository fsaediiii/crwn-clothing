import React from "react";
import "./ProductCard.styles.scss";
import Button from "../Button/Button.component";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button className="inverted">Add to card</Button>
    </div>
  );
};

export default ProductCard;
