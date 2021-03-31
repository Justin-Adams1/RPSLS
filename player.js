"use strict";
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
    chooseGesture(){

    }
}
class AI extends Player{
    constructor(name){
        super(name);
        this.name = "Brain-I-AC";
        this.computer = true;
        this.choice = "";
    }
}
module.exports.Player = Player;
module.exports.Human = Human;
module.exports.AI = AI;