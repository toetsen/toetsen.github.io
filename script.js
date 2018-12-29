var text = [];
var intervals = [];
var timer = ".";
var count = 0;
var wait = false;
var time = 0;

document.onkeydown = checkKeyDown;

function input(){
	if(wait == false){
		var d = new Date();
		var n = d.getTime();
		intervals.push(n - timer);
		timer = n;
		text.push(document.getElementById("textbox").value);
	}
	else{
		document.getElementById("textbox").value = "";
	}
}

function checkKeyDown(e) {
	if(e.keyCode == "13"){
		if(text.length>0){
			wait = true;

			for(var i = 1; i<intervals.length;i++){
				time += intervals[i]/1000;
			}

			document.getElementById("textbox").style.display = "none";
			document.getElementById("info").style.display = "block";
			document.getElementById("info").innerHTML += "Je hebt " + document.getElementById("textbox").value.length + " karakters getypt in " + time.toFixed(3) +  " seconden, dat is gemiddeld " + (document.getElementById("textbox").value.length/time).toFixed(3) + " characters per seconde.";
			document.getElementById("textbox").value = "";
			setTimeout(type, intervals[count]);
		}
	}
}

function type(){
	if(count>0 && text[count-1].length != 0){document.getElementById("div").innerHTML = document.getElementById("div").innerHTML.slice(0, -text[count-1].length);}
	document.getElementById("div").innerHTML += text[count];
	count++;
	if(count<text.length){
		setTimeout(type, intervals[count]);
	}
}

function end(){
	wait = false;
	document.getElementById("textbox").style.display = "block";
	document.getElementById("info").style.display = "none";
	document.getElementById("info").innerHTML = "";
	text = [];
	intervals = [];
	timer = ".";
	count = 0;
	time = 0;
	document.getElementById("div").innerHTML += "<br><br>";
}