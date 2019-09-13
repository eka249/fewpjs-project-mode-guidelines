document.addEventListener("DOMContentLoaded", main)

function main(){
    fetchCards()
    pageButtons()
    fetchGames()
}

function newGame(e){
    e.preventDefault();
    fetch("http://localhost:3000/games" , {
        method: "POST",
        headers: {
        //    'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            totScore:0
        })
    })
    .then(response => response.json()
    )
    // .then(testscore=> console.log(testscore))
    //how do we connect current game with gameplay-question for after gameplay is over
    .then(results=> submitAttempt(0, results))

}
var cards
function fetchCards(){
    fetch("http://localhost:3000/cards")
    .then(response => response.json())
    .then(cards => initialRandomCards(cards))
}


function initialRandomCards(cards){
    //puts default 12 cards in the grid
    console.log(cards)
    let cardTable = document.getElementById("container")
    // let allCardsUsed = []
    let selected = []
    let currentTwelve = []
    for (i = 0; i < 12; i++) {
        randCard = Math.floor(Math.random() * (cards.length))
        let image = document.createElement("img")
        let imageCard = cards[randCard]
        image.src = imageCard.img
        image.id = imageCard.id
        // console.log(image.id)
        // console.log(imageCard.id)
        image.setAttribute("class", ".col-sm")
        image.onclick = e => {
            selected.push(imageCard)
            threeClicks(e, selected)
        }
        currentTwelve.push(cards.splice(cards[randCard],1))
        cardTable.appendChild(image)
    }
    console.log(cards)
}


//take selected.push out of addeventlistener
//change threeclicks input

function threeClicks(e,selected){
    if (selected.length == 3) {
        determineValid(selected)
        selected = []
        console.log(selected)
    }
    else {console.log(selected.length)
    }
}
function determineValid(selected){
    let a = selected[0]
    let b = selected[1]
    let c = selected[2]
    let valid = null
    let numberValid = null
    let shapeValid = null
    let shadingValid = null
    let colorValid = null
    if (!((a.number == b.number) && (b.number == c.number) ||
            (a.number != b.number) && (a.number != c.number) && (b.number != c.number))) {
        numberValid = false;
        console.log(numberValid)
    } else {
        numberValid = true
        console.log(numberValid)
    }
    if (!((a.shape == b.shape) && (b.shape == c.shape) ||
            (a.shape != b.shape) && (a.shape != c.shape) && (b.shape != c.shape))) {
        shapeValid = false;
        console.log(shapeValid)
    } else {
        shapeValid = true
        console.log(shapeValid)
    }
    if (!((a.shading == b.shading) && (b.shading == c.shading) ||
        (a.shading != b.shading) && (a.shading != c.shading) && (b.shading != c.shading))) {
        shadingValid = false;
        console.log(shadingValid)
    } else {
        shadingValid = true
        console.log(shadingValid)
    }
    if (!((a.color == b.color) && (b.color == c.color) ||
            (a.color != b.color) && (a.color != c.color) && (b.color != c.color))) {
        colorValid = false;
        console.log(colorValid)
    } else {
        colorValid = true
        console.log(colorValid)
    }
    if ((numberValid == true) && (shapeValid == true) && (shadingValid == true) && (colorValid == true)) { 
        valid = true
        console.log(valid)
    }
    submitAttempt(valid, selected)
}

function submitAttempt(valid, results, selected){

    // console.log("results at submitattempt", results.id)
    if (valid === true){
        // totScore++
        //remove the 3 selected cards
        cardToBeRemoved_1 = document.getElementById(`${selected[0].id}`)
        console.log(cardToBeRemoved_1)
        drawCards(cards)
    }
    else {
        totScore = results.totScore -1 
    }
    // console.log("totScore")
    // console.log(totScore)
    submitNewScore(totScore, results)
}
    
function drawCards(cards){

}


function submitNewScore(totScore, results){
    // console.log("the id of item to fetch")
    // console.log(results.id)
    fetch(`http://localhost:3000/games/${results.id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            totScore: totScore
        })
    })
    let setCounter= document.getElementById("setCounter")
    setCounter.innerHTML= totScore
    //change value on front end to score here
    return totScore
    
}

   
function statsScores(games){
    sortedScores= games.sort(function(a, b){
    return a.totScore - b.totScore;
    });
    // maxScores= sortedScores[0..5]
    //too tired to find the corresponding players right now
}
    
function fetchGames(){
    fetch("http://localhost:3000/games")
    .then(response => response.json())
    .then(games => statsScores(games))
}

function statsScores(games){
    sortedScores= games.sort(function(a, b){
    return a.totScore - b.totScore;
    });
    // maxScores= sortedScores[0..5]
    //too tired to find the corresponding players right now
}


////////////backup loop code
// while (cardArr.length < 4){
//     //assign all coordinates in findCard function
//     randCard= Math.floor(Math.random() * (cards.length))
//     // console.log(randCard)
//     // console.log(cards[randCard].img)
//     if (!cardArr.includes(randCard)){
//         let image = document.createElement("img")
//         image.src = cards[randCard].img
//         // image.setAttribute([idCounter])
//         image.addEventListener("click", e => {
//             // console.log("click working")
//             selected.push(cards[randCard])
//             threeClicks(e, cards)
//         })
//         row1.appendChild(image)
//         cardArr.push(cards[randCard])
//         // console.log(cardArr)
//         // console.log(selected)
//     }
//     break
// }


function pageButtons(){
    let gameMenu= document.getElementById("menu")
    let newButton= document.getElementById("newGame")
    newButton.innerText= "New Game!"
    newButton.addEventListener("click", e => {
        newGame(e)
    })
    

    


    //"sets:" inner text
    //display counter data
    //timer as a stretch goal



    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
    modal.style.display = "block";
    }

    //What is in the modal
    var content = document.getElementById("modal-header")
    // content.innerText= scoresStats()
    //figure out how to show this in text

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    }
} 