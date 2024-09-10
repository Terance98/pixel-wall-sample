import "./App.css"; // Main CSS for layout
import PixelWall from "./components/PixelWall";

function App() {
  return (
    <div
      className="app"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <PixelWall rows={75} columns={75} cellSize={10} />
    </div>
  );
}

export default App;
