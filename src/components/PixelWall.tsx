import Grid from "./Grid";
import ImageOverlay from "./ImageOverlay";

const defaultRows = 75;
const defaultColumns = 75;
const defaultCellSize = 10;

const images = [
  { src: "logo.png", startRow: 2, startCol: 5, endRow: 3, endCol: 6 },
  {
    src: "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
    startRow: 5,
    startCol: 10,
    endRow: 8,
    endCol: 13,
  },

  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8B0NwMt8u0ebH7XDec_9VHsxTH2ZJyY12oQ&s",
    startRow: 15,
    startCol: 50,
    endRow: 20,
    endCol: 55,
  },
];

const PixelWall = ({
  rows = defaultRows,
  columns = defaultColumns,
  cellSize = defaultCellSize,
}) => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Grid rows={rows} columns={columns} cellSize={cellSize} />
      <ImageOverlay
        rows={rows}
        columns={columns}
        cellSize={cellSize}
        images={images}
      />
    </div>
  );
};

export default PixelWall;
