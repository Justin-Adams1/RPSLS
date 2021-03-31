"use strict";
const players = require('./player');
const game = require('./game');
const prompt = require('prompt-sync')();

let game1 = new game.Game();
game1.runGame();

// console.log("\n\nWould you like to play again?: 1.Yes 2.No : ")
