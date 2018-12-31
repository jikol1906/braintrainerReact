import './Board.css'
import Square from "../Component/Square/Square";
import React from 'react'


export const Board = (props) => {

        return (
                <div className="board">
                    <button
                        onClick={props.startGame}
                        className={props.gameStarted ? 'gameStarted' : 'startButton'}>
                        <strong>Start Game!</strong>
                    </button>
                    <Square
                        clicked={props.squareClicked}
                        val={props.sqOne}
                        gameStarted={props.gameStarted}
                    />
                    <Square
                        clicked={props.squareClicked}
                        val={props.sqTwo}
                        gameStarted={props.gameStarted}
                    />
                    <Square
                        clicked={props.squareClicked}
                        val={props.sqThree}
                        gameStarted={props.gameStarted}
                    />
                    <Square
                        clicked={props.squareClicked}
                        val={props.sqFour}
                        gameStarted={props.gameStarted}
                    />
                </div>
        )
};



export default Board;
