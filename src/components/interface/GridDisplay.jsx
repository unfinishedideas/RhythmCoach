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
    },
    {
      isOn: false,
      id: 5
    },
    {
      isOn: false,
      id: 6
    },
    {
      isOn: false,
      id: 7
    },
    {
      isOn: false,
      id: 8
    },
    {
      isOn: false,
      id: 9
    },
    {
      isOn: false,
      id: 10
    },
    {
      isOn: false,
      id: 11
    },
    {
      isOn: false,
      id: 12
    },
    {
      isOn: false,
      id: 13
    },
    {
      isOn: false,
      id: 14
    },
    {
      isOn: false,
      id: 15
    },
    {
      isOn: false,
      id: 16
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
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
  gridColumnGap: '10px',
  width: "200px"
};

export default GridDisplay;
