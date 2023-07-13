var quote = document.getElementById("quote");
var btn = document.getElementById("btn");
var quotes = [
  `“Be yourself; everyone else is already taken.” <br>― Oscar Wilde`,
  `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” <br> ― Marilyn Monroe`,
  `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” <br> ― Albert Einstein`,
  `“So many books, so little time.” <br> ― Frank Zappa`,
  `“A room without books is like a body without a soul.” <br> ― Marcus Tullius Cicero`,
  `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” <br> ― Bernard M. Baruch`,
  `“You've gotta dance like there's nobody watching, <br> Love like you'll never be hurt, <br> Sing like there's nobody listening, <br> And live like it's heaven on earth.”<br> ― William W. Purkey`,
];

let random = 0;
let lastRandom = 0;
//! with do while 
btn.onclick = function () {
  do {
    random = Math.floor(Math.random() * quotes.length);
    console.log(random);
  } while (random == lastRandom);
  lastRandom = random;
  quote.innerHTML = quotes[random];
};
//! with for 
btn.onclick = function () {
  for (var i = 0; random === lastRandom; true) {
    random = Math.floor(Math.random() * quotes.length);
    console.log(random);
  }
  lastRandom = random;
  quote.innerHTML = quotes[random];
};
