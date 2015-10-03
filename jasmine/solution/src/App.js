var player = {
	x: 0,
	y: 0
}

var goal = {
	x: 10,
	y: 0
}

function render(){
	$('#player').css({
		left: player.x * 30,
		top: player.y * 30
	});

	$('#player .coordinates').text(player.x + ',' + player.y);
};

function renderWin(){
	window.alert("Congratulations! You Win!");
}

$(document).ready(function(){
	$('#goal').css({
		left: goal.x * 30,
		top: goal.y * 30
	});

	$(document).keyup(function(e){

		switch(e.keyCode){
			case (38):
				moveUp();
				break;
			case (39):
				moveRight();
				break;
			case (37):
				moveLeft();
				break;
			case (40):
				moveDown();
				break;
			default:
				break;
		}

		render();
		checkWin();
	});
});