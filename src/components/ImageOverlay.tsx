import React from "react";

type Image = {
  src: string;
  startRow: number;
  startCol: number;
  endRow: number;
  endCol: number;
};

type ImageOverlayProps = {
  rows: number;
  columns: number;
  cellSize: number;
  images: Image[];
};

const ImageOverlay: React.FC<ImageOverlayProps> = ({
  rows,
  columns,
  cellSize,
  images,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        display: "grid",
        gap: "2px",
        pointerEvents: "none", // Ensures images do not block interactions with the grid
        gridTemplateColumns: `repeat(${columns}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
      }}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={`Logo ${index}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            gridRow: `${image.startRow} / span ${
              image.endRow - image.startRow + 1
            }`,
            gridColumn: `${image.startCol} / span ${
              image.endCol - image.startCol + 1
            }`,
          }}
        />
      ))}
    </div>
  );
};

export default ImageOverlay;
