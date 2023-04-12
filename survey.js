const readline = require('readline');

let x = 0;

//question prompts
const prompts = {
  0: `What's your name? Nicknames are also acceptable :)`,
  1: `What's an activity you like doing?`,
  2: `What do you listen to while doing that?`,
  3: `Which meal is your favourite (eg: dinner, brunch, etc.)`,
  4: `What's your favourite thing to eat for that meal?`,
  5: `Which sport is your absolute favourite?`,
  6: `What is your superpower? In a few words, tell us what you are amazing at!`
};

const answers = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: ""
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profilePrompts = function () {
  if (i < 7) { // 7 is object length, will end 
    rl.question(`${prompts[i]} \n`, (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      answers[i] = answer; 
      i++; // increment 
      console.log(); //save answer hopefully
      profilePrompts(); //callback to answer another question
    });
  }
  rl.close();
  console.log("Profile Created!");
  console.log("============");
  console.log(`Name: ${answers[0]} \n`);
  console.log(`Favourite activity: ${answers[1]} \n`);
  console.log(`Favourite music: ${answers[2]} \n`);
  console.log(`Favourite meal: ${answers[3]} \n`);
  console.log(`Favourite meal item: ${answers[4]} \n`);
  console.log(`Favourite sport: ${answers[5]} \n`);
  console.log(`Superpower: ${answers[6]} \n`);
}

profilePrompts();
