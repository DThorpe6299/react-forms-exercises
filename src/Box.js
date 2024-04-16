import React from "react";

const Box = ({width, height, backgroundColor, removeBox, index}) =>{
        const boxStyle = {    
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor: backgroundColor,
            border: "1px solid black",
            margin: "5px"
        }
        const handleClick = () => {
            removeBox(index);
        };
    return(
        <>
            <div className="Box" style={boxStyle}></div>
            <button onClick={handleClick}>X</button>
        </>
    )
}

export default Box;