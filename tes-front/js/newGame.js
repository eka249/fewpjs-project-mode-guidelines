document.addEventListener("DOMContentLoaded", newGame)

function newGame(){
    fetchData()
    pageButtons()
}

function pageButtons(){
    let gameMenu= document.getElementById("menu")
    let newButton= document.getElementById("newGame")
    newButton.innerText= "New Game!"
    newButton.onclick= e =>{
        newGame(e)
    }
    


    let statsModal = document.getElementById("statsModal")
    let statsBtn= document.getElementById("statsBtn")
    var span = document.getElementsByClassName("close")[0];
    statsBtn.onclick = e => {
        statsModalFunction(e)
        modal.style.display="block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = e => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
    }
    


    //"sets:" inner text
    //display counter data
    //timer as a stretch goal
}

function statsModalFunction(e){
}


// function newGame(e){
//     fetch("http://localhost:3000/games", {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body:JSON.stringify({
//             userId: userId,
//             totScore: 0
//         })
//     })
//     gamePlay()
//     //how do we connect current game with gameplay-question for after gameplay is over
// }


function fetchData(){
    fetch("http://localhost:3000/cards")
    .then(response => response.json())
    .then(cards => initialRandomCards(cards))
}
function initialRandomCards(cards){
    // console.log(cards)
    //puts default 12 cards in the grid
    //how to make sure they stay in grid format?
    let cardTable = document.getElementById("grid-container")
    let cardArr = []
    let selected = []
    while (cardArr.length < 12){
        //assign all coordinates in findCard function
        randCard= Math.floor(Math.random() * (cards.length))
        if (!cardArr.includes(randCard)){
            let image = document.createElement("img")
            image.src = cards[randCard].img
            // image.setAttribute([idCounter])
            image.onclick = e => {
                threeClicks(e, cards)
                selected.push(cards[randCard])
            }
            cardTable.appendChild(image)
            cardArr.push(randCard)
        }
        //how to constrain this to where a card can't be picked twice??  
    }
    displayCards(cardArr)
}


function threeClicks(e,selected){
    if (selected.length ==3) {
        determineValid(selected)
        selected.pop()
        selected.pop()
        selected.pop()
    }
}

function determineValid(selected){
    if (selected[0].color !=selected[1].color !=selected[2].color &&
        selected[0].shape !=selected[1].shape !=selected[2].shape &&
        selected[0].number !=selected[1].number !=selected[2].number &&
        selected[0].shading !=selected[1].shading !=selected[2].shading)
        {let validYN= 1
        }
    else {let validYN=0}
    submitAttempt(validYN)
}

function submitAttempt(validYN){
    if (validYN === 1){
        score++}
    else {
        score = score -1 
    }
    fetch("http://localhost:3000/games",{
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





