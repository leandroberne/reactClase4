import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, initial = 1 }) => {

    const [number, setNumber] = useState(initial);

    const onAdd = () => {
        if (number < stock) {
            setNumber(number + 1);
        }
    }

    const onRemove = () => {
        if (number > initial) {
            setNumber(number - 1);
        }
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{number}</h5>
                <p className="card-text">Camisa Jamiroquai XL</p>
                <a href="/#" className="btn btn-primary" onClick={onRemove}>-</a>
                <a href="/#" className="btn btn-success" onClick={onAdd}>+</a>
            </div>
        </div>
    )
}

export default ItemCount;