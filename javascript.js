var allQuestions = [];

allQuestions[0] = {
    question: "Count the number of F's : Finished files are the result of years of scientific study combined with the experience of years.",
    choices: ["3", "5", "6"],
    correctAnswer: 0
};
allQuestions[1] = {
    question: "What is the answer to this problem? 48 / 2(9 + 3) = ?",
    choices: ["2", "288", "2888"],
    correctAnswer: 0
};
allQuestions[2] = {
    question: "What number comes next? 2, 2, 4, 12, 48, ___",
    choices: ["240", "250", "260"],
    correctAnswer: 0
};

document.getElementById("question").textContent = allQuestions[0].question;

document.getElementById("choice0").textContent = allQuestions[0].choices[0];

document.getElementById("choice1").textContent = allQuestions[0].choices[1];

document.getElementById("choice2").textContent = allQuestions[0].choices[2];

var userScore = 0;

var questionNum = 0;

 $("#next").click(function() {
   

  if($("form input[name=answer]:checked").val() == allQuestions[questionNum].correctAnswer) {
    userScore++;
  }

  
    if (questionNum == (allQuestions.length - 1)) {
    document.getElementsByTagName("form")[0].style.display = "none";
      
    document.getElementById("question").textContent ="Your score is " + userScore + " out of 3.";
    }
  
    questionNum++;
  
    document.getElementById("question").textContent = allQuestions[questionNum].question;

    document.getElementById("choice0").textContent = allQuestions[questionNum].choices[0];

    document.getElementById("choice1").textContent = allQuestions[questionNum].choices[1];

    document.getElementById("choice2").textContent = allQuestions[questionNum].choices[2];
	});
