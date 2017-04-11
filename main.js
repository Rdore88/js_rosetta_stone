// Solve your homework here.

document.getElementById('title').style.backgroundcolor = 'rebeccapurple';

var greeting = 'Hello World!';
console.log(greeting);

let dog = 'moose';

let salary = 500;

console.log(dog + ' makes $' + salary);

let movies = ['Saving Private Ryan', 'Harry Poter', 'Star Wars']
console.log(movies);

let sentence = "Schlitz four dollar toast godard truffaut bespoke neutra artisan pop-up. Chia keytar single-origin coffee sustainable disrupt.";

let arraySentence = sentence.split(" ")

let sentenceAnswer;

sentenceAnswer = arraySentence.filter(function(word) {
  if (word.length == 6) {
    return word
  }
});
console.log(sentenceAnswer);

let moviesUnderOneHundred = []
moviesUnderOneHundred.push({
  title: 'The Blair Witch Project',
  budget: 1,
  stars: ['Heather Donahue']
});
moviesUnderOneHundred.push({
  title: 'Star Wars: a New Hope',
  budget: 11,
  stars: ['Mark Hamill', 'Carrie Fisher', 'Harrison Ford']
});

let moviesWithLeonardDiCaprio = [];
moviesWithLeonardDiCaprio.push({
  title: 'The Revenant',
  budget: 135,
  stars: ['Leonardo DiCaprio', 'Tom Hardy', 'Domhnall Gleeson']
});
moviesWithLeonardDiCaprio.push({
  title: 'Shutter Island',
  budget: 80,
  stars: ['Leonardo DiCaprio', 'Mark Ruffalo', 'Ben Kingsley', 'Emily Mortimer']
});
moviesWithLeonardDiCaprio.push({
  title: 'Gangs of New York',
  budget: 100,
  stars: ['Leonardo DiCaprio', 'Daniel Day-Lewis', 'Cameron Diaz']
});

console.log(moviesUnderOneHundred);
console.log(moviesWithLeonardDiCaprio);
