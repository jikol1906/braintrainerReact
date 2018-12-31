import {getRandomInt, shuffle} from "./HelperFunctions";

export class QuestionGenerator {

    constructor(min, max) {

        this._min = min;
        this._max = max;
        this._question='';
        this._answer=null;
        this._numbers = [];

    }

    generateNumbers() {
        const numbers = shuffle([...Array(this._max).keys()].slice(this._min, this._max));

        for (let i = 0; i < 4; i++) {
            this._numbers.push(numbers[i])
        }

        //const term1 = Math.round(Math.random()*this._min)
    }

    generateQuestion() {

        if(this.numbers.length !== 0) {
            //Pick random number from numbers
            const randNumber = this.numbers[getRandomInt(0,4)];
            const rand = getRandomInt(randNumber/2,randNumber);
            const toAdd = randNumber-rand;

            this._answer=randNumber;
            this._question=`${rand}+${toAdd}`
        }



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



