
let cards = []
let sum = 0
let hasBlackJack = false

let isAlive = false

let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")

let player ={
     pName: "Sai",
     chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.pName + ": $" + player.chips


function startGame()
{
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
    
}

function renderGame()
{
    cardEl.textContent= "Cards: "
    // cardEl.textContent = `Cards: ${cards[0]} ${cards[1]}`;

    for(let i=0; i < cards.length; i++)
    {
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent= "Sum: " + sum
        if(sum<=20)
        {
            message = "Do you want to draw a new card?"
        }
        else if(sum === 21)
        {
            message = "you have got a blackJack"
            hasBlackJack = true
        }
        else{
            message = "You are out of the game"
            isAlive = false

        
        }
        messageEl.textContent = message
}

function newCard()
{

    if(isAlive === true && hasBlackJack === false)
    {
        console.log("Drawing a new card from the deck")

        let card = getRandomCard()
    
        sum += card

        cards.push(card)
        console.log(cards)
        renderGame()
    }

    
}

function getRandomCard()
{
    let random = Math.floor(Math.random()*13)+1
    console.log(random)
    if(random === 1)
    {
        return 11
    }
    else if( random>10)
    {
        return 10
    }
    else
    {
        return random
    }
    
}



