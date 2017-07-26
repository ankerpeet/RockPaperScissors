function play(userInput) {
    //Variables
    var playerChoice = userInput;
    var computerChoice = '';
    var output = ''
    var userScore = document.getElementById("you").innerHTML;
    var compScore = document.getElementById("comp").innerHTML;
    userScore = parseFloat(userScore);
    compScore = parseFloat(compScore);
    //Choose random number
    var choiceNum = Math.floor(Math.random() * 3);
    var arr = ['rock', 'paper', 'scissors']
    computerChoice = arr[choiceNum];
    //Create string
    var compWin = `Computer chose ${computerChoice} and beat you.`
    var compLose = `Computer chose ${computerChoice} and lost.`
    //Change User Image
    if (playerChoice === 'rock') {
        document.getElementById("img1").src = "images/rock.png";
    } else if (playerChoice === 'paper') {
        document.getElementById("img1").src = "images/paper.png";
    } else if (playerChoice === 'scissors') {
        document.getElementById("img1").src = "images/scissors.png";
    }
    //Change Computer Image
    if (computerChoice === 'rock') {
        document.getElementById("img2").src = "images/rock-left.png";
    } else if (computerChoice === 'paper') {
        document.getElementById("img2").src = "images/paper-left.png";
    } else if (computerChoice === 'scissors') {
        document.getElementById("img2").src = "images/scissors-left.png";
    }
    //Decide which is winner
    if (playerChoice === computerChoice) {
        output = 'Tie';
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        output = compWin;
        compScore += 1;
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        output = compLose;
        userScore += 1;
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        output = compLose;
        userScore +=1;
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        output = compWin;
        compScore += 1;
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        output = compLose;
        userScore += 1;
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        output = compWin;
        compScore += 1;
    }
    document.getElementById("game").innerHTML = output; //Print to html the winner 
    document.getElementById("you").innerHTML = userScore;
    document.getElementById("comp").innerHTML = compScore;
}