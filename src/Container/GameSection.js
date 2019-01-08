import React, {Component} from 'react';
import './Board.scss'
import Board from "./Board";
import {QuestionGenerator} from "../Utils/QuestionGenerator";
import GameStats from "../Component/GameStats/GameStats";
import Button from "../UI/Button/Button";


export class GameSection extends Component {

    constructor(props) {
        super(props);

        this.state = {
            intervalId:null,
            squareOne: null,
            squareTwo: null,
            squareThree: null,
            squareFour: null,
            correctAnswer: null,
            question: null,
            timeLeft: null,
            gameStarted: false,
            gameEnded: false,
            numOfQuestions:0,
            correctAnswers:0
        };

        this.generator = new QuestionGenerator(30,40)
    }


    startGame = () => {

        this.setState({
            gameStarted: true,
            timeLeft:60
        });
        this.startTimer();
        this.setNewNumbersAndQuestion();
    };

    startTimer = () => {
        const intervalId =
            setInterval(() => {

                if(this.state.timeLeft === 0) {
                    this.endGame()
                } else {
                    this.setState((prevState) => ({
                        timeLeft:prevState.timeLeft-1
                    }))
                }
            },1000);

        this.setState({intervalId})
    };

    squareClickedHandler = (squareValue) => {


        this.setState((prevState) => ({
            numOfQuestions: prevState.numOfQuestions+1,
            correctAnswers: squareValue === this.state.correctAnswer ?
                        prevState.correctAnswers+1:prevState.correctAnswers
        }));

        this.setNewNumbersAndQuestion()
    };

    setNewNumbersAndQuestion() {

        this.generator.generateNumbers();
        this.generator.generateQuestion();
        this.generator.incrementDifficulty();

        const numbers = this.generator.numbers;

        this.setState({
            squareOne: numbers[0],
            squareTwo: numbers[1],
            squareThree: numbers[2],
            squareFour: numbers[3],
            question:this.generator.question,
            correctAnswer:this.generator.answer

        })


    }


    endGame() {
        clearInterval(this.state.intervalId);
        this.setState({gameEnded:true})
    }


    render() {


        return (
            <div className="container">
                <GameStats
                    gameStarted={this.state.gameStarted}
                    question={this.state.question}
                    numOfQuestions={this.state.numOfQuestions}
                    correctAnswers={this.state.correctAnswers}
                    timeLeft={this.state.timeLeft}
                />
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

