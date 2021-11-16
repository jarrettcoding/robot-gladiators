var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roberto"; 
var enemyHealth = 50; 
var enemyAttack = 12; 

var fight = function() {
    // alert plays that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

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
        }
        else {
            window.alert(playerName + "still has " + playerHealth + " health remaining.");
        }

    } else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to skip?");

        // if yes, leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!"); 
            // subtract monery from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }
        // if no, ask the question again by running fight() again
        else {
            fight()
        }
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
}; 

fight(); 