const Plant = ({ plant }) => {
  return (
    <li
      onClick={() => {
        console.log(plant.name);
      }}
    >
      {plant.name}
    </li>
  );
};

export default Plant;
