var el = document.getElementById("weekOutput");

var http = new XMLHttpRequest();
	http.open("POST","process.php",false);
	http.send();

var o = http.responseText;

var output = document.createTextNode(o);
	el.appendChild(output);

function reset(){

	// send a reset flag
	// grab new val

	var http = new XMLHttpRequest();
	http.open("POST","process.php",false);
	http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	http.send("reset=true");

	var o = http.responseText;
	el.innerHTML = "";

	var output = document.createTextNode(o);
	el.appendChild(output);

}

