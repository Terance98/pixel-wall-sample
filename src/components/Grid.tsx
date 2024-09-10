type GridProps = {
  rows: number;
  columns: number;
  cellSize: number;
};

const Grid: React.FC<GridProps> = ({ rows, columns, cellSize }) => {
  return (
    <div
      className="grid"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
        gap: "2px",
      }}
    >
      {Array.from({ length: rows * columns }, (_, index) => (
        <div
          className="box"
          key={index}
          style={{
            width: `${cellSize}px`,
            height: `${cellSize}px`,
            backgroundColor: "lightgray", // Default box color
          }}
        ></div>
      ))}
    </div>
  );
};

export default Grid;
