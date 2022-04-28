import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./CartItem.styles.scss";

const CartItem = ({ CartItem }) => {
  const { name, quantity,price,imageUrl } = CartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">{quantity} * ${price}</span>
      </div>
    </div>
  );
};

export default CartItem;
