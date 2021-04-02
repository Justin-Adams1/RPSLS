"use strict";
const players = require('./player');
const prompt = require('prompt-sync')();

var resultTable = ["Rock", "   Paper", "      Scissors", "         Lizard",            "              Spock"];

class Game {
    constructor() {
        this.playerOne;
        this.playerTwo;
    }

    runGame(){
        this.intro();
          
        let nameOne = prompt("Please enter your name: ");
        this.playerOne = new players.Human(nameOne);
        console.log("\nPlease select your opponent:\n1.Another Human next to you\n2.AI:\n")
        let choice1 = parseInt(prompt(""));

        do{
            switch(choice1){
                case 1:
                    let choice2 = prompt("Enter your name: ")
                    this.playerTwo = new players.Human(choice2);
                    break;
                case 2:
                    console.log("\n*** Brain-I-AC *** has been connected as your opponent, good luck!");
                    this.playerTwo = new players.AI();
                    break;
                default:
                    console.log("\nPlease enter a valid selection from above.\n")
                    break;
            }
            break;
        }while(choice2 != 1 || choice2!= 2);

        let repeatCheck = 1;

        do{ 
        console.log("Are you ready for the round? Hit Enter")
        prompt("");
        console.clear();
        this.playerOne.selectThrow();
        console.clear();
        this.playerTwo.selectThrow();
        this.compareThrow(this.playerOne, this.playerTwo);
        
        if(this.playerOne.score ==3){
            console.log("\n" + this.playerOne.name + " has won this game!\n\n");
            repeatCheck =  this.repeatGameChoice();
        }else if(this.playerTwo.score ==3){
            console.log("\n" + this.playerTwo.name + " has won this game!\n\n");
            repeatCheck =  this.repeatGameChoice();
        }
        }while(repeatCheck == 1 || repeatCheck == 2);
        return;
    }

    repeatGameChoice(){
        console.log("\n\nWould you like to play again?\n");
        console.log("1.Yes \n2.No\n")
        let repeatCheck = parseInt(prompt());
        do{
            switch(repeatCheck){
                case 1:
                    this.runGame();
                case 2:
                    console.log("\n\nGoodbye\n\n");
                    repeatCheck = 3;
                    return repeatCheck;
            }
            break;
        }while(repeatCheck != 1 || repeatCheck != 2);
        return repeatCheck;
    }

    compareThrow(playerOne, playerTwo){
        if(playerOne.choice == "Rock" && (playerTwo.choice == "Scissors" || playerTwo.choice == "Lizard")){
            console.log(playerOne.name + " has won this round! Rock smashes scissors and crushes lizard.\n");
            playerOne.score += 1;
            console.log(playerOne.name + " now has " + playerOne.score + " points. " + playerTwo.name + " has " + playerTwo.score + " points.");
            return;
        }
        else if(playerOne.choice == "Paper" && (playerTwo.choice  == "Rock" || playerTwo.choice  == "Spock")){
            console.log(playerOne.name + " has won this round! Paper wraps up rock and disproves Spock.\n");
            playerOne.score += 1;
            console.log(playerOne.name + " now has " + playerOne.score + " points. " + playerTwo.name + " has " + playerTwo.score + " points.");
            return;
        }
        else if(playerOne.choice == "Scissors" && (playerTwo.choice  == "Paper" || playerTwo.choice  == "Lizard")){
            console.log(playerOne.name + " has won this round! Scissors cuts paper and decapitates lizard.\n");
            playerOne.score += 1;
            console.log(playerOne.name + " now has " + playerOne.score + " points. " + playerTwo.name + " has " + playerTwo.score + " points.");
            return;
        }
        else if(playerOne.choice == "Lizard" && (playerTwo.choice  == "Spock" || playerTwo.choice  == "Paper")){
            console.log(playerOne.name + " has won this round! Lizard eats paper and poisons Spock.\n");
            playerOne.score += 1;
            console.log(playerOne.name + " now has " + playerOne.score + " points. " + playerTwo.name + " has " + playerTwo.score + " points.");
            return;
        }
        else if(playerOne.choice == "Spock" && (playerTwo.choice  == "Scissors" || playerTwo.choice  == "Rock")){
            console.log(playerOne.name + " has won this round! Spock breaks scissors and vaporizes rock.\n");
            playerOne.score += 1;
            console.log(playerOne.name + " now has " + playerOne.score + " points. " + playerTwo.name + " has " + playerTwo.score + " points.");
            return;
        }
        else if(playerTwo.choice == "Rock" && (playerOne.choice == "Scissors" || playerOne.choice == "Lizard")){
            console.log(playerTwo.name + " has won this round! Rock smashes scissors and crushes lizard.\n");
            playerTwo.score += 1;
            console.log(playerOne.name + " now has " + playerOne.score + " points. " + playerTwo.name + " has " + playerTwo.score + " points.");
            return;
        }
        else if(playerTwo.choice == "Paper" && (playerOne.choice == "Rock" || playerOne.choice == "Spock")){
            console.log(playerTwo.name + " has won this round! Paper wraps up rock and disproves Spock.\n");
            playerTwo.score += 1;
            console.log(playerOne.name + " now has " + playerOne.score + " points. " + playerTwo.name + " has " + playerTwo.score + " points.");
            return;
        }
        else if(playerTwo.choice == "Scissors" && (playerOne.choice == "Paper" || playerOne.choice == "Lizard")){
            console.log(playerTwo.name + " has won this round! Scissors cuts paper and decapitates lizard.\n");
            playerTwo.score += 1;
            console.log(playerOne.name + " now has " + playerOne.score + " points. " + playerTwo.name + " has " + playerTwo.score + " points.");
            return;
        }
        else if(playerTwo.choice == "Lizard" && (playerOne.choice == "Spock" || playerOne.choice == "Paper")){
            console.log(playerTwo.name + " has won this round! Lizard eats paper and poisons Spock.\n");
            playerTwo.score += 1;
            console.log(playerOne.name + " now has " + playerOne.score + " points. " + playerTwo.name + " has " + playerTwo.score + " points.");
            return;
        }
        else if(playerTwo.choice == "Spock" && (playerOne.choice == "Scissors" || playerOne.choice == "Rock")){
            console.log(playerTwo.name + " has won this round! Spock breaks scissors and vaporizes rock.\n");
            playerTwo.score += 1;
            console.log(playerOne.name + " now has " + playerOne.score + " points. " + playerTwo.name + " has" + playerTwo.score + " points.");
            return;
        }
        else if(playerTwo.choice == playerOne.choice) {
            console.log("\nThis round is a tie! \n");
            return;
        }
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