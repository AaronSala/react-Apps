import { useEffect } from "react";
import { useState } from "react";

function RandomColor() {
  const [typeOfColor, setTypeOfcolor] = useState("hex");
  const [color, setColor] = useState("#000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];

    let hexColor = "#";
    for (let x = 0; x < 6; x++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g}, ${b})`);
  }
    useEffect(() => {
        if (typeOfColor === 'rgb') {
            handleCreateRandomRgbColor()
        } else {
            handleCreateRandomHexColor()
        }
    }, [typeOfColor])

  return (
    <div
      className="container"
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfcolor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfcolor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
          </button>
          
          <div style={{
              display: "flex",
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
              fontSize: '60px',
              marginTop: '50px',
              flexDirection: 'column',
              gap: '20px'
          }}>
              <h3>{typeOfColor === 'rgb'?'RGB Color' : 'HEX Color'}</h3>
              <h1>{color}</h1>
          </div>
    </div>
  );
}

export default RandomColor;
