import React from 'react';
import './GameInfo.css'

const GameInfo = (props) => {
    return (
        <div className="question">
            <h1
                style={{visibility: !props.gameStarted ? 'hidden' : 'visible'}}>
                {props.question}
            </h1>
        </div>
    );
};

export default GameInfo;
