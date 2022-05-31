function random() {
	let red = Math.floor(Math.random() * 256);
	let green = Math.floor(Math.random() * 256);
	let blue = Math.floor(Math.random() * 256);
	let color = `rgb(${red}, ${green}, ${blue})`;
	return color;
}

function randomColor(element) {
	document.getElementById(element).style.backgroundColor = random();
}

function defaultColor(element) {
	document.getElementById(element).style.backgroundColor = "inherit";
}

function setColor(element) {
	document.getElementById(element).style.backgroundColor = document.getElementById("color").value;
}

function setRectangle() {
	let elements = document.querySelectorAll(".spacer");

	for (let a = 0; a < elements.length; a++) {
		if (elements[a].innerHTML % 6 == 0) {
			elements[a].style.backgroundColor = document.getElementById("color").value;
		}
	}
}
