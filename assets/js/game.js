// Game States
// "WIN" - Player robot has defeated all enemy robots
//      *Fight all enemy robots
//      *Defeat each enemy robot
// "Lose" - PLayer robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roberto", "Amy Android", "Robo Tumble"] ; 
var enemyHealth = 50; 
var enemyAttack = 12; 

var fight = function(enemyName) {

    while(playerHealth > 0 && enemyHealth > 0) {
        // alert plays that they are starting the round
        // window.alert("Welcome to Robot Gladiators!");
        
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to skip?");
        
            // if yes, leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!"); 
                // subtract monery from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("Player money", playerMoney);
                break; 
            }
            // if no, ask the question again by running fight() again
        } else {
            fight()
        }
        
        if (promptFight === "fight" || promptFight === "FIGHT") {
            // subtract the value of playerAttack from the value of enemyHealth and use that result to update the value in the enemyHealth variable
            enemyHealth = enemyHealth - playerAttack; 
            
            // log a resulting message to the console so whe know that it worked
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
                ); 
                
                // check enemy's health
                if (enemyHealth <= 0) {
                    window.alert(enemyName + " has died!");
                    break;
                }
                else {
                    window.alert(enemyName + " still has " + enemyHealth + " health left.");
                }
                
                // subtract the value of enemyAttack form the value of playerHealth and use the result to update the value in the playerHealth variable
            playerHealth = playerHealth - enemyAttack; 
        
            // log a resulting message to teh console so whe know that it worked
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining." 
            );
        
            // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break; 
            }
            else {
                window.alert(playerName + "still has " + playerHealth + " health remaining.");
            }
        } else {
            window.alert("You need to choose a valid option. Try again!");
        }

    }
}; 

for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Galdiators! Round " + (i + 1));
        var pickedEnemeyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemeyName);
    } else {
        window.alert("You ahve lost your robot in battle! Game Over!");
        break;
    }
}