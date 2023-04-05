//The variable contains all of the questions and answers for the test
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
//This function loops through "questions" and allows the user to take the test
function init () {
    const quizId= document.getElementById('quiz');

  
    let quizStr= '';
    // form
   
    //      ul
    //          li
    //            ... 
   
//This is the function that loops through the variable 'questions'
    questions.forEach(function(question, qIndex) {
        let answerStr = '';
        const answerOrder = randomRange(question.a.length)
        question.a.forEach(function (answer, aIndex) {
            answerStr += `
            <li style="order: ${answerOrder[aIndex]}">
                <label>
                    <input 
                        type="radio" 
                        name= "question-${qIndex}" 
                        class= "tQuestion-${qIndex}"
                        data-correct= "${question.correct === aIndex}"
                    >
                    ${answer}
                </label>
            </li>
            `
        })
        //creates text that the user will read on the page by grabbing information from the 'questions' array
        quizStr += `
            <form>
            <h1>${question.q}</h1>
            <div class="alert"></div>
            <ul style="display: flex; flex-direction: column">
                ${answerStr}
            </ul>
            <button type="submit">Submit</button>
            </form>
        `
        

    });
    quizId.innerHTML= quizStr;
    quizId.addEventListener('submit',function(e) {
        e.preventDefault();
        console.log(e);
        const selectedInput= e.target.querySelector('input[type=radio]:checked');//to ensure that the answer being evaluated is the one that's selected by user
        const alert= e.target.querySelector('div.alert');
        if (selectedInput === null) {
            alert.innerHTML= 'Please select an answer'
        } else if (selectedInput.dataset.correct === 'true') {
            alert.innerHTML= "That's correct!"
        } else {
            alert.innerHTML = 'Try Again'
        }

    })  
    }  
    
 //end of init;
init();

//function used to randomize the order of the answers by randomizing the number created from the function randomRange
function random(n) {
    return Math.floor(Math.random()* n);
}
//Function used to create range of numbers to pick answer order
function randomRange(x) {
    const arr = [];
    for (let i = 0; i < x; i++){
        arr.push(i);
    }
    const randomArr= []
    while(arr.length > 0) {
        const randomIndex = random(arr.length)
        const randomNumber = arr[random(randomIndex)];
        randomArr.push(randomNumber);
        arr.splice(randomIndex, 1);
        
        
    }
    return randomArr;
}




//for (let i = 0; i < 100; i++) {
  //  random(10)
//}


