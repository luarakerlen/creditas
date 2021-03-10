function rpsGameWinner(game) { 
    let strategies = ['PE', 'PA', 'TE'];
    let gameStrategies = [game[0][1], game[1][1]];

    if (game.length != 2) {   
        throw 'WrongNumberOfPlayers'; 
    }
    
    for (const strategy of gameStrategies) {
        if (!strategies.includes(strategy)) {
            throw 'NoSuchStrategyError'; 
        }
    }

    if(
        (game[0][1] == 'PE' && game[1][1] =='TE')
        || (game[0][1] == 'PA' && game[1][1] =='PE')
        || (game[0][1] == 'TE' && game[1][1] =='PA')
    ) {
        return game[0];
    } else if(
        (game[1][1] == 'PE' && game[0][1] =='TE')
        || (game[1][1] == 'PA' && game[0][1] =='PE')
        || (game[1][1] == 'TE' && game[0][1] =='PA')
    ) {
        return game[1];
    } else if(
        (game[0][1] == 'PE' && game[1][1] =='PE')
        || (game[0][1] == 'PA' && game[1][1] =='PA')
        || (game[0][1] == 'TE' && game[1][1] =='TE')
    ){
        return game[0];
    }
}

game = [[ 'Luara', 'PE' ], [ 'Dave', 'TE' ]]
console.log(rpsGameWinner(game));