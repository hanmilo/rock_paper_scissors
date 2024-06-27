//console.log("Hello World!");

//function generates random computer choice
// function getComputerChoice() {
//     let random_number = Math.random()*1000;
//     //console.log(random_number);
//     if (random_number < 334) {
//         return 0 //Rock
//     }
//     else if (random_number < 667) {
//         return 1 //Paper
//     }
//     else { 
//         return 2 //Scissors
//     }
// }

// function getHumanChoice(current_round, end_round) {
//     let human_choice = (window.prompt("Round: " + current_round + " of " + end_round + "\n\n0: Rock, 1: Paper or 2: Scissors?"));
//     console.log("Player input: " + human_choice);
//     if (isNaN(human_choice)) {
//         // human_choice.toString();
//         // console.log("String: " + human_choice);
//         for (i = 0; i < 3; i++){
//             if (human_choice.toUpperCase() == Choice_Name[i].toUpperCase()) {
//                 // console.log("UpperCase Human: " + human_choice);
//                 // console.log("UpperCase Choice name: " + Choice_Name[i]);
//                 human_choice = i;
//                 // console.log("Choice_Name: " + Choice_Name[i]);
//                 // console.log("Afer: " + human_choice);
//                 break;
//             }
//         }
//         if (i == 3) {
//             human_choice = 3;
//         }
//     }

//     return Math.abs(human_choice);
// }

const Choice_Name = ["Rock", "Paper", "Scissors"];
let Round_Target = 5;
let Round_Counter = 0;
let Human_Score = 0;
let Computer_Score = 0;
let Human_Choice = 3;
let Computer_Choice = 3;

const elementBody = document.querySelector("body");

    const buttonRock = document.createElement("button");
    buttonRock.classList.add("classButtonRock");
    buttonRock.textContent = "Rock";
    buttonRock.addEventListener("click", () => {
        Human_Choice = 0;
    });

    const buttonPaper = document.createElement("button");
    buttonPaper.classList.add("classButtonPaper");
    buttonPaper.textContent = "Paper";
    buttonPaper.addEventListener("click", () => {
        Human_Choice = 1;
    });

    const buttonScissors = document.createElement("button");
    buttonScissors.classList.add("classButtonScissors");
    buttonScissors.textContent = "Scissors";
    buttonScissors.addEventListener("click", () => {
        Human_Choice = 2;
    });

elementBody.appendChild(buttonRock);
elementBody.appendChild(buttonPaper);
elementBody.appendChild(buttonScissors);

const divScoreBoard = document.createElement("div");
divScoreBoard.classList.add("ScoreBoard");
elementBody.appendChild(divScoreBoard);

const buttonAll = document.querySelectorAll("button");
buttonAll.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(Human_Choice);
        
        let random_number = Math.random()*1000;
        //console.log(random_number);
        if (random_number < 334) {
            Computer_Choice = 0; //Rock
        }
        else if (random_number < 667) {
            Computer_Choice = 1; //Paper
        }
        else { 
            Computer_Choice = 2; //Scissors
        };

        Round_Counter++;

        if (Human_Choice == Computer_Choice) {
            Human_Score += 0.5;
            Computer_Score += 0.5;
            divScoreBoard.textContent = "Round: " + Round_Counter + "\n\nDraw! \n" + Choice_Name[Human_Choice] + " vs " + Choice_Name[Computer_Choice] + " (You vs Computer)" + "\n\nGrand Score: " + Human_Score + " vs " + Computer_Score + " (You vs Computer)";
        }
        else { //(Human_Choice != Computer_Choice) 
            if (Human_Choice ==  0 && Computer_Choice == 2) { //Human wins
                Human_Score++;
                divScoreBoard.textContent = "Round: " + Round_Counter + "\n\nYou win :D \n" + Choice_Name[Human_Choice] + " vs " + Choice_Name[Computer_Choice] + " (You vs Computer)" + "\n\nGrand Score: " + Human_Score + " vs " + Computer_Score + " (You vs Computer)";
            }
            else if (Computer_Choice == 0 && Human_Choice == 2) { //Computer wins
                Computer_Score++;
                divScoreBoard.textContent = "Round: " + Round_Counter + "\n\nComputer wins D: \n" + Choice_Name[Human_Choice] + " vs " + Choice_Name[Computer_Choice] + " (You vs Computer)" + "\n\nGrand Score: " + Human_Score + " vs " + Computer_Score + " (You vs Computer)";
            }
            else if (Human_Choice > Computer_Choice) {  //Human wins
                Human_Score++;
                divScoreBoard.textContent = "Round: " + Round_Counter + "\n\nYou win :D \n" + Choice_Name[Human_Choice] + " vs " + Choice_Name[Computer_Choice] + " (You vs Computer)" + "\n\nGrand Score: " + Human_Score + " vs " + Computer_Score + " (You vs Computer)";
            }
            else {  //Computer wins
                Computer_Score++;
                divScoreBoard.textContent = "Round: " + Round_Counter + "\n\nComputer wins D: \n" + Choice_Name[Human_Choice] + " vs " + Choice_Name[Computer_Choice] + " (You vs Computer)" + "\n\nGrand Score: " + Human_Score + " vs " + Computer_Score + " (You vs Computer)";
            };
        };

        if (Human_Score >= Round_Target) {
            if (Human_Score == Computer_Score) {
                window.alert("End of " + Round_Counter + " rounds" + "\n\nDraw!" + "\n\nGrand Score: " + Human_Score + " vs " + Computer_Score + " (You vs Computer)");
            }
            else if (Human_Score > Computer_Score) {
                window.alert("End of " + Round_Counter + " rounds" + "\n\nYou won :D" + "\n\nGrand Score: " + Human_Score + " vs " + Computer_Score + " (You vs Computer)");
            }
            else {
                window.alert("End of " + Round_Counter + " rounds" + "\n\nComputer won D:" + "\n\nGrand Score: " + Human_Score + " vs " + Computer_Score + " (You vs Computer)");
            };
            Human_Score = 0;
            Computer_Score = 0;
            Round_Counter = 0;
            alert("You've earned 5 points or more & a new game will begin!")
        };
    });
});