const players = require('./player');
const prompt = require('prompt-sync')();

var resultTable = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

class Game {
    constructor() {}

    runGame(){
        this.intro();
          
        let namePrompt = prompt("Please enter your name: ");
        this.playerOne = new players.Human(namePrompt);
        let choice1 = prompt("Please select your opponent: 1. Another Human next to you 2. AI: ")
        this.playerTwo = new players.Player(this.getPlayer(choice1));
        

    }

    selectThrow(){

        }

    compareThrow(){

        }

    getPlayer(choice){ 
        do{
            let namePrompt = "";
            switch(choice){
                case "1":
                    namePrompt = prompt("Please enter your name: ");
                    this.playerTwo = new players.Human(namePrompt);
                    return this.playerTwo;
                case "2":
                    namePrompt = "Brain-I-AC";
                    console.log("*** Brain-I-AC *** has been connected to you for this game. Good Luck!")
                    this.playerTwo= new players.AI(namePrompt);
                    return this.playerOne;
            }
        }while(choice != "1" || choice != "2");
    }

    intro(){
        let x = 0
        console.log("Welcome to the game:\n");
        do{
            console.log(resultTable[x]);
            x++;
        } while (x<5)
        console.log("\n");
    }
}   


module.exports.intro = this.intro;
module.exports.Game = Game;