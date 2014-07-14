window.onload= function(event){

	var A1 = document.getElementById("A1"),
		A2 = document.getElementById("A2"),
		A3 = document.getElementById("A3"),
		B1 = document.getElementById("B1"),
		B2 = document.getElementById("B2"),
		B3 = document.getElementById("B3"),
		C1 = document.getElementById("C1"),
		C2 = document.getElementById("C2"),
		C3 = document.getElementById("C3"),
		reset = document.getElementById("reset"),
		statusTag = document.getElementById("gameStatus");
	

	var gameStatus = [[" "," "," "],[" "," "," ",],[" "," "," "]];
	var firstMove = "O";
	var gameOver = false;
	var count = 0;
	var checkTie = function () {
		if (count >= 9 && gameOver === false){
			statusTag.innerHTML = "It's a Tie!";
		}
	}
                      

	//clicking on buttons to show mark and reset
	var boxClick = function(box, row, col)	{
		if(box.innerHTML === " " && gameOver === false){
			if (firstMove === "O"){
				box.innerHTML = "X";
				firstMove = "X";
				gameStatus[row][col] = "X";
				count++;
			}
			else {
				box.innerHTML = "O";
				firstMove = "O";
				gameStatus[row][col] = "O";
				count++;
			}
		}
	
	gamePhase();
	console.log(count);
	checkTie();
	}

	A1.onclick = function() {
		boxClick(this,0,0);
	}
	A2.onclick = function() {
		boxClick(this,0,1);
	}
	A3.onclick = function() {
		boxClick(this,0,2);
	}
	B1.onclick = function() {
		boxClick(this,1,0);
	}
	B2.onclick = function() {
		boxClick(this,1,1);
	}
	B3.onclick = function() {
		boxClick(this,1,2);
	}
	C1.onclick = function() {
		boxClick(this,2,0);
	}
	C2.onclick = function() {
		boxClick(this,2,1);
	}
	C3.onclick = function() {
		boxClick(this,2,2);
	}

	reset.onclick = function (){
		firstMove = "O"
		gameStatus = [[" "," "," "],[" "," "," ",],[" "," "," "]];
		gameOver = false;
		count = 0;
		A1.innerHTML = " ";
		A2.innerHTML = " ";
		A3.innerHTML = " ";
		B1.innerHTML = " ";
		B2.innerHTML = " ";
		B3.innerHTML = " ";
		C1.innerHTML = " ";
		C2.innerHTML = " ";
		C3.innerHTML = " ";
		statusTag.innerHTML = " ";
	}





}