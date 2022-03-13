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
function runda() {
    let user = prompt()
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
    return reza 
}

function game() {
    let playerScore = 0
    let computerScore = 0
    for (let i = 0; i < 5 ; i++) {
        let reza = runda()
        if (reza === 'Victory') {
            playerScore++
        } else if (reza === 'Defeat') {
            computerScore++
        }
        console.log(reza)
        console.log(`Player ${playerScore}:${computerScore} Computer`)
    }
}

game()