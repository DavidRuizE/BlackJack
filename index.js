let player = {
    name: "David",
    chips: 900
}
let cards = []
let hasblackJack= false
let sum = 0
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let playerEl = document.getElementById("player-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.querySelector("#sum-el")


playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber === 1){
    return 11
}else if(randomNumber > 10 ){ 
        return 10
    }else{ 
        return  
    }
}

function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}

function renderGame(){
    cardsEl.textContent= "Cards: "
    for(let i = 0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " " 
    }
    sumEl.textContent= "Sum: "+ sum
    if (sum < 21){
        message = "Do you want to draw a new card? 🙂"
    }else if(sum===21){
        message = "You've got BlackJack! 🥳"
        hasblackJack=true
    }else{
        message = "You're out of the game! 😭"
        isAlive=false
    }
    messageEl.textContent=message
}


function dragNewCard(){
    if (isAlive && hasblackJack === false){
        let thirdCard = getRandomCard()
        message.textContent="Drawing a new card from the deck"
        sum += thirdCard
        cards.push(thirdCard)
        renderGame()
    }
}





