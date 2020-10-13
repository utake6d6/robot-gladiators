// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot-s health is zero or less

var fight = function(enemy) {

  //repeat and execute aas long as the enemy robot is alive  
  while (enemy.health > 0 && playerInfo.health > 0) {
    // ask user if they'd liked to fight or run
    var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if user picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm user wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playerInfo.money", playerInfo.money);
        break;
    } 
}
    
    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
    //generate random damage value based on player's attack power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack)
    // remove enemy's health by subtracting the amount set in the damage variable
    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
      playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
    );
  
    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + " has died!");
      //award player money for winning
      playerInfo.money = playerInfo.money + 20;
      //exit loop if enemyHealth goes below 0
      break;

    } else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }
  
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    // remove player's health by subtracting the amount set in the damage variable
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
      enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
    );
  
    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has died!");
      //exit loop if playerHealth goes below 0
      break;

    } else {
      window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }

    }
     else {
      window.alert("You need to pick a valid option. Try again!");
    }
  }
}

// function to start a new game
var startGame = function() {
  //reset player stats
  playerInfo.reset();

for (var i = 0; i < enemyInfo.length; i++) {
  // if player is still alive keep fighting
  if (playerInfo.health > 0) {
    // let user know what roung they are in - arrays start at 0
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        
    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyObj = enemyInfo[i];

    // reset enemy health before new fight with randomized health value between 40-60
    pickedEnemyObj.health = randomNumber(40, 60);


    fight(pickedEnemyObj);

    // if player is still alive and we're not at the last enemy in the array
    if (playerInfo.health> 0 && i < enemyInfo.length - 1) {
      // ask if user wants to use the store before next round
      var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

      // if yes, take them to the store() function
      if (storeConfirm) {
      shop();
      }
    }
  }
  if (playerInfo.health <= 0) {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
    }
  }

    // when loop ends, player is either out of health or enemies to fight, so run the endGame function
  endGame();
}

  // function to end the entire game
  var endGame = function() {
  // if player is still alive, player wins!
  if (playerInfo.Health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.Money + ".");
  } 
  else {
    window.alert("You've lost your robot in battle.");
  }

  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
  // restart the game
  startGame();
  } 
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

// function for the shop
var shop = function() {
  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );
  
  // ise switch to carry out action
  switch (shopOptionPrompt) {
    case "refill":
    case "REFILL":
      playerInfo.refillHealth();
      break;
    case "upgrade":
    case "UPGRADE":
      playerInfo.upgradeAttack();
      break;
    case "leave":
    case "LEAVE":
      window.alert("Leaving the store.");

      // do nothing, so function will end
      break;
    default:
      window.alert("You did not pick a valid option. Try again!");

      // call shop() again to force player to pick a valid option
      shop();
      break;
  }
};

// function to generate a random numeric value
var randomNumber = function() {
  var value = Math.floor(Math.random() * 21) + 40;

  return value;
};

var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  }, // comma!
  refillHealth: function() {
    if (this.money >= 7) {
    window.alert("Refilling player's health by 20 for 7 dollars.");
    this.health += 20;
    this.money -= 7;
    } 
    else {
    window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    } 
    else {
      window.alert("You don't have enough money!");
    }
  }
};

var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];
  

  // play again
  startGame();
  

// Wrap the game logic in a startGame() function

// When the player is defeated or there are no more enemies, call an endGame() function that:

// Alerts the player's total stats

// Asks the player if they want to play again

// If yes, call startGame() to restart the game

// After the player skips or defeats an enemy (and there are still more robots to fight):

// Ask the player if they want to "shop"

// If no, continue as normal

// If yes, call the shop() function

// In the shop() function, ask player if they want to "refill" health, "upgrade" attack, or "leave" the shop

// If refill, subtract money points from player and increase health

// If upgrade, subtract money points from player and increase attack power

// If leave, alert goodbye and exit the function

// If any other invalid option, call shop() again