document.addEventListener("DOMContentLoaded", newGame)

function newGame(){
    fetchData()
    initialRandomCards(cards)
    
}

function fetchData(){
    fetch("http://localhost:3000/cards")
    .then(response => response.json())
    .then(cards => console.log(cards))
}
function initialRandomCards(cards){
    //puts default 12 cards in the grid
    //how to make sure they stay in grid format
    let cardTable= document.getElementById("grid-container")
    x=12
    let selected = []
    const times = x => pick => {
        //assign all coordinates in findCard function
        index= Math.floor(Math.random() * (Card.all.length))
        let element = document.createElement("img")
        img.src = "https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/09/dog-landing-hero-sm.jpg?bust=1536935086&width=760"
        // element.setAttribute([idCounter])
        element.onclick= e =>{
            threeClicks(e, cards[index], selected)
            selected.push(Card[index])
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
    })
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
// function subitAttempt(validYN){
//     if (validYN === 1){
//         score++}
//     else {
//         score = score -1 
//     }

//     //establish connection with db, not url
//     fetch("http://localhost:3000/cards",
//         method: "PATCH",
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body:JSON.stringify(
//             tot.score: score
//         )
//     })
//     //change value on front end to score here




//     }
// }












///////////////////////////////////////
////when using canvas///////////

function findCard(index, cards) {
    let addCard= canvas.getContext('2d').drawImage("https://cdn1.imggmi.com/uploads/2019/9/11/8afd7cf21d6551f71409919734470e16-full.png", cards[index].sx, cards[index].sy, cards[index].sWdith, cards[index].sHeight, cards[index].dx, cards[index].dy, cards[index].dWidth, cards[index].dHeight);
    return addCard
}
///////////////////////////////////////