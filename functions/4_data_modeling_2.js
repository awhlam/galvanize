function countAllCharacters(string) {
	let characterCounts = {};
	for (let i = 0; i < string.length; i++) {
		let currentChar = string[i];
		if (currentChar === '') {
			break;
		} else if (characterCounts[currentChar] === undefined) {
			characterCounts[currentChar] = 1;
		} else {
			characterCounts[currentChar]++;
		}
	}
	return characterCounts;
}

let result1 = countAllCharacters('banana');
console.log('should log "{b: 1, a: 3, n: 2}":', result1);

let result2 = countAllCharacters('');
console.log('should log "{}":', result2);
