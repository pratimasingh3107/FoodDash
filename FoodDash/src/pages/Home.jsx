import { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";
import { getFoods } from "../services/api";

function Home() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFoods()
      .then((data) => {
        setFoods(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p style={{ padding: "20px" }}>Loading...</p>;

  return (
    <div className="food-container">
      {foods.map((food) => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
}

export default Home;
