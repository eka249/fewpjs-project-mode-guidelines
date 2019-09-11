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
    const times = x => pick => {
        let element = document.createElement("div")
        index=  Math.floor(Math.random() * (Card.all.length))
        element.img= cards[index].image
        element.setAttribute(card[idCounter])
        idCounter++
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

function threeClicks(e, i, arr){
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
    fetch("tes-backend/db.games",
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

