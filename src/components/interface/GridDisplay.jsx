import React, { useState } from "react";
import GridBox from "./GridBox";

function GridDisplay() {
  const gridBoxes = [
    {
      isOn: false,
      id: 1
    },
    {
      isOn: false,
      id: 2
    },
    {
      isOn: false,
      id: 3
    },
    {
      isOn: false,
      id: 4
    }
  ];
  const [boxes, updateBoxes] = useState(gridBoxes);

  const toggleBox = id => {
    let updatedBoxes = boxes.map(b => {
      if (b.id === id) b.isOn = !b.isOn;
      return b;
    });
    updateBoxes(updatedBoxes);
  };

  return (
    <div style={gridDisplayStyle}>
      {boxes.map((b, i) => (
        <GridBox isOn={b.isOn} key={i} id={b.id} toggleBox={toggleBox} />
      ))}
    </div>
  );
}

const gridDisplayStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  width: "200px",
  margin: "5rem"
};

export default GridDisplay;
