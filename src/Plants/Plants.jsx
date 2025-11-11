import Plant from "./Plant.jsx";

const Plants = ({ plants, addToCart }) => {
  return (
    <div>
      <h2>Plants</h2>

      <div className="plantBox">
        {plants.map((plant) => {
          return <Plant key={plant.id} plant={plant} addToCart={addToCart} />;
        })}
      </div>
    </div>
  );
};

export default Plants;
