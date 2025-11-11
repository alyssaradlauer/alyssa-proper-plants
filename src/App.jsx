import { useState } from "react";
import Plants from "./Plants/Plants.jsx";
import PLANTS from "./data.js";

export default function App() {
  const [plants, setPlants] = useState(PLANTS);
  return (
    <div>
      <h1>Proper Plants</h1>
      <Plants plants={plants} />
    </div>
  );
}
