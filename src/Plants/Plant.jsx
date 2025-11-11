const Plant = ({ plant }) => {
  return (
    <li>
      {plant.name}
      <button
        className="addButton"
        onClick={() => {
          console.log(plant);
        }}
      >
        Add to cart
      </button>
    </li>
  );
};

export default Plant;
