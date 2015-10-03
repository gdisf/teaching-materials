function moveRight(){
	player.x += 1;
	checkWin();
}

function moveLeft(){
	player.x -= 1;
	checkWin();
}

function moveDown(){
	player.y += 1;
	checkWin();
}

function moveUp(){
	player.y -= 1;
	checkWin();
}

function checkWin(){
	return player.x == goal.x && player.y == goal.y;
}