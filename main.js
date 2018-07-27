const INCREMENT_STEP = 12;
const INCREMENT_LIMIT = 1000;

function addByTwelve () {
	let currentInteger = 0;
	while (currentInteger < INCREMENT_LIMIT) {
		console.log(currentInteger);
		currentInteger += INCREMENT_STEP
		currentInteger ++
	}
}

window.addByTwelve = addByTwelve