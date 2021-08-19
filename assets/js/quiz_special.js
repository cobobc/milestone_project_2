(function() {
    const questions = [{
        question: "It’s 25 years since Team USA last won on European soil. Who captained the Americans to victory?",
        choices: ["Jack Nicklaus", "Lee Trevino", "Raymond Floyd", "Tom Watson"],
        correctAnswer: 3
    }, {
        question: "Thomas Bjorn captained Europe in 2018, but how many times did he represent Europe as a player?",
        choices: [2, 3, 4, 5],
        correctAnswer: 1
    }, {
        question: "Before Davis Love III guided USA to victory in 2016, who was the only winning American captain this century?",
        choices: ["Hal Sutton", "Paul Azinger", "Corey Pavin", "Curtis Strange"],
        correctAnswer: 1
    }, {
        question: "Who secured the winning point for Team USA in their 17-11 victory at Hazeltine 2016?",
        choices: ["J.B Holmes", "Jordan Speith", "Ryan Moore", "Zach Johnson"],
        correctAnswer: 2
    }, {
        question: "Who was the only European player to finish unbeaten at Hazeltine 2016?",
        choices: ["Rory McIlroy", "Sergio Garcia", "Rafa Cabrera Bello", "Justin Rose"],
        correctAnswer: 2
    }, {
        question: "Who holed the putt that retained the Ryder Cup for Europe at Medinah in 2012?",
        choices: ["Martin Kaymer", "Sergio Garcia", "Lee Westwood", "Justin Rose"],
        correctAnswer: 0
    }, {
        question: "Colin Montgomerie had an unbeaten record in how many singles matches?",
        choices: [5, 6, 7, 8],
        correctAnswer: 3
    }, {
        question: "Who captained the United States to a dramatic victory in 1999?",
        choices: ["Lanny Wadkins", "Paul Azinger", "Ben Crenshaw", "Curtis Strange"],
        correctAnswer: 2
    }, {
        question: "Which golfer has won the most matches in the Ryder Cup?",
        choices: ["Nick Faldo", "Billy Casper", "Seve Ballesteros", "Ben Watson"],
        correctAnswer: 0
    }, {
        question: "Who was the last playing US captain?",
        choices: ["Jack Burke Jr", "Ben Hogan", "Arnold Palmer", "Sam Snead"],
        correctAnswer: 2
    }, {
        question: "Who defeated Tiger Woods in the singles in 1997?",
        choices: ["Darren Clarke", "Costantino Rocca", "Thomas Bjorn", "Lee Westwood"],
        correctAnswer: 1
    }, {
        question: "In what year did Europe first win the Ryder Cup on American soil?",
        choices: [1890, 2004, 1987, 1995],
        correctAnswer: 2
    }, {
        question: "When did continental European golfers first become eligible to play in the Ryder Cup?",
        choices: [1977, 1979, 1987, 1981],
        correctAnswer: 1
    }, {
        question: "Who holds the record for the most Ryder Cup appearances on either side?",
        choices: ["Tiger Woods", "Phil Mickelson", "Bernhard Langer", "Walter Hagen"],
        correctAnswer: 1
    }, {
        question: "Which player made his debut as a 19-year-old, making him the youngest player in Ryder Cup history? ",
        choices: ["Jordan Speith", "Ricky Fowler", "Sergio Garcia", "Nick Faldo"],
        correctAnswer: 2
    }];

    let questionCounter = 0; //Tracks question number
    let selections = []; //Array containing user choices
    const quiz = $('#quiz'); //Quiz div object

    // Display initial question
    displayNext();

    // Click handler for the 'next' button
    $('#next').on('click', function (e) {
        e.preventDefault();

        // Suspend click listener during fade animation
        if(quiz.is(':animated')) {
            return false;
        }
        choose();

        // If no user selection, progress is stopped
        if (isNaN(selections[questionCounter])) {
            alert('In golf you need to put the ball in the hole to progress. Please select an answer to proceed!');
        } else {
            questionCounter++;
            displayNext();
        }
    });

    // Click handler for the 'prev' button
    $('#prev').on('click', function (e) {
        e.preventDefault();
        if(quiz.is(':animated')) {
            return false;
        }
        choose();
        questionCounter--;
        displayNext();
    });

    // Click handler for the 'Start Over' button
    $('#start').on('click', function (e) {
        e.preventDefault();
        if(quiz.is(':animated')) {
            return false;
        }
        questionCounter = 0;
        selections = [];
        displayNext();
        $('#start').hide();
    });

    // Animates buttons on hover
    $('.button').on('mouseenter', function () {
        $(this).addClass('active');
    });

    $('.button').on('mouseleave', function () {
        $(this).removeClass('active');
    });

    // Creates and returns the div that contains the questions and 
    // the answer selections
    function createQuestionElement(index) {
        let qElement = $('<div>', {
            id: 'question'
        });
        let header = $('<h2 style="margin-bottom: 1.563rem;">Question ' + (index + 1) + '</h2>');
        qElement.append(header);
        let question = $('<p style="margin-bottom: 1.563rem;">').append(questions[index].question);
        qElement.append(question);
        let radioButtons = createRadios(index);
        qElement.append(radioButtons);
        return qElement;
    }

    // Creates a list of the answer choices as radio inputs
    function createRadios(index) {
        let radioList = $('<ul style="list-style-type: none; padding-left: 0">');
        let item;
        let input = '';
        for (let i = 0; i < questions[index].choices.length; i++) {
            item = $('<li style="margin-bottom: .313rem;">');
            input = '<input type="radio" name="answer" style="margin-right: .625rem" value=' + i + ' />';
            input += questions[index].choices[i];
            item.append(input);
            radioList.append(item);
        }
        return radioList;
    }

    // Reads the user selection and pushes the value to an array
    function choose() {
        selections[questionCounter] = +$('input[name="answer"]:checked').val();
    }

    // Displays next requested element
    function displayNext() {
        quiz.fadeOut(function() {
            $('#question').remove();
            if(questionCounter < questions.length){
                let nextQuestion = createQuestionElement(questionCounter);
                quiz.append(nextQuestion).fadeIn();
                if (!(isNaN(selections[questionCounter]))) {
                    $('input[value='+selections[questionCounter]+']').prop('checked', true);
                }

                // Controls display of 'prev' button
                if(questionCounter === 1){
                    $('#prev').show();
                } else if(questionCounter === 0){
                    $('#prev').hide();
                    $('#next').show();
                }
            }else {
                let scoreElem = displayScore();
                quiz.append(scoreElem).fadeIn();
                $('#next').hide();
                $('#prev').hide();
                $('#start').show();
            }
        });
    }
    
    // Calculates the score and returns a paragraph element to be displayed
    function displayScore() {
        let score = $('<p>',{id: 'question'});
        let numCorrect = 0;
        for (let i = 0; i < selections.length; i++) {
            if (selections[i] === questions[i].correctAnswer) {
                numCorrect++;
            }
        }
        score.append('Congratulations, you got ' + numCorrect + ' questions out of ' +
            questions.length + ' correct! See you at the Ryder Cup! ');
        return score;
    }
})();