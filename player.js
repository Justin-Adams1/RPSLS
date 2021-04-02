"use strict";
const prompt = require('prompt-sync')();
class Player{
    constructor(name){
        //Player has...
        this.name = name;
        this.score = 0;
    }
}

class Human extends Player{
    constructor(name){
        super(name);
        this.choice = "";
        this.computer = false;
    }
    selectThrow(playerOne){
        do{
            console.log("\n" + this.name + " please enter your selection of the following:")
            console.log("1.Rock\n2.Paper\n3.Scissors\n4.Lizard\n5.Spock\n")
            let choice2 = parseInt(prompt(""));
            switch(choice2){
                case 1:
                    this.choice = "Rock";
                    return;
                case 2:
                    this.choice = "Paper";
                    return;
                case 3:
                    this.choice = "Scissors";
                    return;
                case 4:
                    this.choice = "Lizard";
                    return;
                case 5:
                    this.choice = "Spock";
                    return;
                default:
                    console.log("\n\nPlease enter a valid selection from above.\n")
                    this.selectThrow(playerOne);
                    break;
            }
        }while(choice2 != 1 || choice2!= 2 || choice2 != 3 || choice2 != 4 || choice2 != 5);
        }
}
class AI extends Player{
    constructor(name){
        super(name);
        this.name = "Brain-I-AC";
        this.computer = true;
        this.choice = "";
    }

    getRandomNumber(){
        let numberChoice = Math.floor(Math.random() * 5);
        do{
        numberChoice = Math.floor(Math.random() * 5);
        }while(numberChoice == 0)
        return numberChoice;
    }

        selectThrow(){
        let computerChoice = this.getRandomNumber();
            console.log("\n***** Brain-I-AC cannot be stopped. Selecting....... Complete.\n")
            switch(computerChoice){
                case 1:
                    this.choice = "Rock";
                    return;
                case 2:
                    this.choice = "Paper";
                    return;
                case 3:
                    this.choice  = "Scissors";
                    return;
                case 4:
                    this.choice  = "Lizard";
                    return;
                case 5:
                    this.choice  = "Spock";
                    return;
            }
        }
    }

module.exports.Player = Player;
module.exports.Human = Human;
module.exports.AI = AI;