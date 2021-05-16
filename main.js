document.oncontextmenu = new Function("return false;")

let template = /*html*/ `
  <div class="container-fluid py-5 mt-5">
    <div class="row d-flex justify-content-center">
      <div class="col-1 counter-display">
        <div class="counter-container text-center my-3 py-2">
          <p id="click-counter">0</p>
        </div>
      </div>

      <div class="col-3 text-center mt-3 py-3 d-flex justify-content-center clicker-target-1-col">
        <div onclick="targetClick('grunt')" class="clicker-target-1 my-auto">
        </div>
      </div>
      <div class="col-3 text-center mt-3 py-3 d-flex justify-content-center clicker-target-2-col">
        <div onclick="targetClick('jackal')" class="clicker-target-2 my-auto">
        </div>
      </div>
      <div class="col-3 text-center mt-3 py-3 d-flex justify-content-center clicker-target-3-col">
        <div onclick="targetClick('elite')" class="clicker-target-3 my-auto">
        </div>
      </div>

      <div class="col-1 counter-display">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-12 my-3">
            <button onclick="purchaseMarine()" id="marine-upgrade" class="btn btn-secondary locked-button">Marine</button>
          </div>
          <div class="col-12 my-3">
            <button class="btn btn-secondary locked-button">???</button>
          </div>
          <div class="col-12 my-3">
            <button class="btn btn-secondary locked-button">???</button>
          </div>
          <div class="col-12 my-3">
            <button class="btn btn-secondary locked-button">???</button>
          </div>
        </div>
      </div>
    </div>
  </div>
`

//
// MAIN GAME

let targetClicks = 0 
let autoClickerValue = 0
let clickTrackerDisplay = document.getElementById("click-counter")
let marineButton = document.getElementById("marine-upgrade")

function startGame(){

  const startDisplay = document.getElementById("start-screen")
  startDisplay.classList.add("hidden")

  const gameDisplay = document.getElementById("game-display")
  gameDisplay.classList.remove("hidden")

  setInterval(function gameLoop(){

    targetClicks = targetClicks + autoClickerValue

    if(targetClicks >= 10){
      marineButton.classList.remove("locked-button")
    }else if(targetClicks < 10){
      marineButton.classList.add("locked-button")
    }

    clickTrackerDisplay.innerText = targetClicks
    
  }, 1000);

}

function targetClick(targetType){
  if(targetType == 'grunt'){
    targetClicks++
  }
  else if(targetType == 'jackal'){
    targetClicks = targetClicks + 2

  }else if (targetType == 'elite'){
    targetClicks = targetClicks + 5
  }
  clickTrackerDisplay.innerText = targetClicks
}

function purchaseMarine(){
  autoClickerValue++
  targetClicks = targetClicks - 10
  if(targetClicks < 10){
    marineButton.classList.add("locked-button")
  }
}





