function Player_controller(){
    this.getPokemon = function(player_model){
        player_model.pokemon = get_card_api_data.make_pokemon();
        player_model.hp = player_model.pokemon.hp;
        player_model.attack = player_model.pokemon.attack;
        player_model.completedMovesGoal = Math.floor((parseInt(player_model.hp) + parseInt(player_model.attack)) / 20);
        console.log(player_model.index + " will be ", player_model.pokemon);
        console.log(" and need to get " + player_model.completedMovesGoal)
    };
    this.takeDamage = function(player_model, damageAmount) {
        player_model.hp -= damageAmount;
    };
    this.completeMove = function(player_model){
        view.arrowBoxMadeMove(player_model);
        view.hideArrowForMoment(player_model);
        player_model.completedMoves +=1;
        console.log(player_model.index + " Completed Move!  Now has " + player_model.completedMoves);
        this.checkIfWinRound(player_model);
        this.getRequiredMove(player_model);
    };
    this.missMove = function(player_model){
        view.arrowBoxMissMove(player_model);
        view.hideArrowForMoment(player_model);
        player_model.completedMoves -=1;
        if(player_model.completedMoves < 0){
            player_model.completedMoves = 0;
        }
        console.log(player_model.index + " MISSED!  Now has " + player_model.completedMoves);
        this.getRequiredMove(player_model);
    };
    this.getRequiredMove = function(player_model){
        var availableKeys = player_model.availableKeys;
        var randomIndex = Math.floor(Math.random()*availableKeys.length);
        console.log(player_model.availableKeys[randomIndex]);
        player_model.requiredMove = player_model.availableKeys[randomIndex];
        view.displayArrow(player_model.requiredMove, player_model)

    };
    this.resetCompletedMoves = function(player_model){
        player_model.completedMoves = 0;
    };
    this.checkIfWinRound = function(player_model){
        if(player_model.completedMoves >= player_model.completedMovesGoal){
            game_model.roundStarted = false;
            console.log(player_model.index + " WINS THE ROUND!")
            var otherPlayerIndex = 1 - player_model.index;
            this.resetCompletedMoves(player_model);
            this.resetCompletedMoves(game_model.players[otherPlayerIndex]);
            this.takeDamage(game_model.players[otherPlayerIndex], player_model.attack);
            console.log("player " + otherPlayerIndex + " takes " + player_model.attack + " damage and is now at " + game_model.players[otherPlayerIndex].hp + " hp")
            // game_controller.endRound();
            if(game_model.players[0].hp > 0 && game_model.players[1].hp > 0){
                game_controller.startTimer(3000, false);
            }
            else{
                console.log("player " + player_model.index + " won the game!");
                player_model.wins += 1;
                winnerPlayerModel = player_model;
                game_controller.endGame(winnerPlayerModel);
            }
        }
    }
}