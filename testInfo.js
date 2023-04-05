const questions = [
    {
        q: "How long is a NYS Guide license valid?",
        a: [
            '1 year', 
            '3 years', 
            '5 years', 
            'Indefinitely'
        ],
        correct: 2
    },
    {
        q: 'What does “TRP” stand for?',
        a: [
            'Temporary Revocable Permit',
            'Team Rendezvous Plan',
            'The Rest Point',
            'Temporary Recreation Permit'
        ],
        correct: 0

    },
    {
        q: 'When are you required to sign in at a trail register when there are two or more people in your party?',
        a: [
            'When you enter the park and when you exit',
            "When you haven't told your emergency contact where you're going",
            'When extreme weather is forcasted and the temperature is above 90 degrees or below 28 degrees',
            'Every time you come across a trail register'
        ],
        correct: 3
    },
    {
        q: 'If you have to pitch a tent near a lean to, how far away do you need to be?',        
        a: [
            '145 feet',
            '151 feet',
            '200 feet',
            '100 feet'
        ],
        correct: 1
    }

];

function init () {
    const quizId= document.getElementById('quiz');

    //loop through the array of questions
    //for each question make some html 
    let quizStr= '';
    // form
    //      h1
    //      div.alert
    //      ul
    //          li
    //            ... 
    //      button submit

    questions.forEach(function(question, qIndex) {
        let answerStr = '';
        question.a.forEach(function (answer, aIndex) {
            answerStr += `
            <li>
                <label>
                    <input type="radio" name= "question-${qIndex}">
                    ${answer}
                </label>
            </li>
            `
        })
        quizStr += `
            <form>
            <h1>${question.q}</h1>
            <ul>
                ${answerStr}
            </ul>
            </form>
        `
        

    });
    quizId.innerHTML= quizStr;
}
init();


