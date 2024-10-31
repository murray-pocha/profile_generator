const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  "What's your name? Nicknames are also acceptable :) ?",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favorite? breakfast, lunch, dinner? ",
  "What's your favorite thing to eat for that meal? ",
  "Which sport is your absolute favorite? ",
  "What is your superpower? In a few words, tell us what your amazing at!"
];

const answers = [];

const askQuestion = (index) => {
  if (index === questions.length) {

    const paragraph = `I would like to introduce ${answers[0]}, their favorite activity is ${answers[1]}. They enjoy listening to ${answers[2]}. You can't blame them for having ${answers[3]} as their favorite meal of the day, especially being that it is ${answers[4]}! Nothing like ${answers[5]} to burn off that favorite meal 😉. ${answers[0]}'s superpower is ${answers[6]}! `;

    console.log("\n" + paragraph);
    rl.close();
  } else {
    rl.question(questions[index], (answer) => {
      answers.push(answer);
      askQuestion(index + 1);
    });
  }
};

askQuestion(0);