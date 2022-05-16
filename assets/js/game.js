// set player/enemy name, health, and attack variables
var playerName = window.prompt("What's your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Roberto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function(enemyName) {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // if player chooses fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        enemyHealth -= playerAttack;
        console.log(playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health points left.");
    
                // check enemy health
        if (enemyHealth <= 0) {
            window.alert(enemyNames + " has died!")
        } else {
            window.alert(enemyNames + " still has " + enemyHealth + " health points remaining.");
        }

        // remove player health when enemy attacks
        playerHealth -= enemyAttack;
        console.log(
            enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // check player's health
        if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        } else { 
            window.alert(playerName + " has " + playerHealth + " health remaining.");
        }
        // if player chooses skips
    } else if (promptFight === "SKIP" || promptFight === "skip") {
        

      // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you want to quit?");
        
        // if true, leave fight
        if (confirmSkip) {
            //subtract money from playerMoney for skiping
            window.alert(playerName + " has chosen to skip the fight!");
            playerMoney -= 2;
        }
        //if false, ask question again by running fight()
        else { 
            fight();
        }
    } else {
        window.alert("Please choose a valid option. Try again");
    }
    
    // Games States
    // "WIN" - Player robot has defeated all enemy-robots
    //    ^ fight all enemy robots
    //    ^ Deafeat each enemy robot
    // "LOSE" - Player robot's health is zero or less
 };

// calling the function

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
