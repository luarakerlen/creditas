function rpsGameWinner(game) { 
    const strategies = ['PE', 'PA', 'TE'];
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

function tournamentGameWinner(tournament) {
    if(typeof tournament[0][0] == 'string') return rpsGameWinner(tournament);

    let winner1 = tournamentGameWinner(tournament[0]);
    let winner2 = tournamentGameWinner(tournament[1]);

    return rpsGameWinner([winner1, winner2]);
}

let tournament = [  
    [    
        [      
            ['Armando', 'PE'], ['Dave', 'TE']    
        ],    
        [      
            ['Richard', 'PA'], ['Michael', 'TE']    
        ],  
    ],  
    [    
        [      
            ['Allen', 'TE'], ['Arthur', 'TE']    
        ],    
        [      
            ['David', 'PA'], ['Omer', 'PE']    
        ],  
    ],
];

console.log(tournamentGameWinner(tournament));