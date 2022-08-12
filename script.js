var audio = new Audio('2_5197604572184447244.mp3');

document.body.onload = function(){
	audio.play();
}

document.body.onclick = function(){
	audio.resume();
	audio.play();
}
