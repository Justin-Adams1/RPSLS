"use strict";
const players = require('./player');
const prompt = require('prompt-sync')();

var resultTable = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

class Game {
    constructor() {}

    runGame(){
        this.intro();
          
        let nameOne = prompt("Please enter your name: ");
        this.playerOne = new players.Human(nameOne);
        let choice1 = prompt("Please select your opponent: 1. Another Human next to you 2. AI: ")
        this.playerTwo = new players.Player(this.getPlayer(choice1));
        
        do{
        this.roundSelection(this.playerOne, this.playerTwo);
        this.compareThrow(this.playerOne, this.playerTwo);
        }while((this.playerOne.Score)
        

    }

    roundSelection(playerOne, playerTwo){
        selectThrow(this.playerOne);
        if(this.playerTwo.computer){
            let computerChoice = Math.floor(Math.random() * 5);
            console.log("\nBrain-I-AC cannot be stopped. Selecting....... Complete.\n")
            switch(computerChoice){
                case "1":
                    this.playerTwo.choice = "Rock";
                    break;
                case "2":
                    this.playerTwo.choice = "Paper";
                    break;
                case "3":
                    this.playerTwo.choice  = "Scissors";
                    break;
                case "4":
                    this.playerTwo.choice  = "Lizard";
                    break;
                case "5":
                    this.playerTwo.choice  = "Spock";
                    break;
            }
        }if(this.playerTwo.computer = false){
            selectThrow(this.playerTwo);
        }
    }

    selectThrow(player){
        console.log("Please select one of the following:\n 1.Rock\n2.Paper\n3.Scissors\n4.Lizard\n5.Spock");
        let choice2 =  prompt(this.Player.name+ " selects: ");
        do{
            switch(choice2){
                case "1":
                    this.playerOne.choice = "Rock";
                    break;
                case "2":
                    this.playerOne.choice = "Paper";
                    break;
                case "3":
                    this.playerOne.choice = "Scissors";
                    break;
                case "4":
                    this.playerOne.choice = "Lizard";
                    break;
                case "5":
                    this.playerOne.choice = "Spock";
                    break;
            }
        }while(choice2 != 1 || choice!= 2 || choice != 3 || choice != 4 || choice != 5);
        }

    compareThrow(playerOne, PlayerTwo){
        console.log(this.playerOne.name + "Chose: " + this.playerOne.choice + ".\n");
        
        console.log(this.playerTwo.name + "Chose: " + this.playerTwo.choice + ".\n");

        if(this.playerOne.choice == "Rock" && (this.playerTwo.choice == "Scissors" || this.playerTwo.choice == "Lizard")){
            console.log(this.playerOne.name + " has won this round! Rock smashes scissors and crushes lizard.\n");
            this.playerOne.score += 1;}
        if(this.playerOne.choice == "Paper" && (this.playerTwo.choice == "Rock" || this.playerTwo.choice == "Spock")){
            console.log(this.playerOne.name + " has won this round! Paper wraps up rock and disproves Spock.\n");
            this.playerOne.score += 1;}
        if(this.playerOne.choice == "Scissors" && (this.playerTwo.choice == "Paper" || this.playerTwo.choice == "Lizard")){
        console.log(this.playerOne.name + " has won this round! Scissors cuts paper and decapitates lizard.\n");
            this.playerOne.score += ;;}
        if(this.playerOne.choice == "Lizard" && (this.playerTwo.choice == "Spock" || this.playerTwo.choice == "Paper")){
        console.log(this.playerOne.name + " has won this round! Lizard eats paper and poisons Spock.\n");
            this.playerOne.score += 1;}
        if(this.playerOne.choice == "Spock" && (this.playerTwo.choice == "Scissors" || this.playerTwo.choice == "Rock")){
        console.log(this.playerOne.name + " has won this round! Spock breaks scissors and vaporizes rock.\n");
        this.playerOne.score += 1;}
        else {
            this.playerTwo.score += 1;
        }
    }

    getPlayer(choice){ 
        do{
            switch(choice){
                case "1":
                    this.playerTwo = new players.Human(prompt("Please enter your name: "));
                    return this.playerTwo;
                case "2":
                    console.log("\n*** Brain-I-AC *** has been connected to you for this game. Good Luck!\n")
                    this.playerTwo = new players.AI("Brain-I-AC");
                    return this.playerTwo;
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