let input = "AAABA\n" +
    "BBBBB\n" +
    "ABAAA\n" +
    "ABBBB\n" +
    "AAAAA";


input = input.split('\n').map(s=>s.split(''));


const adjList = []
let counter = 0;

for (let row = 0; row < input.length; row++) {
    for (let column = 0; column < input.length; column++) {
        adjList[counter++] = findNeighbours(input[row][column],row,column)
    }
}




function findNeighbours(inputElementElement,row,column,counter) {

    const neighbours = [];

    if(isValidPoint(row,column+1)) neighbours.push();
    if(isValidPoint(row,column-1)) neighbours.push();
    if(isValidPoint(row+1,column)) neighbours.push();
    if(isValidPoint(row-1,column)) neighbours.push()

    return neighbours;
}

function isValidPoint(row,column) {
    return row >= 0 && column >= 0 && row < input.length && column < input.length
}





/*
let isOnA = input.txt[0][0] === 'A';
let currRow = 0;
let currCol = 0;
let length = 5;
let steps = 0;


function lookRight() {
    return input.txt[currRow][currCol+1]
}

function lookDown() {
    return input.txt[currRow+1] ? input.txt[currRow+1][currCol] : null;
}

function lookLeft() {
    return input.txt[currRow][currCol-1]
}

function lookUp() {
    return input.txt[currRow-1] ? input.txt[currRow-1][currCol] : null
}

function goRight() {
    currCol++;
    markVisited();
}

function goDown() {
    currRow++;
    markVisited();
}

function goLeft() {
    currCol--;
    markVisited();
}

function goUp() {
    currRow--;
    markVisited();
}

function markVisited() {
    input.txt[currRow][currCol] = 'V';
}

function isVisited() {
    return input.txt[currRow][currCol] === 'V';
}

function isFinished() {
    return currCol === length-1 && currRow === length-1;
}





while(!isFinished()) {
    if(isOnA) {
        if(lookRight() === 'B') goRight();
        else if(lookDown() === 'B') goDown();
        else if(lookUp() === 'B') goUp();
        else if(lookLeft() === 'B')
    } else {
        if(lookRight() === 'A') goRight();
    }
}
*/




/*
var Stack = function () {
    this.items = [];
};
Stack.prototype.enqueue = function (obj) {
    this.items.push(obj);
};
Stack.prototype.dequeue = function () {
    return this.items.shift();
};
Stack.prototype.isEmpty = function () {
    return this.items.length === 0;
};


var doBFS = function (graph, source) {

    var bfsInfo = [];

    for (var row = 0; row < graph.length; row++) {
        bfsInfo[row] = {
            distance: null,
            predecessor: null
        };
    }

    bfsInfo[source].distance = 0;

    var queue = new Stack();
    queue.enqueue(source);


    while(!queue.isEmpty()) {

        var currentVertix = queue.dequeue();

        for (var row = 0; row < graph[currentVertix].length; row++) {

            var neighbour = graph[currentVertix][row];

            if (bfsInfo[neighbour].distance === null) {
                bfsInfo[neighbour].distance = bfsInfo[currentVertix].distance + 1;
                bfsInfo[neighbour].predecessor = currentVertix;

                queue.enqueue(neighbour);
            }
        }
    }

    // Traverse tahe graph

    // As long as the queue is not empty:
    //  Repeatedly dequeue a vertex u from the queue.
    //
    //  For each neighbor v of u that has not been visited:
    //     Set distance to 1 greater than u's distance
    //     Set predecessor to u
    //     Enqueue v
    //
    //  Hint:
    //  use graph to get the neighbors,
    //  use bfsInfo for distances and predecessors

    return bfsInfo;
};


var adjList = [
    [1],
    [0, 4, 5],
    [3, 4, 5],
    [2, 6],
    [1, 2],
    [1, 2, 6],
    [3, 5],
    []
];

var bfsInfo = doBFS(adjList, 3);

for (var row = 0; row < adjList.length; row++) {
    console.log("vertex " + row + ": distance = " + bfsInfo[row].distance + ", predecessor = " + bfsInfo[row].predecessor);
}





function peekUp(arr,r,c) {
    return (input.txt[r-1] ? input.txt[r-1][c] : null)
}

console.log(peekUp(input.txt, 1, 0));*/





