import React, {Component} from 'react';
import './Board.css'
import Board from "./Board";
import {QuestionGenerator} from "../Utils/Utils";


export class GameSection extends Component {


    //<editor-fold desc="Methods">
    state = {
        squareOne: null,
        squareTwo: null,
        squareThree: null,
        squareFour: null,
        correctAnswer: null,
        question: '',
        timeLeft: null,
        gameStarted: false,

    };

    startGame = () => {

        this.setState({
            gameStarted: true
        });

        this.setNewNumbersAndQuestion();
    };

    squareClickedHandler = () => {
        this.setNewNumbersAndQuestion()
    };

    setNewNumbersAndQuestion() {

        const gen = new QuestionGenerator(50, 100);

        gen.generateNumbers();
        gen.generateQuestion();

        const numbers = gen.numbers;
        const question = gen.question;

        this.setState({
            squareOne: numbers[0],
            squareTwo: numbers[1],
            squareThree: numbers[2],
            squareFour: numbers[3],
            question
        })


    }

    //</editor-fold>


    render() {


        return (
            <div className="container">
                <div className="question">
                    <h1
                        style={{visibility: !this.state.gameStarted ? 'hidden' : 'visible'}}>
                        {this.state.gameStarted ? this.state.question : '&nbsp'}
                    </h1>
                </div>
                <Board
                    gameStarted={this.state.gameStarted}
                    startGame={this.startGame}
                    squareClicked={this.squareClickedHandler}
                    sqOne={this.state.squareOne}
                    sqTwo={this.state.squareTwo}
                    sqThree={this.state.squareThree}
                    sqFour={this.state.squareFour}
                />
            </div>
        )
    }


}

