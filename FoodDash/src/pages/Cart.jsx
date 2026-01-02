import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems } = useCart();

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <h4>{item.title}</h4>
            <p>₹ {item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
