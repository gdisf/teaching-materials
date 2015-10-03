function moveRight(){
	player.x += 1;
}

function moveLeft(){
	player.x -= 1;
}

function moveDown(){
	player.y += 1;
}

function moveUp(){
	player.y -= 1;
}

function checkWin(){
	if (player.x == goal.x && player.y == goal.y){
		renderWin();
	}
}