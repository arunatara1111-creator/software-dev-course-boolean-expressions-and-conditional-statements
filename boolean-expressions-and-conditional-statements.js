/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');
const hasSword=true;
const hasCompass=true;
const hasTorch = true;
const hasMap = false;
const health=true;//health is true means it is in good condition
let cave=true;
let river=true;
console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch && health) {
   if(hasSword && hasCompass)
    console.log("You safely navigate through the dark mountains because of torch.Sword and compass help to find direction, sword used for safety which helps to protect from wild animals or snakes");
  else if(hasSword ||!hasCompass) 
    console.log("You safely navigate through the dark mountains,but need to be careful for directions");
  else if(!hasSword || hasCompass)
    console.log("You safely navigate through the dark mountains,but need to be careful on wild animals or snakes");
  else
  console.log("You safely navigate through the dark mountains,but need to be careful for directions and wild animals or snakes");
} 
else if (choice === "mountains" && !hasTorch) 
  console.log("It's too dark to proceed. You decide to turn back.");

  else if(choice==="mountains" && hasTorch && !health)
    console.log("its not safe to go to mountains if health is not good");

else if (choice === "village" && hasCompass|| !hasMap) {
  if(health)
  {
    console.log("You see two paths: one leads to the cave in the village, the other to the river in the village.");
    const choice1 = readline.question("Do you go to the 'cave' or the 'river'?");
    if(choice1==="cave")
      console.log("You find your way to the cave in the village.");
    else
    console.log("You find your way to the river in the village.");

  }
  else
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/