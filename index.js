function superbowlWin(gameResults){
    
    const win = gameResults.find(game => game.result === "W");

    return win ? win.year : undefined;
} 
