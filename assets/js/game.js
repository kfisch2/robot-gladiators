// set player/enemy name, health, and attack variables
var playerName = window.prompt("What's your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;



var fight = function() {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // if player chooses fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        enemyHealth -= playerAttack;
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health points left.");
    
    
    // check enemy health status
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!")
    }

    else {
        window.alert(enemyName + " still has " + enemyHealth + " health points remaining.");
    }

    // remove player health when enemy attacks
    playerHealth -= enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player's status
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }

    else { 
        window.alert(playerName + " has " + playerHealth + " health remaining.");
    }

    }
    // if player choose skip
    else if (promptFight === "SKIP" || promptFight === "skip") {
        window.alert(playerName + " has chosen to skip the fight!");
    }

    else {
        window.alert("Please choose a valid option. Try again");
    }
 };

// calling the function
fight();
