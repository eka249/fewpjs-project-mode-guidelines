document.addEventListener("DOMContentLoaded", main)

function main(){
    fetchCards()
    pageButtons()
    fetchGames()
}

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
    content.innerText= scoresStats()

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

    function newGame(e){
        e.preventDefault();
        fetch("http://localhost:3000/games" , {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                totScore:0
            })
        })
        .then(response => response.json())
        //how do we connect current game with gameplay-question for after gameplay is over
        
    
    }




    function fetchCards(){
        fetch("http://localhost:3000/cards")
        .then(response => response.json())
        .then(cards => initialRandomCards(cards))
    }

    function initialRandomCards(cards){
        //puts default 12 cards in the grid
        let cardTable = document.getElementById("container")
        // let row1= document.getElementById("row1")
        // let row2= document.getElementById("row2")
        // let row3= document.getElementById("row3")
        let cardArr = []
        let selected = []
        for (i = 0; i < 12; i++) {
            randCard= Math.floor(Math.random() * (cards.length))
            // console.log(randCard)
            // console.log(cards[randCard].img)
            if (!cardArr.includes(randCard)){
                let image = document.createElement("img")
                image.src = cards[randCard].img
                image.setAttribute("class", ".col-sm")
                // image.setAttribute([idCounter])
                image.addEventListener("click", e => {
                    // console.log("click working")
                    selected.push(cards[randCard])
                    threeClicks(e, cards)
                })
                cardTable.appendChild(image)
                cardArr.push(cards[randCard])
                // console.log(cardArr)
                // console.log(selected)
            }
        }

    }


    function threeClicks(e,selected){
        if (selected.length >= 3) {
            determineValid(selected)
            selected.pop()
            selected.pop()
            selected.pop()
        }
        else {console.log("not three clicks yet")
                console.log(selected)}
    }

    function determineValid(selected){
        if (selected[0].color !=selected[1].color !=selected[2].color &&
            selected[0].shape !=selected[1].shape !=selected[2].shape &&
            selected[0].number !=selected[1].number !=selected[2].number &&
            selected[0].shading !=selected[1].shading !=selected[2].shading)
            { var validYN= 1
            }
        else { var validYN=0}
        submitAttempt(validYN)
    }

    function submitAttempt(validYN){
        if (validYN === 1){
            totScore++
        }
        else {
            totScore = totScore -1 
        }
        fetch("http://localhost:3000/games",{
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


    function fetchGames(games){
        fetch("http://localhost:3000/games")
        .then(response => response.json())
        .then(games => statsScores(games))
    }

    function statsScores(games)
        sortedScores= games.sort(function(a, b){
        return a.totScore - b.totScore;
        });
        maxScores= sortedScores[0..5]
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