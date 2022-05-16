// set player/enemy name, health, and attack variables
var playerName = window.prompt("What's your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

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
    
                // check enemy health
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

        // check player's health
        if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        }

        else { 
            window.alert(playerName + " has " + playerHealth + " health remaining.");
        }

        }

    // if player chooses skip
    else if (promptFight === "SKIP" || promptFight === "skip") {
        

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
    }

    else {
        window.alert("Please choose a valid option. Try again");
    }
    
 };

// calling the function
fight();
