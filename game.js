const player = require('./player');

var resultTable = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

function intro(){
    let x = 0
    console.log("Welcome to the game:\n");
    do{
        console.log(resultTable[x]);
        x++;
    } while (x<5)
    console.log("\n");
}




module.exports.intro = intro;