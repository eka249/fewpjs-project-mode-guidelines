document.addEventListener("DOMContentLoaded", main)

function main(){
    fetchCards()
    pageButtons()
    fetchGames()
}

function newGame(e){
    e.preventDefault();
    fetchCards()
    fetch("http://localhost:3000/games" , {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            totScore:0
        })
    })
    .then(response => response.json())
    // .then(testscore=> console.log(testscore))
    .then(results=> submitAttempt(0, results))

}
var cards
function fetchCards(){
    fetch("http://localhost:3000/cards")
    .then(response => response.json())
    .then(cards => initialRandomCards(cards))
}


function initialRandomCards(cards){
    while (document.getElementById("container").hasChildNodes()){
        document.getElementById("container").removeChild(document.getElementById("container").lastChild)
    }
    //puts default 12 cards in the grid
    console.log("cards at initalrandomcards", cards)
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
            threeClicks(e, selected, cards)
        }
        currentTwelve.push(cards.splice(cards[randCard],1))
        cardTable.appendChild(image)
    }
    console.log(cards)
}


//take selected.push out of addeventlistener
//change threeclicks input

function threeClicks(e,selected, cards){

    if (selected.length >= 3) {
        determineValid(selected, cards)
        selected = []
    }
    // else {console.log(selected.length)
    // }
}
function determineValid(selected, cards){
    let a = selected[0]
    let b = selected[1]
    let c = selected[2]
    let valid = null
    let numberValid = null
    let shapeValid = null
    let shadingValid = null
    let colorValid = null


            if (!((a == b) && (b == c) ||
            (a != b) && (a != c) && (b != c))) {
        numberValid = false;
        // console.log(numberValid)
        } else {
        numberValid = true
        }
    if (!((a.shape == b.shape) && (b.shape == c.shape) ||
            (a.shape != b.shape) && (a.shape != c.shape) && (b.shape != c.shape))) {
        shapeValid = false;
        console.log(shapeValid)
    } else {
        shapeValid = true
        // console.log(shapeValid)
    }
    if (!((a.shading == b.shading) && (b.shading == c.shading) ||
        (a.shading != b.shading) && (a.shading != c.shading) && (b.shading != c.shading))) {
        shadingValid = false;
        // console.log(shadingValid)
    } else {
        shadingValid = true
        // console.log(shadingValid)
    }
    if (!((a.color == b.color) && (b.color == c.color) ||
            (a.color != b.color) && (a.color != c.color) && (b.color != c.color))) {
        colorValid = false;
        // console.log(colorValid)
    } else {
        colorValid = true
        // console.log(colorValid)
    }
    if ((numberValid == true) && (shapeValid == true) && (shadingValid == true) && (colorValid == true)) { 
        valid = true
        // console.log(valid)
    }
    console.log(selected)
    submitAttempt(valid, selected, cards)
    
}

function submitAttempt(valid, selected, cards, results){
//  console.log(selected)
    // console.log("results at submitattempt", results.id)
    if (valid === true){
        totScore= results.totScore + 1
        //remove the 3 selected cards
        cardToBeRemoved_1 = document.getElementById(`${selected[0].id}`)
        cardToBeRemoved_2 = document.getElementById(`${selected[1].id}`)
        cardToBeRemoved_3 = document.getElementById(`${selected[2].id}`)
        console.log("card to be removed",cardToBeRemoved_1)
        cardToBeRemoved_1.remove()
        cardToBeRemoved_2.remove()
        cardToBeRemoved_3.remove()
        let cardTable = document.getElementById("container")
        selected = []
        // let currentTwelve = []
        for (i = 0; i < 3; i++) {
            randCard = Math.floor(Math.random() * (cards.length))
            let image = document.createElement("img")
            let imageCard = cards[randCard]
            image.src = imageCard.img
            image.id = imageCard.id
            image.setAttribute("class", ".col-sm")
            image.onclick = e => {
                selected.push(imageCard)
                threeClicks(e, selected)
            }
            // currentTwelve.push(
                cards.splice(cards[randCard],1)
                // )
            cardTable.appendChild(image)
            console.log(cards)
    }
}
    else {
        totScore = results.totScore -1
        selected = []
    }
    // console.log("totScore")
    // console.log(totScore)
    submitNewScore(totScore, results)
}
    


function submitNewScore(totScore, results){
    console.log("the id of item to fetch")
    console.log(results.id)
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
    fetchGames()
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
    // console.log(games)
    sortedScores= games.sort(function(a, b){
    return parseFloat(a.totScore) - parseFloat(b.totScore);
    });
    let highScores= games.sort(function(a, b) {return a.totScore < b.totScore ? 1 : -1; })
    .slice(0, 10);
    // console.log(highScores)
    highScores
    //too tired to find the corresponding players right now
}


function pageButtons(){
    let gameMenu= document.getElementById("menu")
    let newButton= document.getElementById("newGame")
    newButton.innerText= "New Game!"
    newButton.addEventListener("click", e => {
        newGame(e)
    })

    ///STATS MODAL
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
    // content.innerText= statsScores()
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


////USER MODAL
    // Get the modal
//     var modal = document.getElementById("myModal");

//     // Get the button that opens the modal
//     var btn = document.getElementById("myBtn");

//     // Get the <span> element that closes the modal
//     var span = document.getElementsByClassName("close")[0];

//     // When the user clicks the button, open the modal 
//     btn.onclick = function() {
//     modal.style.display = "block";
//     }

//     //What is in the modal
//     var content = document.getElementById("modal-header")
//     // content.innerText= statsScores()
//     //figure out how to show this in text

//     // When the user clicks on <span> (x), close the modal
//     span.onclick = function() {
//     modal.style.display = "none";
//     }

//     // When the user clicks anywhere outside of the modal, close it
//     window.onclick = function(event) {
//         if (event.target == modal) {
//           modal.style.display = "none";
//         }
//     }
// } 







