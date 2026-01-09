const GridProduct = ({ items, cols }) => {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
  };
  return (
    <div className={`grid ${gridCols[cols]} gap-4 my-4`}>
      {items.map((item) => (
        <img
          key={item.id}
          src={item.urlImage}
          alt={item.altImage}
          className="object-contain aspect-auto rounded-lg overflow-hidden"
        />
      ))}
    </div>
  );
};

export default GridProduct;
