import React, {useState} from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () =>{
    const [boxes, setBoxes] = useState([]);
    const addBox = (width, height, backgroundColor)=>{setBoxes(boxes=>[...boxes, {width, height, backgroundColor}])}
    const removeBox = (boxIndex) =>{
        setBoxes(boxes => boxes.filter((box, index) => index !== boxIndex));
    }
    return(
        <>
            <h1>Boxes</h1>
            <NewBoxForm addBox={addBox}/>
            <div className='BoxList'>
                {boxes.map((box, index) => (
                    <div className='Boxlist-box' key ={index} data-testid={`box-${index}`}>
                        <Box removeBox={removeBox}
                            index={index}
                            width={box.width}
                            height={box.height}
                            backgroundColor={box.backgroundColor}
                        />
                    </div>
                ))}
                
            </div>
        </>
    )
}
export default BoxList;