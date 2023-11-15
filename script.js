$(document).ready(function() {
    // Sample quiz data
    const questions = [
        { question: "Have you ever had a DP shootout?", choices: ["Yes", "No",], answer: "Yes" },
        { question: "When was the first HTML dirty joke posted on the internet?", choices: ["1989, with the advent of the World Wide Web.", "2001, marking a humorous milestone in the early days of social media platforms.", "1995, coinciding with the widespread popularity of early internet forums.", "1998, during the boom of personal websites and user-generated content."], answer: "1998, during the boom of personal websites and user-generated content." }
        // Add more questions as needed
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    
    $('#current-date').text(moment().format('MMMM Do YYYY'));

    
    displayQuestion();

    
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
