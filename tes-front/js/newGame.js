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
        index=  Math.floor(Math.random() * (Card.all.length))
        element.img= cards[index].image
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





function draw() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
  
    purple, square, shaded, 1,         0, 0, 55, 100, 50, 20, 87, 104);
    let ptd1 = ctx.drawImage(document.getElementById('source'), 57, 0, 55, 100, 50, 20, 87, 104);
    let pod1 = ctx.drawImage(document.getElementById('source'), 115, 0, 55, 100, 50, 20, 87, 104); 
    let gsd1 = ctx.drawImage(document.getElementById('source'), 173, 0, 55, 100, 50, 20, 87, 104);
    let gtd1 = ctx.drawImage(document.getElementById('source'), 230, 0, 55, 100, 50, 20, 87, 104);
    let god1 = ctx.drawImage(document.getElementById('source'), 287, 0, 55, 100, 50, 20, 87, 104);
    let rsd1 = ctx.drawImage(document.getElementById('source'), 344, 0, 55, 100, 50, 20, 87, 104);
    let rtd1 = ctx.drawImage(document.getElementById('source'), 402, 0, 55, 100, 50, 20, 87, 104);
    let rod1 = ctx.drawImage(document.getElementById('source'), 458, 0, 55, 100, 50, 20, 87, 104);
    
    let psd2 = ctx.drawImage(document.getElementById('source'), 0, 100, 55, 100, 50, 20, 87, 104);
    let ptd2 = ctx.drawImage(document.getElementById('source'), 57, 100, 55, 100, 50, 20, 87, 104);
    let pod2 = ctx.drawImage(document.getElementById('source'), 115, 100, 55, 100, 50, 20, 87, 104); 
    let gsd2 = ctx.drawImage(document.getElementById('source'), 173, 100, 55, 100, 50, 20, 87, 104);
    let gtd2 = ctx.drawImage(document.getElementById('source'), 230, 100, 55, 100, 50, 20, 87, 104);
    let god2 = ctx.drawImage(document.getElementById('source'), 287, 100, 55, 100, 50, 20, 87, 104);
    let rsd2 = ctx.drawImage(document.getElementById('source'), 344, 100, 55, 100, 50, 20, 87, 104);
    let rtd2 = ctx.drawImage(document.getElementById('source'), 402, 100, 55, 100, 50, 20, 87, 104);
    let rod2 = ctx.drawImage(document.getElementById('source'), 458, 100, 55, 100, 50, 20, 87, 104);
    
    let psd3 = ctx.drawImage(document.getElementById('source'), 0, 202, 55, 100, 50, 20, 87, 104);
    let ptd3 = ctx.drawImage(document.getElementById('source'), 57, 202, 55, 100, 50, 20, 87, 104);
    let pod3 = ctx.drawImage(document.getElementById('source'), 115, 202, 55, 100, 50, 20, 87, 104); 
    let gsd3 = ctx.drawImage(document.getElementById('source'), 173, 202, 55, 100, 50, 20, 87, 104);
    let gtd3 = ctx.drawImage(document.getElementById('source'), 230, 202, 55, 100, 50, 20, 87, 104);
    let god3 = ctx.drawImage(document.getElementById('source'), 287, 202, 55, 100, 50, 20, 87, 104);
    let rsd3 = ctx.drawImage(document.getElementById('source'), 344, 202, 55, 100, 50, 20, 87, 104);
    let rtd3 = ctx.drawImage(document.getElementById('source'), 402, 202, 55, 100, 50, 20, 87, 104);
    let rod3 = ctx.drawImage(document.getElementById('source'), 458, 202, 55, 100, 50, 20, 87, 104);
    
    let pso1 = ctx.drawImage(document.getElementById('source'), 0, 305, 55, 100, 50, 20, 87, 104);
    let pto1 = ctx.drawImage(document.getElementById('source'), 57, 305, 55, 100, 50, 20, 87, 104);
    let poo1 = ctx.drawImage(document.getElementById('source'), 115, 305, 55, 100, 50, 20, 87, 104); 
    let gso1 = ctx.drawImage(document.getElementById('source'), 173, 305, 55, 100, 50, 20, 87, 104);
    let gto1 = ctx.drawImage(document.getElementById('source'), 230, 305, 55, 100, 50, 20, 87, 104);
    let goo1 = ctx.drawImage(document.getElementById('source'), 287, 305, 55, 100, 50, 20, 87, 104);
    let rso1 = ctx.drawImage(document.getElementById('source'), 344, 305, 55, 100, 50, 20, 87, 104);
    let rto1 = ctx.drawImage(document.getElementById('source'), 402, 305, 55, 100, 50, 20, 87, 104);
    let roo1 = ctx.drawImage(document.getElementById('source'), 458, 305, 55, 100, 50, 20, 87, 104);
    
    let pso2 = ctx.drawImage(document.getElementById('source'), 0, 407, 55, 100, 50, 20, 87, 104);
    let pto2 = ctx.drawImage(document.getElementById('source'), 57, 407, 55, 100, 50, 20, 87, 104);
    let poo2 = ctx.drawImage(document.getElementById('source'), 115, 407, 55, 100, 50, 20, 87, 104); 
    let gso2 = ctx.drawImage(document.getElementById('source'), 173, 407, 55, 100, 50, 20, 87, 104);
    let gto2 = ctx.drawImage(document.getElementById('source'), 230, 407, 55, 100, 50, 20, 87, 104);
    let goo2 = ctx.drawImage(document.getElementById('source'), 287, 407, 55, 100, 50, 20, 87, 104);
    let rso2 = ctx.drawImage(document.getElementById('source'), 344, 407, 55, 100, 50, 20, 87, 104);
    let rto2 = ctx.drawImage(document.getElementById('source'), 402, 407, 55, 100, 50, 20, 87, 104);
    let roo2 = ctx.drawImage(document.getElementById('source'), 458, 407, 55, 100, 50, 20, 87, 104);
    
    let pso3 = ctx.drawImage(document.getElementById('source'), 0, 510, 55, 100, 50, 20, 87, 104);
    let pto3 = ctx.drawImage(document.getElementById('source'), 57, 510, 55, 100, 50, 20, 87, 104);
    let poo3 = ctx.drawImage(document.getElementById('source'), 115, 510, 55, 100, 50, 20, 87, 104); 
    let gso3 = ctx.drawImage(document.getElementById('source'), 173, 510, 55, 100, 50, 20, 87, 104);
    let gto3 = ctx.drawImage(document.getElementById('source'), 230, 510, 55, 100, 50, 20, 87, 104);
    let goo3 = ctx.drawImage(document.getElementById('source'), 287, 510, 55, 100, 50, 20, 87, 104);
    let rso3 = ctx.drawImage(document.getElementById('source'), 344, 510, 55, 100, 50, 20, 87, 104);
    let rto3 = ctx.drawImage(document.getElementById('source'), 402, 510, 55, 100, 50, 20, 87, 104);
    let roo3 = ctx.drawImage(document.getElementById('source'), 458, 510, 55, 100, 50, 20, 87, 104);
    
    let pss1 = ctx.drawImage(document.getElementById('source'), 0, 613, 55, 100, 50, 20, 87, 104);
    let pts1 = ctx.drawImage(document.getElementById('source'), 57, 613, 55, 100, 50, 20, 87, 104);
    let pos1 = ctx.drawImage(document.getElementById('source'), 115, 613, 55, 100, 50, 20, 87, 104); 
    let gss1 = ctx.drawImage(document.getElementById('source'), 173, 613, 55, 100, 50, 20, 87, 104);
    let gts1 = ctx.drawImage(document.getElementById('source'), 230, 613, 55, 100, 50, 20, 87, 104);
    let gos1 = ctx.drawImage(document.getElementById('source'), 287, 613, 55, 100, 50, 20, 87, 104);
    let rss1 = ctx.drawImage(document.getElementById('source'), 344, 613, 55, 100, 50, 20, 87, 104);
    let rts1 = ctx.drawImage(document.getElementById('source'), 402, 613, 55, 100, 50, 20, 87, 104);
    let ros1 = ctx.drawImage(document.getElementById('source'), 458, 613, 55, 100, 50, 20, 87, 104);
    
    let pss2 = ctx.drawImage(document.getElementById('source'), 0, 716, 55, 100, 50, 20, 87, 104);
    let pts2 = ctx.drawImage(document.getElementById('source'), 57, 716, 55, 100, 50, 20, 87, 104);
    let pos2 = ctx.drawImage(document.getElementById('source'), 115, 716, 55, 100, 50, 20, 87, 104); 
    let gss2 = ctx.drawImage(document.getElementById('source'), 173, 716, 55, 100, 50, 20, 87, 104);
    let gts2 = ctx.drawImage(document.getElementById('source'), 230, 716, 55, 100, 50, 20, 87, 104);
    let gos2 = ctx.drawImage(document.getElementById('source'), 287, 716, 55, 100, 50, 20, 87, 104);
    let rss2 = ctx.drawImage(document.getElementById('source'), 344, 716, 55, 100, 50, 20, 87, 104);
    let rts2 = ctx.drawImage(document.getElementById('source'), 402, 716, 55, 100, 50, 20, 87, 104);
    let ros2 = ctx.drawImage(document.getElementById('source'), 458, 716, 55, 100, 50, 20, 87, 104);
    
    let pss3 = ctx.drawImage(document.getElementById('source'), 0, 819, 55, 100, 50, 20, 87, 104);
    let pts3 = ctx.drawImage(document.getElementById('source'), 57, 819, 55, 100, 50, 20, 87, 104);
    let pos3 = ctx.drawImage(document.getElementById('source'), 115, 819, 55, 100, 50, 20, 87, 104); 
    let gss3 = ctx.drawImage(document.getElementById('source'), 173, 819, 55, 100, 50, 20, 87, 104);
    let gts3 = ctx.drawImage(document.getElementById('source'), 230, 819, 55, 100, 50, 20, 87, 104);
    let gos3 = ctx.drawImage(document.getElementById('source'), 287, 819, 55, 100, 50, 20, 87, 104);
    let rss3 = ctx.drawImage(document.getElementById('source'), 344, 819, 55, 100, 50, 20, 87, 104);
    let rts3 = ctx.drawImage(document.getElementById('source'), 402, 819, 55, 100, 50, 20, 87, 104);
    let ros3 = ctx.drawImage(document.getElementById('source'), 458, 819, 55, 100, 50, 20, 87, 104);
    
    // Draw frame
    ctx.drawImage(document.getElementById('frame'), 0, 0);
  }
  

