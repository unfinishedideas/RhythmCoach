import React, { useState } from 'react';

function GridBox() {

    const gridBoxStyle = {
        height: '30px',
        width: '30px',
        backgroundColor: 'blue'
    }
    // const [isOn, displayOn] = useState(false);

    return(
        <div className={gridBoxStyle}/>
    );
};


export default GridBox;