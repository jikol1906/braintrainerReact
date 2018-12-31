import React from 'react';
import './Square.css'

const Square = (props) => {


    return (
        <div
            onClick={props.gameStarted?props.clicked:null}
            className={['square',props.gameStarted?'gameStarted':null].join(' ')}>
            <p className="no-select">{props.val}</p>
        </div>
    );
};

    export default Square;
