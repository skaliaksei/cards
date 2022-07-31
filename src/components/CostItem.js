import './CostItem.css';
import Card from './Card';
import CostDate from './CostDate';
import React, { useState } from 'react';

function CostItem(props) {
    const [description, setDescription] = useState(props.description);

    const buttonClickHandler = () => {
        setDescription('new text');
        console.log(description);
    };

    return (
        <Card className='cost-item'>
            <CostDate date = {props.date}/>
            <div className='cost-item__description'>
                <h2>{description}</h2>
                <div className='cost-item__price'>${props.price}</div>
            </div>
            <button onClick={buttonClickHandler}>Change description</button>
        </Card>
    );
};

export default CostItem;