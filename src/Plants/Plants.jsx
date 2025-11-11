import Plant from "./Plant.jsx";

const Plants = ({ plants }) => {
  return (
    <div>
      <h2>Plants</h2>
      <ul>
        {plants.map((plant) => {
          return <Plant key={plant.id} plant={plant} />;
        })}
      </ul>
    </div>
  );
};

export default Plants;
