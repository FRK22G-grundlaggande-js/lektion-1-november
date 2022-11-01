let words = ['banan', 'äppelpaj', 'skruvmejsel', 'potatismos', 'korvkiosk'];
const bodyElem = document.querySelector('body');
const wrongGuesses = [];

// Random ord från array med ord
let selectedWord = words[Math.floor(Math.random() * words.length)];
const letters = selectedWord.split(''); // Splittar ordet till en array med bokstäver för att enklare kunna jämföra
console.log(selectedWord);


bodyElem.addEventListener('keydown', (event) => {
    const keyPressed = event.key;
    let correctGuess = false;

    for(let i = 0; i < letters.length; i++) {
        if (keyPressed === letters[i]) {
            console.log('Rätt bokstav');
            correctGuess = true;

            // Vad ska vi göra här?
        }
    }

    if (correctGuess === false) {
        console.log('Fel gissning');
        wrongGuesses.push(keyPressed);
    }
});