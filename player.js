class Player{
    constructor(name){
        this.name = name;
        this.score = 0;
    }
}

class Human extends Player{
    constructor(name){
        super(name);
    }
}
class AI extends Player{
    constructor(name){
        super(name);
    }
}
module.exports.Player = Player;
module.exports.Human = Human;
module.exports.AI = AI;