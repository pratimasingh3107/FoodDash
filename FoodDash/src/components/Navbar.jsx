import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartItems } = useCart();

  return (
    <nav className="navbar">
      <h2 className="logo">FoodDash</h2>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/cart">
            Cart ({cartItems.length})
          </Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
