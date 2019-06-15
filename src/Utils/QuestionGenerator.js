import {generateWrongAnswers, getRandomInt, shuffle} from "./HelperFunctions";

export class QuestionGenerator {


    constructor(
        min,
        max,
        divisionAndMultiplicationEnabled = false
    ) {

        this._min = min;
        this._max = max;
        this._question = null;
        this._answer = null;
        this._numbers = [];
        this._divisionAndMultiplicationEnabled = divisionAndMultiplicationEnabled;

    }


    generateQuestion() {

        switch (getRandomInt(0, 4)) {
            case 0:
                this.generateAdditionQuestion();
                break;
            case 1:
                this.generateSubtractionQuestion();
                break;
            case 2:
                this.generateMultiplicationQuestion();
                break;
            case 3:
                this.generateMultiplicationQuestion();
                break;

        }

    }

    incrementRange() {
        this._min = this._min + 1;
        this._max = this._max + 1;
    }


    generateAdditionQuestion() {

        let num2 = getRandomInt(1, 50);
        let num1 = getRandomInt(1, 50);

        this._answer = num1 + num2;
        this._question = `${num1}+${num2}`;

        this.setNumbers()

    }

    generateSubtractionQuestion() {

        const num2 = getRandomInt(0, 25);
        const num1 = getRandomInt(25, 50);

        this._answer = num1 - num2;
        this._question = `${num1}-${num2}`;

        this.setNumbers()

    }

    generateMultiplicationQuestion() {

        const num2 = getRandomInt(1, 10);
        const num1 = getRandomInt(1, 20);

        this._answer = num1 * num2;
        this._question = `${num1}*${num2}`;

        this.setNumbers()

    }

    setNumbers() {
        this._numbers = shuffle([this._answer, ...generateWrongAnswers(this._answer)])
    }

    reset(min, max) {
        this._min = min;
        this._max = max;
    }


//Getters

    get numbers() {
        return this._numbers;
    }

    get question() {
        return this._question;
    }

    get answer() {
        return this._answer;
    }
}



