// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot-s health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
// console.log(enemyNames[0]);
// console.log(enemyNames[1]);
// console.log(enemyNames[2]);
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
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
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    //reset player stats
    playerInfo.reset();

    for (var i = 0; i < enemyNames.length; i++) {
      // if player is still alive keep fighting
      if (playerInfo.health > 0) {
        // let user know what roung they are in - arrays start at 0
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        
        // pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];

        // reset enemyHealth before starting new fight
        enemyHealth = 50;

        fight(pickedEnemyName);
      }
      // notification the player robot has been defeated and the game has ended
      else {
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