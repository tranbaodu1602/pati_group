const GridProduct = ({ items, cols }) => {
  return (
    <div className={`grid grid-cols-${cols} gap-4 my-4`}>
      {items.map((item) => (
        <img
          key={item.id}
          src={item.urlImage}
          alt={item.altImage}
          className="object-contain  aspect-auto rounded-lg overflow-hidden"
        />
      ))}
    </div>
  );
};

export default GridProduct;
