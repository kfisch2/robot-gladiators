// set player/enemy name, health, and attack variables
var playerName = window.prompt("What's your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!")

    // subtract playerAttack from enemyHealth
    enemyHealth -= playerAttack;

    // log result
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    // subtract enemyAttack from playerHealth
    playerHealth -= enemyAttack;

    // log result
    console.log(playerHealth);

    playerHealth -= enemyAttack;

    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + "now has " + playerHealth + " health remianing."
    );
};

// calling the function
fight();
