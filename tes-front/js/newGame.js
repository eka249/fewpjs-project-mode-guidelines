document.addEventListener("DOMContentLoaded", newGame)

function newGame(){
    initialRandomCards(cards)
    
}


function initialRandomCards(cards){
    //puts default 12 cards in the grid
    //how to make sure they stay in grid format
    let cardTable= document.getElementById("grid-container")
    idCounter=1
    x=12
    let selected = []
    const times = x => pick => {
        let element = document.createElement("canvas")
        index= Math.floor(Math.random() * (Card.all.length))
        //assign all coordinates in findCard function
        findCard(index, cards)
        element.
        findCard(index, cards)
        element.setAttribute(card[idCounter])
        idCounter++
        element.onclick= e =>{
            threeClicks(e, cards[index], selected)
        }
        cardTable.appendChild(element)
        //how to constrain this to where a card can't be picked twice??  
    }

    //keep track of 3 clicks and the ids of the cards clicked
    i=0
    arr=0
    cardTable.onclick = e => {
        threeClicks(e, i, arr)
        i++
        //push div where div id was the one clicked
        // arr.push()
    }

    document.addEventListener('click', e => {
        threeClicks(e)
    }
}

function sideBar(){

}

function threeClicks(e, card){
    if (e.detail === 3) {
        determineValid(arr)
        i
        e.detail ===0
    }
}

function determineValid(arr){
    //set up when card model is figured out
    //output validYN
    submitAttempt(validYN)
}
function subitAttempt(validYN){
    if (validYN === 1){
        score++}
    else {
        score = score -1 
    }

    //establish connection with db, not url
    fetch("http://localhost:3000/cards",
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(
            tot.score: score
        )
    })
    //change value on front end to score here




    }
}





function findCard(index, cards) {
    let addCard= canvas.getContext('2d').drawImage(cards[index].sx, cards[index].sy, cards[index].sWdith, cards[index].sHeight, cards[index].dx, cards[index].dy, cards[index].dWidth, cards[index].dHeight);
    return addCard
}
  

