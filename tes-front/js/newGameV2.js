document.addEventListener("DOMContentLoaded", main)

function main(){
    // fetchCards()
    pageButtons()
    // fetchGames()
    // fetchUsers()
    let newButton= document.getElementById("newGame")
    newButton.addEventListener("click", e => {
        newGame(e)
    })

   
}
let strike=0
let currentScore= 1


// function fetchGames(){
//     fetch("http://localhost:3000/games")
//     .then(response => response.json())
//     .then(games => statsScores(games))
// }



function newGame(e){
    e.preventDefault();
    fetch("http://localhost:3000/games" , {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            totScore: 0
        })
    })
    .then(response => response.json())
    // .then(game => addGameToGameCards(game))
    .then (results => console.log("first fetch results"))
    // .then(results=> console.log(results))
    // .then(results=> submitAttempt(0, results))
    // .then(results=> addCardToCardGames(0, results))
    // .then(initialRandomCards(cards)))
    fetchCards()
    //////why do results not persist??? they are present here but not in later functions
    
}

// var cards
function fetchCards(){
    fetch("http://localhost:3000/cards")
    .then(response => response.json())
    .then(cards => initialRandomCards(cards))
    // .then(cards => console.log(cards))
}

function initialRandomCards(cards){
    while (document.getElementById("container").hasChildNodes()){
        document.getElementById("container").removeChild(document.getElementById("container").lastChild)
    }
    //puts default 12 cards in the grid
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
        console.log(imageCard.id)
        image.setAttribute("class", ".col-sm")
        image.onclick = e => {
            selected.push(imageCard)
            threeClicks(e, selected, cards)
            console.log("clicked")
        }   
        currentTwelve.push(cards.splice(cards[randCard],1))
        cardTable.appendChild(image)
    }
    // console.log(cards)
}

function threeClicks(e, selected, cards){

    if (selected.length >= 3) {
        determineValid(selected, cards)
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


    if (!((a == b) && (b == c) || (a != b) && (a != c) && (b != c))) {
        numberValid = false;
        // console.log(numberValid)
        } else {
        numberValid = true
        }
    if (!((a.shape == b.shape) && (b.shape == c.shape) ||
            (a.shape != b.shape) && (a.shape != c.shape) && (b.shape != c.shape))) {
        shapeValid = false;
        // console.log(shapeValid)
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
    // console.log(selected)
    submitAttempt(valid, selected, cards)
    addGameToGameCards(selected)
    
}

function addGameToGameCards(selected, results){
    fetch(`http://localhost:3000/game_cards/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                c1: selected[0],
                c2: selected[1],
                c3: selected[2],
                gameId: results.id
            })
        })
}
function submitAttempt(valid, selected, cards, results){
        console.log("results at submitattempt", results)
        
        if (valid === true){
            currentScore = currentScore +1
            //remove the 3 selected cards
            cardToBeRemoved_1 = document.getElementById(`${selected[0].id}`)
            cardToBeRemoved_2 = document.getElementById(`${selected[1].id}`)
            cardToBeRemoved_3 = document.getElementById(`${selected[2].id}`)
            // console.log("card to be removed",cardToBeRemoved_1)
            cardToBeRemoved_1.remove()
            cardToBeRemoved_2.remove()
            cardToBeRemoved_3.remove()
            let cardTable = document.getElementById("container")
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
                // console.log(cards)
            }

        }
        else {
            currentScore = currentScore -1
            strike ++
        }
        let frontEndCounter= document.getElementById("setCounter")
        frontEndCounter.textContent= currentScore
        let frontEndStrike = document.getElementById("strikes")
        frontEndStrike.textContent = strike
        let giveUP= document.getElementById("iGiveUp")
        ////trying to auto click/////
       if (currentScore <=-3){
           var simulateClick = function (giveUP) {
           var evt = new MouseEvent('click', {
               bubbles: true,
               cancelable: true,
               view: window
           });
           // If cancelled, don't dispatch our event
           var canceled = !giveUp.dispatchEvent(evt);
           ///////
        }
       };
        fetchCards()
        submitNewScore(currentScore, results)
        
        
    }

    


    function submitNewScore(currentScore, results){
        console.log("the id of item to fetch")
        console.log(results.id)
        fetch(`http://localhost:3000/games/${results.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                totScore: currentScore
            })
        })

        fetchGames()
       
    }

function statsScores(results){
    // console.log(results)
    sortedScores= results.sort(function(a, b){
    return parseFloat(a.totScore) - parseFloat(b.totScore);
    });
    let highScores= results.sort(function(a, b) {return a.totScore < b.totScore ? 1 : -1; })
    .slice(0, 10);
    // console.log(highScores)
    return highScores
    //too tired to find the corresponding players right now
}

    

function pageButtons(){

    //USER MODAL
    // Get the modal
    var endModal = document.getElementById("end-modal")
    // Get the button that opens the modal
    let endBtn= document.getElementById("give-up")

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    var span1 = document.getElementById("x")

    // When the user clicks the button, open the modal 
    
    endBtn.onclick = function() {
    endModal.style.display = "block";
    }


    //What is in the modal
    var endContent = document.getElementById("end-modal-body")

    // When the user clicks on <span> (x), close the modal
    span1.onclick = function() {
    endModal.style.display = "none";
    }
    // let gameMenu= document.getElementById("menu")

///////////////////////////////////////////////////////////////////
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
    var content = document.getElementById("modal-body")
    ///add stats
    // function insertIntoStatsModal(){
    //     let body= document.getElementById("modal-header")
    //     let testInsert= document.createElement(div)
    //     testInsert.innertext= "hey this is a test"
    // }
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
        else if (event.target == endModal){
            endModal.style.display = "none"
        }
    }
}
///////////////////////////////////////////////////////////////////




function addUser(user){
    let enterName= document.getElementById("enter-name-form")
    // let nameInput= document.getElementById("name-input")
    // enterName.appendChild(nameInput)
    enterName.onsubmit = (e) => {
        fetchUsers(e)
    }
}

function fetchUsers(e){
    // fetch("http://localhost:3000/users")
    // .then(response => response.json())
    // .then(user => establishUser(user, e))    
    // .then(name => console.log(name))

    fetch(`http://localhost:3000/users`,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            
            user: e[0].name
        })

    }).then(resp=>resp.json())
    .then(results => console.log(results))
}

// function establishUser(e){
    
//     fetch(`http://localhost:3000/users`,{
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
            
//             user: e[0].name
//         })

//     }).then(resp=>resp.json())
//     .then(results => console.log(results))
// }








