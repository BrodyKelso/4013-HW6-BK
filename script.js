$(document).ready(function() {
    // Sample quiz data
    const questions = [
        { question: "What is 2+2?", choices: ["3", "4", "5", "6"], answer: "4" },
        { question: "What is the capital of France?", choices: ["Paris", "London", "Berlin", "Rome"], answer: "Paris" }
        // Add more questions as needed
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    // Display the current date using Moment.js
    $('#current-date').text(moment().format('MMMM Do YYYY'));

    // Display the first question
    displayQuestion();

    // On submitting an answer
    $('#submit-btn').click(function() {
        const selectedChoice = $('input[name="choice"]:checked').val();
        checkAnswer(selectedChoice);
    });

    function displayQuestion() {
        const question = questions[currentQuestionIndex];
        $('#question-text').text(question.question);
        const choicesHtml = _.shuffle(question.choices).map(choice => 
            `<li><input type="radio" name="choice" value="${choice}"> ${choice}</li>`
        ).join("");
        $('#choices-container').html(choicesHtml);
    }

    function checkAnswer(selectedChoice) {
        const correctAnswer = questions[currentQuestionIndex].answer;
        if (selectedChoice === correctAnswer) {
            score++;
            Swal.fire({
                title: 'Correct!',
                text: 'You got the answer right.',
                icon: 'success'
            }).then(() => {
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    displayQuestion();
                } else {
                    showFinalScore();
                }
            });
        } else {
            Swal.fire({
                title: 'Oops!',
                text: 'That was not correct.',
                icon: 'error'
            }).then(() => {
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    displayQuestion();
                } else {
                    showFinalScore();
                }
            });
        }
    }

    function showFinalScore() {
        Swal.fire({
            title: 'Quiz Completed!',
            text: `Your final score is ${score}/${questions.length}.`,
            icon: 'info'
        });
    }
});
