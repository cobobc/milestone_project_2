(function() {
    const questions = [{
        question: "If you make five strokes on a Par 4, what is the result?",
        choices: ["Birdie", "Par", "Bogey", "Eagle", "Double-bogey"],
        correctAnswer: 2
    }, {
        question: "Who won the 2019 British Open in Portrush, Northern Ireland?",
        choices: ["Tiger Woods", "Ernie Els", "Vijay Singh", "Shane Lowry", "Gary Player"],
        correctAnswer: 3
    }, {
        question: "How many times has Tiger Woods won The Masters?",
        choices: [5, 0, 15, 29, 1],
        correctAnswer: 0
    }, {
        question: "Which year did Brooks Koepka win his first major?",
        choices: [2020, 2021, 2010, 2019, 2017],
        correctAnswer: 4
    }, {
        question: "Which major has Rory McIlroy not won?",
        choices: ["US Open", "British Open", "USPGA Championship", "The Players", "The Masters"],
        correctAnswer: 4
    }, {
        question: "Which year was golf's last appearance at the Olympic Games before returning to the line-up of sports in 2016?",
        choices: [1978, 1904, 2012, 2000, 1986],
        correctAnswer: 1
    }, {
        question: "Who was top of the golf world rankings prior to lockdown?",
        choices: ["Tiger Woods", "Shane Lowry", "Rory McIlroy", "Justin Thomas", "Dustin Jonhson"],
        correctAnswer: 4
    }, {
        question: "In dollars, what is the total prize money purse available in The Players Championship – the most lucrative event on the tour?",
        choices: ["$12,500,000", "$2,500,000", "$50,000,000", "$28,000,000", "$7,500,000"],
        correctAnswer: 0
    }, {
        question: "Who stunned the golf world by winning the 2003 PGA Championship despite being ranked No. 169th in the world at the time?",
        choices: ["Rich Beem", "Ben Curtis", "Shaun Micheel", "Stewart Cink", "Ben Watson"],
        correctAnswer: 2
    }, {
        question: "Tiger Woods was ranked No. __ in the world when he won The Masters in 2019…",
        choices: [12, 7, 16, 25, 42],
        correctAnswer: 0
    }, {
        question: "Which course has been used more often than any other for The Open Championship? (29 times)",
        choices: ["Portrush", "St Andrews", "Royal Birkdale", "Royal St. George's", "Carnoustie"],
        correctAnswer: 1
    }, {
        question: "Which player has won the most major championships in his career? (18)",
        choices: ["Tiger Woods", "Ben Hogan", "Arnold Palmer", "Gary Player", "Jack Nicklaus"],
        correctAnswer: 4
    }, {
        question: "The 11th, 12th and 13th holes at Augusta National are collectively known by what nickname?",
        choices: ["The Turn Back Turn", "Feck This", "Players Nightmare", "Bottlers Bend", "Amen Corner"],
        correctAnswer: 4
    }, {
        question: "What was the last PGA Tour event to be played in full before the coronavirus lockdown?",
        choices: ["WGC Invitational", "The Tour Championship", "The Players", "Arnold Palmer Invitational", "Bay Hill Invitational"],
        correctAnswer: 3
    }, {
        question: "Royal St George's Golf Club is based in which English town that shares its name with a popular lunchtime food?",
        choices: ["Sandwich", "Crumpets", "Salad", "Soup", "Bread"],
        correctAnswer: 0
    }, {
        question: "Tiger Woods was born in which US state?",
        choices: ["New Mexico", "Virginia", "California", "Florida", "Texas"],
        correctAnswer: 2
    }, {
        question: "Who racked up a stunning 18 wins on Tour in 1945?",
        choices: ["Byron Nelson", "Ben Hogan", "Arnold Palmer", "Gary Player", "Jack Nicklaus"],
        correctAnswer: 0
    }, {
        question: "Who won the Masters in 2021?",
        choices: ["Dustin Jonhson", "Brook Keopka", "Bryson DeChambeau", "Hideki Matsuyama", "Colin Morikawa"],
        correctAnswer: 3
    }, {
        question: "In the 2008 US Open playoff, who did Tiger Woods beat?",
        choices: ["Chris DiMarco", "Rocco Mediate", "Phil Mickelson", "Adam Scott", "Ernie Else"],
        correctAnswer: 1
    }, {
        question: "Rory McIlroy imploded on Sunday after holding a four-stoke lead overnight in 2011. Who ended up winning?",
        choices: ["Adam Scott", "Charl Schwartzel", "Bubba Watson", "Angel Cabrera", "Danny Willett"],
        correctAnswer: 4
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
        let header = $('<h2>Question ' + (index + 1) + ':</h2>');
        qElement.append(header);
        let question = $('<p>').append(questions[index].question);
        qElement.append(question);
        let radioButtons = createRadios(index);
        qElement.append(radioButtons);
        return qElement;
    }

    // Creates a list of the answer choices as radio inputs
    function createRadios(index) {
        let radioList = $('<ul>');
        let item;
        let input = '';
        for (let i = 0; i < questions[index].choices.length; i++) {
            item = $('<li>');
            input = '<input type="radio" name="answer" value=' + i + ' />';
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
            questions.length + ' correct! You should try your skills out of the golf course! ');
        return score;
    }
});