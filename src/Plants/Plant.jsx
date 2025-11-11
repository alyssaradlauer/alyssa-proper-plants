const Plant = ({ plant, addToCart }) => {
  return (
    <div className="onePlant">
      <span className="plantEmoji" role="img" aria-label={plant.name}>
        {plant.image}
      </span>

      <h3>{plant.name}</h3>

      <button
        className="addButton"
        onClick={() => {
          addToCart(plant);
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Plant;
