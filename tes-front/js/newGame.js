document.addEventListener("DOMContentLoaded", newGame)

function newGame(){
    fetchData()
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





function sideBar(){

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












///////////////////////////////////////
////when using canvas///////////

function findCard(index, cards) {
    let addCard= canvas.getContext('2d').drawImage("https://cdn1.imggmi.com/uploads/2019/9/11/8afd7cf21d6551f71409919734470e16-full.png", cards[index].sx, cards[index].sy, cards[index].sWdith, cards[index].sHeight, cards[index].dx, cards[index].dy, cards[index].dWidth, cards[index].dHeight);
    return addCard
}
///////////////////////////////////////