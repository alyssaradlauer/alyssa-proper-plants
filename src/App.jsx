import { useState } from "react";
import Plants from "./Plants/Plants.jsx";
import PLANTS from "./data.js";
import Cart from "./Cart/Cart.jsx";

export default function App() {
  const [plants, setPlants] = useState(PLANTS);
  const [cart, setCart] = useState([]);

  const addToCart = (plantToAdd) => {
    const itemExists = cart.find((cartItem) => {
      return cartItem.id === plantToAdd.id;
    });
    if (itemExists) {
      const updatedCart = cart.map((cartItem) => {
        return cartItem.id === plantToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem;
      });
      setCart(updatedCart);
    } else {
      const newItem = { ...plantToAdd, quantity: 1 };
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (foodToRemove) => {
    const updateCart = cart.map((cartItem) => {
      return cartItem.id === foodToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem;
    });
    const filterCart = updateCart.filter((cartItem) => {
      return cartItem.quantity > 0;
    });
    setCart(filterCart);
  };
  return (
    <div>
      <h1>Proper Plants</h1>
      <div className="mainContainer">
        <Plants plants={plants} addToCart={addToCart} />
        <Cart
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </div>
    </div>
  );
}
