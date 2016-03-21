function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function getNumberOfWinsScore(gameState,turn){
	var wins = 0;
	for (i = 1; i <= 9; i++) {
		isw = isWinnerWgameState(gameState,String(i));
		if (isw == 0) continue;
		if (turn == 1){
	 		if(isw%2 == 1) wins++;
	 		if(isw%2 == 0) wins--;
	  } else if (turn == 2){
	 		if(isw%2 == 1) wins--;
	 		if(isw%2 == 0) wins++;
	  }
	}

	return wins;
}

function isFinishedWgameState(gameState){
	//horiz
	if(gameState.board.g1.w > 0 && gameState.board.g2.w > 0 && gameState.board.g3.w > 0)
	if(gameState.board.g1.w%2 == 1 && gameState.board.g2.w%2 == 1 && gameState.board.g3.w%2 == 1) return 1;
	if(gameState.board.g1.w > 0 && gameState.board.g2.w > 0 && gameState.board.g3.w > 0)
	if(gameState.board.g1.w%2 == 0 && gameState.board.g2.w%2 == 0 && gameState.board.g3.w%2 == 0) return 2;
	if(gameState.board.g4.w > 0 && gameState.board.g5.w > 0 && gameState.board.g6.w > 0)
	if(gameState.board.g4.w%2 == 1 && gameState.board.g5.w%2 == 1 && gameState.board.g6.w%2 == 1) return 3;
	if(gameState.board.g4.w > 0 && gameState.board.g5.w > 0 && gameState.board.g6.w > 0)
	if(gameState.board.g4.w%2 == 0 && gameState.board.g5.w%2 == 0 && gameState.board.g6.w%2 == 0) return 4;
	if(gameState.board.g7.w > 0 && gameState.board.g8.w > 0 && gameState.board.g9.w > 0)
	if(gameState.board.g7.w%2 == 1 && gameState.board.g8.w%2 == 1 && gameState.board.g9.w%2 == 1) return 5;
	if(gameState.board.g7.w > 0 && gameState.board.g8.w > 0 && gameState.board.g9.w > 0)
	if(gameState.board.g7.w%2 == 0 && gameState.board.g8.w%2 == 0 && gameState.board.g9.w%2 == 0) return 6;
	//vert
	if(gameState.board.g1.w > 0 && gameState.board.g4.w > 0 && gameState.board.g7.w > 0)
	if(gameState.board.g1.w%2 == 1 && gameState.board.g4.w%2 == 1 && gameState.board.g7.w%2 == 1) return 7;
	if(gameState.board.g1.w > 0 && gameState.board.g4.w > 0 && gameState.board.g7.w > 0)
	if(gameState.board.g1.w%2 == 0 && gameState.board.g4.w%2 == 0 && gameState.board.g7.w%2 == 0) return 8;
	if(gameState.board.g2.w > 0 && gameState.board.g5.w > 0 && gameState.board.g8.w > 0)
	if(gameState.board.g2.w%2 == 1 && gameState.board.g5.w%2 == 1 && gameState.board.g8.w%2 == 1) return 9;
	if(gameState.board.g2.w > 0 && gameState.board.g5.w > 0 && gameState.board.g8.w > 0)
	if(gameState.board.g2.w%2 == 0 && gameState.board.g5.w%2 == 0 && gameState.board.g8.w%2 == 0) return 10;
	if(gameState.board.g3.w > 0 && gameState.board.g6.w > 0 && gameState.board.g9.w > 0)
	if(gameState.board.g3.w%2 == 1 && gameState.board.g6.w%2 == 1 && gameState.board.g9.w%2 == 1) return 11;
	if(gameState.board.g3.w > 0 && gameState.board.g6.w > 0 && gameState.board.g9.w > 0)
	if(gameState.board.g3.w%2 == 0 && gameState.board.g6.w%2 == 0 && gameState.board.g9.w%2 == 0) return 12;	
	//diag
	if(gameState.board.g1.w > 0 && gameState.board.g5.w > 0 && gameState.board.g9.w > 0)
	if(gameState.board.g1.w%2 == 1 && gameState.board.g5.w%2 == 1 && gameState.board.g9.w%2 == 1) return 13;
	if(gameState.board.g1.w > 0 && gameState.board.g5.w > 0 && gameState.board.g9.w > 0)
	if(gameState.board.g1.w%2 == 0 && gameState.board.g5.w%2 == 0 && gameState.board.g9.w%2 == 0) return 14;
	if(gameState.board.g3.w > 0 && gameState.board.g5.w > 0 && gameState.board.g7.w > 0)
	if(gameState.board.g3.w%2 == 1 && gameState.board.g5.w%2 == 1 && gameState.board.g7.w%2 == 1) return 15;
	if(gameState.board.g3.w > 0 && gameState.board.g5.w > 0 && gameState.board.g7.w > 0)
	if(gameState.board.g3.w%2 == 0 && gameState.board.g5.w%2 == 0 && gameState.board.g7.w%2 == 0) return 16;

	//draw through a full game
	var full = 0;
	for (i = 1; i <= 9; i++) {
		if (isSubgameFullWgameState(gameState,String(i))) full++;
	}
	if(full == 9){
		return 17;
	}
	//not finished
	return 0;
}

function score(turn,gameState){
	isf = isFinishedWgameState(gameState);
	if (isf == 17) return 0;
	if (!isf) return 0;

  if (turn == 1){
 		if(isf%2 == 1) return 10;
 		if(isf%2 == 0) return -10;
  } else if (turn == 2){
 		if(isf%2 == 1) return -10;
 		if(isf%2 == 0) return 10;
  }

  return 0;
}

function getAvailableMoves(gameState){
	var availMoves = Array();
	targetSubgame = gameState.subgame;
	if (targetSubgame == 0 || isSubgameFullWgameState(gameState,String(targetSubgame))){
		for (i = 1; i <= 9; i++) {
			for (j = 1; j <= 9; j++) {
				if (gameState.board["g"+String(i)]["b"+String(j)] == 0) availMoves.push("g"+String(i)+"b"+String(j));
			}
		}
	} else {
		for (j = 1; j <= 9; j++) {
			if (gameState.board["g"+String(targetSubgame)]["b"+String(j)] == 0) availMoves.push("g"+String(targetSubgame)+"b"+String(j));
		}
	}
	return availMoves;
}


function isWinnerWgameState(gameState,subGame){
	gameID = "g"+subGame;
	if(gameState.board[gameID].w > 0) return gameState.board[gameID].w;
	//horiz
	if(gameState.board[gameID].b1 == 1 && gameState.board[gameID].b2 == 1 && gameState.board[gameID].b3 == 1) return 1;
	if(gameState.board[gameID].b1 == 2 && gameState.board[gameID].b2 == 2 && gameState.board[gameID].b3 == 2) return 2;
	if(gameState.board[gameID].b4 == 1 && gameState.board[gameID].b5 == 1 && gameState.board[gameID].b6 == 1) return 3;
	if(gameState.board[gameID].b4 == 2 && gameState.board[gameID].b5 == 2 && gameState.board[gameID].b6 == 2) return 4;
	if(gameState.board[gameID].b7 == 1 && gameState.board[gameID].b8 == 1 && gameState.board[gameID].b9 == 1) return 5;
	if(gameState.board[gameID].b7 == 2 && gameState.board[gameID].b8 == 2 && gameState.board[gameID].b9 == 2) return 6;

	//vert
	if(gameState.board[gameID].b1 == 1 && gameState.board[gameID].b4 == 1 && gameState.board[gameID].b7 == 1) return 7;
	if(gameState.board[gameID].b1 == 2 && gameState.board[gameID].b4 == 2 && gameState.board[gameID].b7 == 2) return 8;
	if(gameState.board[gameID].b2 == 1 && gameState.board[gameID].b5 == 1 && gameState.board[gameID].b8 == 1) return 9;
	if(gameState.board[gameID].b2 == 2 && gameState.board[gameID].b5 == 2 && gameState.board[gameID].b8 == 2) return 10;
	if(gameState.board[gameID].b3 == 1 && gameState.board[gameID].b6 == 1 && gameState.board[gameID].b9 == 1) return 11;
	if(gameState.board[gameID].b3 == 2 && gameState.board[gameID].b6 == 2 && gameState.board[gameID].b9 == 2) return 12;	

	//diag
	if(gameState.board[gameID].b1 == 1 && gameState.board[gameID].b5 == 1 && gameState.board[gameID].b9 == 1) return 13;
	if(gameState.board[gameID].b1 == 2 && gameState.board[gameID].b5 == 2 && gameState.board[gameID].b9 == 2) return 14;
	if(gameState.board[gameID].b3 == 1 && gameState.board[gameID].b5 == 1 && gameState.board[gameID].b7 == 1) return 15;
	if(gameState.board[gameID].b3 == 2 && gameState.board[gameID].b5 == 2 && gameState.board[gameID].b7 == 2) return 16;

	//no winners
	return 0;
}
function isSubgameFullWgameState(gameState,game){
	if(game == "0") return 0;
	for (j = 1; j <= 9; j++) {
		gameID = "g"+game;
		boxID  = "b"+String(j);
		if(gameState.board[gameID][boxID] == 0) return 0;
	}
	return 1;	
}


function makePossibleMove(gameState,moveID){
	g = moveID.charAt(1);
	b = moveID.charAt(3);
	gameStateNew = JSON.parse(JSON.stringify(gameState));
	//modify board
	gameID = "g"+g;
	boxID  = "b"+b;
	gameStateNew.board[gameID][boxID] = gameStateNew.turn;

	//check for subwinners
	isw = isWinnerWgameState(gameStateNew,g);
	if(isw) gameStateNew.board[gameID].w = isw;

	//switch turn
	if (gameStateNew.turn == 1){
		gameStateNew.turn = 2;
	} else if (gameStateNew.turn == 2){
		gameStateNew.turn = 1;
	}

	//check target subgame isnt full - if not set it as subgame
	if(isSubgameFullWgameState(gameStateNew,b)){
		gameStateNew.subgame = 0;
	} else {
		gameStateNew.subgame = b;
	}
	return gameStateNew;
}

var depth = 0;
function minimaxscores(turn,gameState){
	
	if(depth > 1000) {
		//console.log("Depth limit reached")
		if (gameState.turn == turn){
	  	return getNumberOfWinsScore(gameState,turn);
		} else {
			return -(getNumberOfWinsScore(gameState,turn));
		}
	} else {
		depth++;
	}

  if (isFinishedWgameState(gameState) > 0){
  	//console.log("game ends with score "+String(score(turn,gameState)));
  	return score(turn,gameState);
  }
  var scores = new Array();
  var moves = new Array();
  var availMoves = getAvailableMoves(gameState);
  shuffle(availMoves);
  for(var i=0; i<availMoves.length; i++){
		var possibleGame = makePossibleMove(gameState,availMoves[i]);
		var ns = minimaxscores(turn,possibleGame);
		scores.push(ns);
		moves.push(availMoves[i]);
		//if we find a 10 we can't do any better so let's break.
		if (gameState.turn == turn){
	    if(ns == 10) break;
		} else {
			if(ns == -10) break;
		}
  }
	if (gameState.turn == turn){
    maxScoreIndex = scores.indexOf(Math.max.apply(null,scores));
    return scores[maxScoreIndex];
	} else {
		minScoreIndex = scores.indexOf(Math.min.apply(null,scores));
    return scores[minScoreIndex];
	}
}


function minimax(turn,gameState){
  if (isFinishedWgameState(gameState) > 0) return score(turn,gameState); 
  var scores = new Array();
  var moves = new Array();
  availMoves = getAvailableMoves(gameState);
  shuffle(availMoves);
  for(var i=0; i<availMoves.length; i++){
		var possibleGame = makePossibleMove(gameState,availMoves[i]);
		depth = 0;
		scores.push(minimaxscores(turn,possibleGame));
		moves.push(availMoves[i]);
  }
  console.log(scores)
	if (gameState.turn == turn){
    maxScoreIndex = scores.indexOf(Math.max.apply(null,scores));
    choice = moves[maxScoreIndex];
    return choice;
	} else {
		minScoreIndex = scores.indexOf(Math.min.apply(null,scores));
    choice = moves[minScoreIndex];
    return choice;
	}
}