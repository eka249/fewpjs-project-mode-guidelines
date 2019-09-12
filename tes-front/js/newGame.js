document.addEventListener("DOMContentLoaded", newGame)

function newGame(){
    fetchData()
    pageButtons()
}

function pageButtons(){
    let gameMenu= document.getElementById("menu")
    let newButton= document.getElementById("newGame")
    newButton.onclick= e =>{
        newGame(e)
    }
    newButton.innerText= "New Game!"
    //"sets:" inner text
    //display counter data
    //timer as a stretch goal
    

}


function newGame(e){
    fetch("http://localhost:3000/games", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            userId: userId,
            totScore: 0
        })
    })
}


function fetchData(){
    fetch("http://localhost:3000/cards")
    .then(response => response.json())
    .then(cards => initialRandomCards(cards))
}
function initialRandomCards(cards){
    // console.log(cards)
    //puts default 12 cards in the grid
    //how to make sure they stay in grid format?
    let cardTable= document.getElementById("grid-container")
    let cardArr=[]
    let selected = []
    while (cardArr <12){
        //assign all coordinates in findCard function
        randNum= Math.floor(Math.random() * (cards.length))
        if (!cardArr.includes(randNum)){
            let element = document.createElement("img")
            element.src = cards[randNum].img
            // element.setAttribute([idCounter])
            // element.onclick = e => ({
            //     threeClicks(e, cards)
            //     selected.push(Card[index])
            // })
        cardTable.appendChild(element)
        cardArr.push(randNum)
        }
        //how to constrain this to where a card can't be picked twice??  
    }
}



function threeClicks(e,selected){
    if (selected.length ==3) {
        determineValid(selected)}
        selected.pop()
        selected.pop()
        selected.pop()
    }

function determineValid(selected){
    //set up when card model is figured out
    //output validYN
    submitAttempt(validYN)
}
function submitAttempt(validYN){
    if (validYN === 1){
        score++}
    else {
        score = score -1 
    }
    fetch("http://localhost:3000/cards",{
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            totScore: score
        })
    })
    //change value on front end to score here
    
}





