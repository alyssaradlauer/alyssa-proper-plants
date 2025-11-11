import { useCart } from "react";

const Cart = ({ cart, addToCart, removeFromCart }) => {
  return (
    <div className="cartContainer">
      {cart.length === 0 ? (
        <h3>Your cart is empty</h3>
      ) : (
        <div>
          <h3>Your cart</h3>
          {cart.map((cartItem) => {
            return (
              <div key={cartItem.id}>
                <li>
                  {cartItem.name}

                  <div>
                    Quantity: {cartItem.quantity}
                    <button
                      onClick={() => {
                        addToCart(cartItem);
                      }}
                    >
                      +
                    </button>
                    <button
                      onClick={() => {
                        removeFromCart(cartItem);
                      }}
                    >
                      -
                    </button>
                  </div>
                </li>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Cart;
