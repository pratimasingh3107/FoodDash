import { useCart } from "../context/CartContext";

function FoodCard({ food }) {
    const { addToCart } = useCart();

  return (
    <div className="food-card">
      <img src={food.image} alt={food.title} />
      <h4>{food.title}</h4>
      <p>₹ {food.price}</p>
      <button onClick={() => addToCart(food)}>Add to Cart</button>
    </div>
  );
}

export default FoodCard;
