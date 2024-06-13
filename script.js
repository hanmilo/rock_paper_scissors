//console.log("Hello World!");

//function generates random computer choice
function getComputerChoice() {
    let random_number = Math.random()*1000;
    //console.log(random_number);
    if (random_number < 334) {
        return 0 //Rock
    }
    else if (random_number < 667) {
        return 1 //Paper
    }
    else { 
        return 2 //Scissors
    }
}

function getHumanChoice(current_round, end_round) {
    let human_choice = (window.prompt("Round: " + current_round + " of " + end_round + "\n\n0: Rock, 1: Paper or 2: Scissors?"));
    console.log("Player input: " + human_choice);
    if (isNaN(human_choice)) {
        // human_choice.toString();
        // console.log("String: " + human_choice);
        for (i = 0; i < 3; i++){
            if (human_choice.toUpperCase() == Choice_Name[i].toUpperCase()) {
                // console.log("UpperCase Human: " + human_choice);
                // console.log("UpperCase Choice name: " + Choice_Name[i]);
                human_choice = i;
                // console.log("Choice_Name: " + Choice_Name[i]);
                // console.log("Afer: " + human_choice);
                break;
            }
        }
        if (i == 3) {
            human_choice = 3;
        }
    }

    return Math.abs(human_choice);
}

const Choice_Name = ["Rock", "Paper", "Scissors"];
let Round_Target = 5;
let Human_Score = 0;
let Computer_Score = 0;

for (Round_Counter = 1; Round_Counter <= Round_Target; Round_Counter++) {
    let Computer_Choice = getComputerChoice();
    //console.log(Computer_Choice);
    let Human_Choice = getHumanChoice(Round_Counter, Round_Target);
    if (isNaN(Human_Choice) || Human_Choice > 2) {
        window.alert("Invalid Entry. Please choose again.")
        Human_Choice = getHumanChoice(Round_Counter, Round_Target);
    }

    if (Human_Choice == Computer_Choice) {
        Human_Score += 0.5;
        Computer_Score += 0.5;
        window.alert("Round: " + Round_Counter + " of " + Round_Target + "\n\nDraw! \n" + Choice_Name[Human_Choice] + " vs " + Choice_Name[Computer_Choice] + " (You vs Computer)" + "\n\nGrand Score: " + Human_Score + " vs " + Computer_Score + " (You vs Computer)");
    }
    else { //(Human_Choice != Computer_Choice) 
        if ((Human_Choice > Computer_Choice && Human_Choice !=  2 && Computer_Choice != 0) || (Human_Choice == 0 && Computer_Choice == 2)) { //Human wins
            Human_Score++;
            window.alert("Round: " + Round_Counter + " of " + Round_Target + "\n\nYou win :D \n" + Choice_Name[Human_Choice] + " vs " + Choice_Name[Computer_Choice] + " (You vs Computer)" + "\n\nGrand Score: " + Human_Score + " vs " + Computer_Score + " (You vs Computer)");
        }
        else {  //Computer wins
            Computer_Score++;
            window.alert("Round: " + Round_Counter + " of " + Round_Target + "\n\nComputer wins D: \n" + Choice_Name[Human_Choice] + " vs " + Choice_Name[Computer_Choice] + " (You vs Computer)" + "\n\nGrand Score: " + Human_Score + " vs " + Computer_Score + " (You vs Computer)");
        }
    }
    //console.log(Human_Choice + " vs " + Computer_Choice);
}

if (Human_Score == Computer_Score) {
    window.alert("End of " + Round_Target + " rounds" + "\n\nDraw!" + "\n\nGrand Score: " + Human_Score + " vs " + Computer_Score + " (You vs Computer)");
}
else if (Human_Score > Computer_Score) {
    window.alert("End of " + Round_Target + " rounds" + "\n\nYou won :D" + "\n\nGrand Score: " + Human_Score + " vs " + Computer_Score + " (You vs Computer)");
}
else {
    window.alert("End of " + Round_Target + " rounds" + "\n\nComputer won D:" + "\n\nGrand Score: " + Human_Score + " vs " + Computer_Score + " (You vs Computer)");
}