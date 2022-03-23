//returns random between 3 options
function computerPlay() {
    switch (Math.ceil(Math.random() * 3)) {
        case 1:
            return('kamen')
            break;
        case 2:
            return('skare')
            break;
        case 3:
            return('papir')
            break;
    }
}

//odlucuje pobjednika i returna rezultat(reza)
function runda(user) {
    let computer = computerPlay()
    user = user.toLowerCase()
    console.log(user, computer)
    let reza = 'Tie'
    if (user !== computer){
        reza = 'Defeat'
        switch (user) {
            case 'kamen':
                if (computer === 'skare') {
                    reza = 'Victory'
                }
                break;
            case 'skare':
                if (computer === 'papir') {
                    reza = 'Victory'
                }
                break;
            case 'papir':
                if (computer === 'kamen') {
                    reza = 'Victory'
                }
                break;
            default:
                console.log('Wrong input, try again.')
                runda()
                break;
        } 
    } 
    return reza;
}

function countScore(buttonid){
    let result = runda(buttonid);
        switch (result) {
            case 'Victory':
                userScore++;
                break;
            
            case 'Defeat':
                computerScore++;
                break;
        
            default:
                break;
        }
    return result;
}

function gameOver(user, comp){
    if (user > comp) return 'Pobijeda';
    return 'Poraz';
}

function replaceButtons(){
    buttons.forEach((button) => {
        button.parentNode.removeChild(button);
    });
    reset.textContent = 'Reset';
    container.appendChild(reset);
}   

function placeButtons(){
    botunKamen.textContent = 'Kamen';
    botunKamen.setAttribute('id', 'kamen');
    container.appendChild(botunKamen);
    botunSkare.textContent = 'Skare';
    botunSkare.setAttribute('id', 'skare');
    container.appendChild(botunSkare);
    botunPapir.textContent = 'Papir';
    botunPapir.setAttribute('id', 'papir');
    container.appendChild(botunPapir);
    
}

const buttons = document.querySelectorAll('.container > button');
const rezultat = document.querySelector('#rezultat');
const container = document.querySelector('.container');
const reset = document.createElement('button');
const botunKamen = document.createElement('button');
const botunSkare = document.createElement('button');
const botunPapir = document.createElement('button');

let userScore = 0;
let computerScore = 0;
let bestOf = 5;



buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let result = countScore(button.id);
        rezultat.textContent = `User ${userScore}:${computerScore} Computer`;
        if (userScore >= bestOf || computerScore >= bestOf) {
            rezultat.textContent = gameOver(userScore, computerScore);
            //replaceButtons();
        }
    });
});

// reset.addEventListener('click', () => {
//     userScore = 0;
//     computerScore = 0;
//     reset.parentNode.removeChild(reset);
//     placeButtons();
//     rezultat.textContent = ``;
    
// });
