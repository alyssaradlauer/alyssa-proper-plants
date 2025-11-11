import { useState } from "react";
import Plants from "./Plants/Plants.jsx";
import PLANTS from "./data.js";
import Cart from "./Cart/Cart.jsx";

export default function App() {
  const [plants, setPlants] = useState(PLANTS);
  const [cart, setCart] = useState([]);
  return (
    <div>
      <h1>Proper Plants</h1>
      <Plants plants={plants} />
      <Cart />
    </div>
  );
}
