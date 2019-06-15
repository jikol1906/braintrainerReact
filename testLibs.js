function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }

    return a;
}


function range(min, max) {

    const arr = [];

    for (let i = min; i <= max; i++) {
        arr.push(i)
    }

    return arr;

}

function generateWrongAnswers(num) {

    let nums;

    if (num < 4) {
        nums = range(num+1,num+8)
    } else {
        nums = [...range(num - 4, num - 1), ...range(num + 1, num + 10)];
    }

    shuffle(nums);

    return nums.slice(0,3);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

let num1 = getRandomInt(2,19);
let num2 = getRandomInt(2,19);


let correctAnswer = num1 * num2;
let answers = shuffle([correctAnswer, ...generateWrongAnswers(num1 * num2)]);

console.log(`${num1}*${num2}`);
console.log(answers);

num1 = getRandomInt(2,100);
num2 = getRandomInt(2,100);

correctAnswer = num1 + num2;
answers = shuffle([correctAnswer, ...generateWrongAnswers(num1 + num2)]);

console.log(`${num1}+${num2}`);
console.log(answers);

num1 = getRandomInt(2, 20);
num2 = getRandomInt(2, 10);

correctAnswer = num1;
answers = shuffle([correctAnswer, ...generateWrongAnswers(num1)]);

console.log(`${num1 * num2}/${num2}`);
console.log(answers);








