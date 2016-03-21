var bigGameState = {"type":"","turn":0,"subgame":0,
										"board":{"g1":{"b1":0,"b2":0,"b3":0,"b4":0,"b5":0,"b6":0,"b7":0,"b8":0,"b9":0,"w":0},
														"g2":{"b1":0,"b2":0,"b3":0,"b4":0,"b5":0,"b6":0,"b7":0,"b8":0,"b9":0,"w":0},
														"g3":{"b1":0,"b2":0,"b3":0,"b4":0,"b5":0,"b6":0,"b7":0,"b8":0,"b9":0,"w":0},
														"g4":{"b1":0,"b2":0,"b3":0,"b4":0,"b5":0,"b6":0,"b7":0,"b8":0,"b9":0,"w":0},
														"g5":{"b1":0,"b2":0,"b3":0,"b4":0,"b5":0,"b6":0,"b7":0,"b8":0,"b9":0,"w":0},
														"g6":{"b1":0,"b2":0,"b3":0,"b4":0,"b5":0,"b6":0,"b7":0,"b8":0,"b9":0,"w":0},
														"g7":{"b1":0,"b2":0,"b3":0,"b4":0,"b5":0,"b6":0,"b7":0,"b8":0,"b9":0,"w":0},
														"g8":{"b1":0,"b2":0,"b3":0,"b4":0,"b5":0,"b6":0,"b7":0,"b8":0,"b9":0,"w":0},
														"g9":{"b1":0,"b2":0,"b3":0,"b4":0,"b5":0,"b6":0,"b7":0,"b8":0,"b9":0,"w":0},
														}
									 };
//turn 0-no game, 1-x, 2-o
//subgame 0-any, 1-g1, 2-g2,...


function showCell(cell){
	if(bigGameState.turn == 1) {
		setCellX(cell);
	}
	if(bigGameState.turn == 2) {
		setCellO(cell);
	}
	cell.css('opacity',1);
}
function hideCell(cell){
	cell.css('opacity',0);
}
function showGhostonCell(cell){
	if(bigGameState.turn == 1) {
		setCellX(cell);
	}
	if(bigGameState.turn == 2) {
		setCellO(cell);
	}
	cell.css('opacity',0.2);
}
function setCellX(cell){
	cell.children().addClass("fa-times").addClass("red");
	cell.children().removeClass("fa-circle-o").removeClass("blue");
}
function setCellO(cell){
	cell.children().addClass("fa-circle-o").addClass("blue");
	cell.children().removeClass("fa-times").removeClass("red");
}


function isWinner(subGame){
	gameID = "g"+String(subGame);
	if(bigGameState.board[gameID].w > 0) return bigGameState.board[gameID].w;
	//horiz
	if(bigGameState.board[gameID].b1 == 1 && bigGameState.board[gameID].b2 == 1 && bigGameState.board[gameID].b3 == 1) return 1;
	if(bigGameState.board[gameID].b1 == 2 && bigGameState.board[gameID].b2 == 2 && bigGameState.board[gameID].b3 == 2) return 2;
	if(bigGameState.board[gameID].b4 == 1 && bigGameState.board[gameID].b5 == 1 && bigGameState.board[gameID].b6 == 1) return 3;
	if(bigGameState.board[gameID].b4 == 2 && bigGameState.board[gameID].b5 == 2 && bigGameState.board[gameID].b6 == 2) return 4;
	if(bigGameState.board[gameID].b7 == 1 && bigGameState.board[gameID].b8 == 1 && bigGameState.board[gameID].b9 == 1) return 5;
	if(bigGameState.board[gameID].b7 == 2 && bigGameState.board[gameID].b8 == 2 && bigGameState.board[gameID].b9 == 2) return 6;

	//vert
	if(bigGameState.board[gameID].b1 == 1 && bigGameState.board[gameID].b4 == 1 && bigGameState.board[gameID].b7 == 1) return 7;
	if(bigGameState.board[gameID].b1 == 2 && bigGameState.board[gameID].b4 == 2 && bigGameState.board[gameID].b7 == 2) return 8;
	if(bigGameState.board[gameID].b2 == 1 && bigGameState.board[gameID].b5 == 1 && bigGameState.board[gameID].b8 == 1) return 9;
	if(bigGameState.board[gameID].b2 == 2 && bigGameState.board[gameID].b5 == 2 && bigGameState.board[gameID].b8 == 2) return 10;
	if(bigGameState.board[gameID].b3 == 1 && bigGameState.board[gameID].b6 == 1 && bigGameState.board[gameID].b9 == 1) return 11;
	if(bigGameState.board[gameID].b3 == 2 && bigGameState.board[gameID].b6 == 2 && bigGameState.board[gameID].b9 == 2) return 12;	

	//diag
	if(bigGameState.board[gameID].b1 == 1 && bigGameState.board[gameID].b5 == 1 && bigGameState.board[gameID].b9 == 1) return 13;
	if(bigGameState.board[gameID].b1 == 2 && bigGameState.board[gameID].b5 == 2 && bigGameState.board[gameID].b9 == 2) return 14;
	if(bigGameState.board[gameID].b3 == 1 && bigGameState.board[gameID].b5 == 1 && bigGameState.board[gameID].b7 == 1) return 15;
	if(bigGameState.board[gameID].b3 == 2 && bigGameState.board[gameID].b5 == 2 && bigGameState.board[gameID].b7 == 2) return 16;

	//no winners
	return 0;
}

function isFinished(){

	//horiz
	if(bigGameState.board.g1.w > 0 && bigGameState.board.g2.w > 0 && bigGameState.board.g3.w > 0)
	if(bigGameState.board.g1.w%2 == 1 && bigGameState.board.g2.w%2 == 1 && bigGameState.board.g3.w%2 == 1) return 1;
	if(bigGameState.board.g1.w > 0 && bigGameState.board.g2.w > 0 && bigGameState.board.g3.w > 0)
	if(bigGameState.board.g1.w%2 == 0 && bigGameState.board.g2.w%2 == 0 && bigGameState.board.g3.w%2 == 0) return 2;
	if(bigGameState.board.g4.w > 0 && bigGameState.board.g5.w > 0 && bigGameState.board.g6.w > 0)
	if(bigGameState.board.g4.w%2 == 1 && bigGameState.board.g5.w%2 == 1 && bigGameState.board.g6.w%2 == 1) return 3;
	if(bigGameState.board.g4.w > 0 && bigGameState.board.g5.w > 0 && bigGameState.board.g6.w > 0)
	if(bigGameState.board.g4.w%2 == 0 && bigGameState.board.g5.w%2 == 0 && bigGameState.board.g6.w%2 == 0) return 4;
	if(bigGameState.board.g7.w > 0 && bigGameState.board.g8.w > 0 && bigGameState.board.g9.w > 0)
	if(bigGameState.board.g7.w%2 == 1 && bigGameState.board.g8.w%2 == 1 && bigGameState.board.g9.w%2 == 1) return 5;
	if(bigGameState.board.g7.w > 0 && bigGameState.board.g8.w > 0 && bigGameState.board.g9.w > 0)
	if(bigGameState.board.g7.w%2 == 0 && bigGameState.board.g8.w%2 == 0 && bigGameState.board.g9.w%2 == 0) return 6;

	
	//vert
	if(bigGameState.board.g1.w > 0 && bigGameState.board.g4.w > 0 && bigGameState.board.g7.w > 0)
	if(bigGameState.board.g1.w%2 == 1 && bigGameState.board.g4.w%2 == 1 && bigGameState.board.g7.w%2 == 1) return 7;
	if(bigGameState.board.g1.w > 0 && bigGameState.board.g4.w > 0 && bigGameState.board.g7.w > 0)
	if(bigGameState.board.g1.w%2 == 0 && bigGameState.board.g4.w%2 == 0 && bigGameState.board.g7.w%2 == 0) return 8;
	if(bigGameState.board.g2.w > 0 && bigGameState.board.g5.w > 0 && bigGameState.board.g8.w > 0)
	if(bigGameState.board.g2.w%2 == 1 && bigGameState.board.g5.w%2 == 1 && bigGameState.board.g8.w%2 == 1) return 9;
	if(bigGameState.board.g2.w > 0 && bigGameState.board.g5.w > 0 && bigGameState.board.g8.w > 0)
	if(bigGameState.board.g2.w%2 == 0 && bigGameState.board.g5.w%2 == 0 && bigGameState.board.g8.w%2 == 0) return 10;
	if(bigGameState.board.g3.w > 0 && bigGameState.board.g6.w > 0 && bigGameState.board.g9.w > 0)
	if(bigGameState.board.g3.w%2 == 1 && bigGameState.board.g6.w%2 == 1 && bigGameState.board.g9.w%2 == 1) return 11;
	if(bigGameState.board.g3.w > 0 && bigGameState.board.g6.w > 0 && bigGameState.board.g9.w > 0)
	if(bigGameState.board.g3.w%2 == 0 && bigGameState.board.g6.w%2 == 0 && bigGameState.board.g9.w%2 == 0) return 12;	

	
	//diag
	if(bigGameState.board.g1.w > 0 && bigGameState.board.g5.w > 0 && bigGameState.board.g9.w > 0)
	if(bigGameState.board.g1.w%2 == 1 && bigGameState.board.g5.w%2 == 1 && bigGameState.board.g9.w%2 == 1) return 13;
	if(bigGameState.board.g1.w > 0 && bigGameState.board.g5.w > 0 && bigGameState.board.g9.w > 0)
	if(bigGameState.board.g1.w%2 == 0 && bigGameState.board.g5.w%2 == 0 && bigGameState.board.g9.w%2 == 0) return 14;
	if(bigGameState.board.g3.w > 0 && bigGameState.board.g5.w > 0 && bigGameState.board.g7.w > 0)
	if(bigGameState.board.g3.w%2 == 1 && bigGameState.board.g5.w%2 == 1 && bigGameState.board.g7.w%2 == 1) return 15;
	if(bigGameState.board.g3.w > 0 && bigGameState.board.g5.w > 0 && bigGameState.board.g7.w > 0)
	if(bigGameState.board.g3.w%2 == 0 && bigGameState.board.g5.w%2 == 0 && bigGameState.board.g7.w%2 == 0) return 16;

	//draw through a full game
	full = 0;
	for (i = 1; i <= 9; i++) {
		if (isSubgameFull(i)) full++;
	}
	if(full == 9) return 17;
	//no winners
	return 0;
}

function drawWinner(subGame,winType){
	gameID = "g"+String(subGame);
	switch(winType){
		case 1:
			$('#'+gameID+"b1").css('background-color','#FFE0E0');
			$('#'+gameID+"b2").css('background-color','#FFE0E0');
			$('#'+gameID+"b3").css('background-color','#FFE0E0');
			break;
		case 2:
			$('#'+gameID+"b1").css('background-color','#E0E0FF');
			$('#'+gameID+"b2").css('background-color','#E0E0FF');
			$('#'+gameID+"b3").css('background-color','#E0E0FF');
			break;
		case 3:
			$('#'+gameID+"b4").css('background-color','#FFE0E0');
			$('#'+gameID+"b5").css('background-color','#FFE0E0');
			$('#'+gameID+"b6").css('background-color','#FFE0E0');
			break;
		case 4:
			$('#'+gameID+"b4").css('background-color','#E0E0FF');
			$('#'+gameID+"b5").css('background-color','#E0E0FF');
			$('#'+gameID+"b6").css('background-color','#E0E0FF');
			break;
		case 5:
			$('#'+gameID+"b7").css('background-color','#FFE0E0');
			$('#'+gameID+"b8").css('background-color','#FFE0E0');
			$('#'+gameID+"b9").css('background-color','#FFE0E0');
			break;
		case 6:
			$('#'+gameID+"b7").css('background-color','#E0E0FF');
			$('#'+gameID+"b8").css('background-color','#E0E0FF');
			$('#'+gameID+"b9").css('background-color','#E0E0FF');
			break;
		case 7:
			$('#'+gameID+"b1").css('background-color','#FFE0E0');
			$('#'+gameID+"b4").css('background-color','#FFE0E0');
			$('#'+gameID+"b7").css('background-color','#FFE0E0');
			break;
		case 8:
			$('#'+gameID+"b1").css('background-color','#E0E0FF');
			$('#'+gameID+"b4").css('background-color','#E0E0FF');
			$('#'+gameID+"b7").css('background-color','#E0E0FF');
			break;
		case 9:
			$('#'+gameID+"b2").css('background-color','#FFE0E0');
			$('#'+gameID+"b5").css('background-color','#FFE0E0');
			$('#'+gameID+"b8").css('background-color','#FFE0E0');
			break;
		case 10:
			$('#'+gameID+"b2").css('background-color','#E0E0FF');
			$('#'+gameID+"b5").css('background-color','#E0E0FF');
			$('#'+gameID+"b8").css('background-color','#E0E0FF');
			break;
		case 11:
			$('#'+gameID+"b3").css('background-color','#FFE0E0');
			$('#'+gameID+"b6").css('background-color','#FFE0E0');
			$('#'+gameID+"b9").css('background-color','#FFE0E0');
			break;
		case 12:
			$('#'+gameID+"b3").css('background-color','#E0E0FF');
			$('#'+gameID+"b6").css('background-color','#E0E0FF');
			$('#'+gameID+"b9").css('background-color','#E0E0FF');
			break;
		case 13:
			$('#'+gameID+"b1").css('background-color','#FFE0E0');
			$('#'+gameID+"b5").css('background-color','#FFE0E0');
			$('#'+gameID+"b9").css('background-color','#FFE0E0');
			break;
		case 14:
			$('#'+gameID+"b1").css('background-color','#E0E0FF');
			$('#'+gameID+"b5").css('background-color','#E0E0FF');
			$('#'+gameID+"b9").css('background-color','#E0E0FF');
			break;
		case 15:
			$('#'+gameID+"b3").css('background-color','#FFE0E0');
			$('#'+gameID+"b5").css('background-color','#FFE0E0');
			$('#'+gameID+"b7").css('background-color','#FFE0E0');
			break;
		case 16:
			$('#'+gameID+"b3").css('background-color','#E0E0FF');
			$('#'+gameID+"b5").css('background-color','#E0E0FF');
			$('#'+gameID+"b7").css('background-color','#E0E0FF');
			break;
	}
}


function displayBoard(){
	for (i = 1; i <= 9; i++) {
		for (j = 1; j <= 9; j++) {
			gameID = "g"+String(i);
			boxID  = "b"+String(j);
			cell = $('#'+gameID+boxID);
			if(bigGameState.board[gameID][boxID] == 0){
				hideCell(cell);
			} else {
				showCell(cell);
			}
			if(bigGameState.board[gameID][boxID] == 1){
				setCellX(cell);
			}
			if(bigGameState.board[gameID][boxID] == 2){
				setCellO(cell);
			}
			
		}
	}
}


function isSubgameFull(game){
	if(game == 0) return 1;
	for (j = 1; j <= 9; j++) {
		gameID = "g"+game;
		boxID  = "b"+String(j);
		if(bigGameState.board[gameID][boxID] == 0) return 0;
	}
	return 1;	
}

function playinCell2P(cell){
	g = cell.attr('id').charAt(1);
	b = cell.attr('id').charAt(3)
	//modify board
	gameID = "g"+g;
	boxID  = "b"+b;
	bigGameState.board[gameID][boxID] = bigGameState.turn;

	//update cell
	showCell(cell);

	//check for subwinners
	isw = isWinner(g);
	if(isw){
		bigGameState.board[gameID].w = isw;
		drawWinner(g,isw);
	}

	//switch turn
	if (bigGameState.turn == 1){
		bigGameState.turn = 2;
	} else if (bigGameState.turn == 2){
		bigGameState.turn = 1;
	}

	//check if current subgame if full
	if(isSubgameFull(g)){
		$('#g'+g).css('background-color','#EFEFEF');
	} else {
		$('#g'+g).css('background-color','#FFFFFF');
	}

	//check target subgame isnt full - if not set it as subgame
	
	if(isSubgameFull(b)){
		bigGameState.subgame = 0;
	} else {
		$('#g'+b).css('background-color','#E0FFE0');
		bigGameState.subgame = b;
	}
	
	//update board
	//displayBoard();

}

function playinCell1P(cell){
	//place human move
	playinCell2P(cell);


	//DO AI STUFF - place computer move
	/*
	iters = 0
	//randomness
	targetSubgame = bigGameState.subgame;
	if(targetSubgame == 0){
		targetSubgame = Math.floor(Math.random()*9) + 1;
		while(isSubgameFull(targetSubgame) && iters < 1000){
			targetSubgame = Math.floor(Math.random()*9) + 1;
			iters++;
		}
	}
	gameID = "g"+ String(targetSubgame);
	boxID  = "b"+ String(Math.floor(Math.random()*9) + 1);
	//make sure random is empty
	while(bigGameState.board[gameID][boxID] > 0 && iters < 1000) {
		boxID  = "b"+ String(Math.floor(Math.random()*9) + 1);
		iters++;
	}
	cellAI = $('#'+gameID+boxID);
	playinCell2P(cellAI);
	*/

	idf = isFinished();
	if(idf){
		//console.log(idf)
		bigGameState.turn = 0;
		hideSmallGames();
	}

	moveID = minimax(bigGameState.turn,bigGameState);
	if(String(moveID).charAt(0) == 'g'){
		g = moveID.charAt(1);
		b = moveID.charAt(3);
		gameID = "g"+g;
		boxID  = "b"+b;
		cellAI = $('#'+gameID+boxID);
		playinCell2P(cellAI);
	}

}

function hideSmallGames(){
	for (i = 1; i <= 9; i++) {
		$("#g"+String(i)).css("display","none");
		bigsign = $("#f"+String(i));
		bigsign.css("display","inline");
		if(bigGameState.board["g"+String(i)].w == 0){
				bigsign.children().removeClass("fa-circle-o").removeClass("blue");
				bigsign.children().removeClass("fa-times").removeClass("red");
				bigsign.children().addClass("fa-square").addClass("clear");
		} else if (bigGameState.board["g"+String(i)].w%2 == 1){
				bigsign.children().removeClass("fa-circle-o").removeClass("blue");
				bigsign.children().removeClass("fa-times").removeClass("red");
				bigsign.children().addClass("fa-times").addClass("red");
		} else if (bigGameState.board["g"+String(i)].w%2 == 0){
				bigsign.children().removeClass("fa-circle-o").removeClass("blue");
				bigsign.children().removeClass("fa-times").removeClass("red");
				bigsign.children().addClass("fa-circle-o").addClass("blue");
		}
	}
}

function handleMouseOnInnerCell(cell){
	//check game is on
	if(bigGameState.turn == 0) return;

	//check box isn't filled already
	gameID = "g"+cell.attr('id').charAt(1);
	boxID  = "b"+cell.attr('id').charAt(3);
	if(bigGameState.board[gameID][boxID] > 0) return;

	//should show ghost symbol?
	if(bigGameState.subgame == 0){
		showGhostonCell(cell);
	} else {
		if(cell.attr('id').charAt(1) == bigGameState.subgame) showGhostonCell(cell);
	}
}


function handleMouseOffInnerCell(cell){
	//check game is on
	if(window.bigGameState.turn == 0) return;

	//check box isn't filled already
	gameID = "g"+cell.attr('id').charAt(1);
	boxID  = "b"+cell.attr('id').charAt(3);
	if(bigGameState.board[gameID][boxID] > 0) return;

	hideCell(cell)
}

function handleMouseDownInnerCell(cell){
	//check game is on
	if(bigGameState.turn == 0) return;

	//check box isn't filled already
	gameID = "g"+cell.attr('id').charAt(1);
	boxID  = "b"+cell.attr('id').charAt(3);
	if(bigGameState.board[gameID][boxID] > 0) return;

	//check type of game!

	if(bigGameState.type == "2P"){
		//should play symbol?
		if(bigGameState.subgame == 0){
			playinCell2P(cell);
		} else {
			if(cell.attr('id').charAt(1) == bigGameState.subgame) playinCell2P(cell);
		}
	} else if(bigGameState.type == "1P"){
		//should play symbol?
		if(bigGameState.subgame == 0){
			playinCell1P(cell);
		} else {
			if(cell.attr('id').charAt(1) == bigGameState.subgame) playinCell1P(cell);
		}
	}
	
	//check if the game is over
	idf = isFinished();
	if(idf){
		//console.log(idf)
		bigGameState.turn = 0;
		hideSmallGames();
	}

}


$(document).ready(function()
{
	$('.inner-cell').hover(function() {
	    handleMouseOnInnerCell($(this));
	},function() {
	    handleMouseOffInnerCell($(this));
	});

	$('.inner-cell').on('mousedown', function() {
		handleMouseDownInnerCell($(this));
	});

	$('#go2P').on('mousedown', function() {
		bigGameState.type = "2P";
		bigGameState.turn = 1;
		$("#startscreen").css("display","none");
		$("#gamescreen").css("display","inline");
	});

	$('#go1P').on('mousedown', function() {
		bigGameState.type = "1P";
		bigGameState.turn = 1;
		$("#startscreen").css("display","none");
		$("#gamescreen").css("display","inline");
	});

	displayBoard();
});

