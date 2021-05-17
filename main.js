document.oncontextmenu = new Function("return false;")

//
// MAIN GAME

let targetClicks = 0

let gruntTarget = document.getElementById("grunt-target")
let jackalTarget = document.getElementById("jackal-target")
let eliteTarget = document.getElementById("elite-target")

let gunValue = 1
let gunPrice = 5
let gunButton = document.getElementById("gun-upgrade")

let autoClickerValue = 0
let clickTrackerDisplay = document.getElementById("click-counter")
let marineButton = document.getElementById("marine-upgrade")
let marinePrice = 10

marineButton.innerText = `Marine: ${marinePrice}`
gunButton.innerText = `Bigger Gun!!! ${gunPrice}`

function startGame(){

  const startDisplay = document.getElementById("start-screen")
  startDisplay.classList.add("hidden")

  const gameDisplay = document.getElementById("game-display")
  gameDisplay.classList.remove("hidden")

  setInterval(function gameLoop(){

    targetClicks = targetClicks + autoClickerValue

    // PURCHASE GUN

    if(targetClicks >= gunPrice && gunPrice < 500){
      gunButton.classList.remove("locked-button")
    }else if(targetClicks < gunPrice){
      gunButton.classList.add("locked-button")
    }

    // PURCHASE MARINE

    if(targetClicks >= marinePrice && marinePrice < 1000){
      marineButton.classList.remove("locked-button")
    }else if(targetClicks < marinePrice){
      marineButton.classList.add("locked-button")
    }

    clickTrackerDisplay.innerText = targetClicks
    
  }, 1000);

  setInterval(function test(){
    let enemyGen = Math.floor(Math.random(1, 100) * 100)
    gruntTarget.classList.add("locked-target")
    jackalTarget.classList.add("locked-target")
    eliteTarget.classList.add("locked-target")
    if(enemyGen < 50){
      gruntTarget.classList.remove("locked-target")
    }
    if(enemyGen >= 50 && enemyGen < 90){
      jackalTarget.classList.remove("locked-target")
    }
    if(enemyGen >= 90){
      eliteTarget.classList.remove("locked-target")
    }
  }, 3000)

}

function targetClick(targetType){
  if(targetType == 'grunt'){
    targetClicks = targetClicks + gunValue
  }
  else if(targetType == 'jackal'){
    targetClicks = targetClicks + (gunValue * 2)

  }else if (targetType == 'elite'){
    targetClicks = targetClicks + (gunValue * 3)
  }
  clickTrackerDisplay.innerText = targetClicks
}

//
// ITEMS

function purchaseGun(){
  targetClicks = targetClicks - gunPrice
  gunPrice = gunPrice * 2
  gunButton.innerText = `Bigger Gun!!! ${gunPrice}`
  gunValue++
  if(targetClicks < gunPrice){
    gunButton.classList.add("locked-button")
  }
  if(gunPrice > 500){
    gunButton.innerText = `Bigger Gun!!! Sold Out`
    gunButton.classList.add("locked-button")
  }
}

function purchaseMarine(){
  targetClicks = targetClicks - marinePrice
  marinePrice = marinePrice * 2
  marineButton.innerText = `Marine: ${marinePrice}`
  autoClickerValue++
  if(targetClicks < marinePrice){
    marineButton.classList.add("locked-button")
  }
  if(marinePrice > 1000){
    marineButton.innerText = `Marine: Sold Out`
    marineButton.classList.add("locked-button")
  }
}







