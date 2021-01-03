function countWords(stringOfWords) {
	let words = stringOfWords.split(' ');
	let wordCounts = {};
	for (let i = 0; i < words.length; i++) {
		let currentWord = words[i];
		if (currentWord === '') {
			break;
		} else if (wordCounts[currentWord] === undefined) {
			wordCounts[currentWord] = 1;
		} else {
			wordCounts[currentWord]++;
		}
	}
	return wordCounts;
}

let result1 = countWords('ask a bunch get a bunch');
console.log('should log "{ask: 1, a: 2, bunch: 2, get: 1}":', result1);

let result2 = countWords('');
console.log('should log "{}":', result2);
