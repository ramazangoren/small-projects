let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");






function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convert(letter) {

  if(letter === "r") return "rock";
  if(letter === "p") return "paper";
  if(letter === "s") return "scissor";

}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smalluserword = "user".fontsize(3).sup();
  const smallcompword = "computer".fontsize(3).sup();
  // result_p.innerHTML = convert(userChoice) + "  beats  " + convert(computerChoice) + ". you won"
  result_p.innerHTML = `${convert(userChoice)}${smalluserword}   beats  ${convert(computerChoice)}  ${smallcompword} . you won`
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')}, 400);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smalluserword = "user".fontsize(3).sup();
  const smallcompword = "computer".fontsize(3).sup();
  // result_p.innerHTML = convert(userChoice) + "  beats  " + convert(computerChoice) + ". you won"
  result_p.innerHTML = `${convert(userChoice)}${smalluserword}   you loses to  ${convert(computerChoice)} ${smallcompword} . comp won `
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')}, 400);

}


function draw(userChoice, computerChoice) {
  const smalluserword = "user".fontsize(3).sup();
  const smallcompword = "computer".fontsize(3).sup();
  // result_p.innerHTML = convert(userChoice) + "  beats  " + convert(computerChoice) + ". you won"
  result_p.innerHTML = `${convert(userChoice)}${smalluserword}   equals  ${convert(computerChoice)} ${smallcompword}. it's a draw`
  document.getElementById(userChoice).classList.add('gray-glow');
  setTimeout(function(){document.getElementById(userChoice).classList.remove('gray-glow')}, 400);
}



function game(userChoice) {
  const ComputerChoice = getComputerChoice();
  switch (userChoice + ComputerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, ComputerChoice);
      break;


    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, ComputerChoice);
      break;

    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, ComputerChoice);
      break;


  }
}


 function main() {
         rock_div.addEventListener('click', function() {
           game("r");
         })

         paper_div.addEventListener('click', function() {
           game("p");
         })

         scissor_div.addEventListener('click', function() {
           game("s");
         })
}


main();
