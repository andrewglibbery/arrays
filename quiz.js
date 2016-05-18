var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var questions = [
	['How many albums has Chance released?', 3],
	['What is our house number?', 933],
	['How many dogs do I have?', 1]
]
var correctlyAnswered = [];
var incorrectlyAnswered = [];

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function printCorrectQuestions(arr) {
	html += '<ol>';
		for( var i = 0; i < correctlyAnswered.length; i += 1){
			html += '<li>' + correctlyAnswered[i] + '</li>';
		}
	html += '</ol>';
	print(html);
	

}

for ( var i = 0; i < questions.length; i += 1) {
	question = questions[i][0];
	answer = questions[i][1];
	response = parseInt(prompt(question));
		if (response === answer) {
			correctAnswers += 1;
			correctlyAnswered.push(question);
		} else {
			incorrectlyAnswered.push(question);
		}
}


printCorrectQuestions(correctlyAnswered);
