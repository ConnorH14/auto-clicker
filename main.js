document.oncontextmenu = new Function("return false;")

let template = /*html*/ `
  <div class="container-fluid py-5 mt-5">
    <div class="row d-flex justify-content-center">
      <div class="col-1 counter-display">
        <div class="counter-container text-center my-3 py-2">
          <p id="click-counter-0">0</p>
        </div>
        <div class="counter-container text-center my-3 py-2">
          <p id="click-counter-1">0</p>
        </div>
        <div class="counter-container text-center my-3 py-2">
          <p id="click-counter-2">0</p>
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
            <button onclick="purchaseAutoClick()" id="auto-clicker" class="btn btn-secondary locked-button">Marine</button>
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

let gruntClicks = 0 // grunt, jackal, elite
let jackalClicks = 0
let eliteClicks = 0

function startGame(){
  const startDisplay = document.getElementById("start-screen")
  startDisplay.classList.add("hidden")

  const gameDisplay = document.getElementById("game-display")
  gameDisplay.innerHTML = template
  //gameUpdate()
}

function targetClick(targetType){
  if(targetType == 'grunt'){
    console.log("grunt was clicked")
  }
  else if(targetType == 'jackal'){
    console.log("jackal was clicked")
  }
  else if(targetType == 'elite'){
    console.log("elite was clicked")
  }
}


