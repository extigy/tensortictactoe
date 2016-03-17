var bigGameState = {"turn":1,"subgame":0,
										"board":{"g1":{"b1":0,"b2":0,"b3":0,"b4":0,"b5":0,"b6":0,"b7":0,"b8":0,"b9":0},
														"g2":{"b1":0,"b2":0,"b3":0,"b4":0,"b5":0,"b6":0,"b7":0,"b8":0,"b9":0},
														"g3":{"b1":0,"b2":0,"b3":0,"b4":0,"b5":0,"b6":0,"b7":0,"b8":0,"b9":0},
														"g4":{"b1":0,"b2":0,"b3":0,"b4":0,"b5":0,"b6":0,"b7":0,"b8":0,"b9":0},
														"g5":{"b1":0,"b2":0,"b3":0,"b4":0,"b5":0,"b6":0,"b7":0,"b8":0,"b9":0},
														"g6":{"b1":0,"b2":0,"b3":0,"b4":0,"b5":0,"b6":0,"b7":0,"b8":0,"b9":0},
														"g7":{"b1":0,"b2":0,"b3":0,"b4":0,"b5":0,"b6":0,"b7":0,"b8":0,"b9":0},
														"g8":{"b1":0,"b2":0,"b3":0,"b4":0,"b5":0,"b6":0,"b7":0,"b8":0,"b9":0},
														"g9":{"b1":0,"b2":0,"b3":0,"b4":0,"b5":0,"b6":0,"b7":0,"b8":0,"b9":0},
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

function isSubgameFull(game){
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

	//switch turn
	if (bigGameState.turn == 1){
		bigGameState.turn = 2;
	} else if (bigGameState.turn == 2){
		bigGameState.turn = 1;
	}

	//check target subgame isnt full - if not set it as subgame
	$('#g'+g).css('background-color','#FFFFFF');
	if(isSubgameFull(b)){
		bigGameState.subgame = 0;
	} else {
		$('#g'+b).css('background-color','#E0FFE0');
		bigGameState.subgame = b;
	}
	
	//update board
	//displayBoard();

}

function handleMouseDownInnerCell(cell){
	//check game is on
	if(bigGameState.turn == 0) return;

	//check box isn't filled already
	gameID = "g"+cell.attr('id').charAt(1);
	boxID  = "b"+cell.attr('id').charAt(3);
	if(bigGameState.board[gameID][boxID] > 0) return;

	//should play symbol?
	if(bigGameState.subgame == 0){
		playinCell2P(cell);
	} else {
		if(cell.attr('id').charAt(1) == bigGameState.subgame) playinCell2P(cell);
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

	displayBoard();
});

