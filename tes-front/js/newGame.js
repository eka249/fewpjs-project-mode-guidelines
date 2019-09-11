document.addEventListener("DOMContentLoaded", newGame)

function newGame(){
    
}

document.addEventListener('click', e => {
    threeClicks(e)
}
    
function threeClicks(e){
    if (e.target.classList.contains("card-table") && (e.detail === 3)) {
        submitAttempt()
    }
}

