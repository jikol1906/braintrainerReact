import React, {Component} from 'react';
import './Board.css'
import Square from "../Component/Square/Square";



class Board extends Component {



    render() {
        return (
            <div className="board">
                <Square placement={'topLeft'}/>
                <Square placement={'topRight'}/>
                <Square placement={'bottomLeft'}/>
                <Square placement={'bottomLeft'}/>
            </div>
        )
    }
}

export default Board;
