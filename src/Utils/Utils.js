export class QuestionGenerator {

    constructor(min, max) {

        this._min = min;
        this._max = max;
        this._question='';
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
}

//Helper methods

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }

    return a;
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}





const g = new QuestionGenerator(50,100);

g.generateNumbers();
g.generateQuestion();

console.log(g.numbers);
console.log(g.question);