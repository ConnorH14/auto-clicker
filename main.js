document.oncontextmenu = new Function("return false;")

//
// MAIN GAME

let targetClicks = 0
let clickTrackerDisplay = document.getElementById("click-counter")

let gruntTarget = document.getElementById("grunt-target")
let jackalTarget = document.getElementById("jackal-target")
let eliteTarget = document.getElementById("elite-target")

let gunValue = 1
let gunPrice = 5
let gunButton = document.getElementById("gun-upgrade")
let gunToken = document.getElementById("gun-token")

let autoClickerValue = 0
let marineButton = document.getElementById("marine-upgrade")
let marinePrice = 10
let marineToken = document.getElementById("marine-token")

let eliteValue = 90
let elitePrice = 20
let eliteButton = document.getElementById("elite-upgrade")
let eliteToken = document.getElementById("elite-token")

let spartanValue = 0
let spartanPrice = 1000
let spartanButton = document.getElementById("spartan-upgrade")
let spartanToken = document.getElementById("spartan-token")

marineButton.innerText = `Marine: ${marinePrice}`
gunButton.innerText = `Bigger Gun!!! ${gunPrice}`
eliteButton.innerText = `More Elites: ${elitePrice}`
spartanButton.innerText = `Spartan: ${spartanPrice}`

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

    // PURCHASE ELITE
    if(targetClicks >= elitePrice && eliteValue >= 70){
      eliteButton.classList.remove("locked-button")
    }else if(targetClicks < elitePrice){
      eliteButton.classList.add("locked-button")
    }

    // PURCHASE SPARTAN
    if(targetClicks >= spartanPrice && spartanPrice <= 1000){
      spartanButton.classList.remove("locked-button")
    }else if(targetClicks < spartanPrice){
      spartanButton.classList.add("locked-button")
    }

    clickTrackerDisplay.innerText = targetClicks
    
  }, 1000);

  setInterval(function targetLoop(){
    let enemyGen = Math.floor(Math.random(1, 100) * 100)

    gruntTarget.classList.add("locked-target")
    jackalTarget.classList.add("locked-target")
    eliteTarget.classList.add("locked-target")

    if(enemyGen < 40){
      gruntTarget.classList.remove("locked-target")
    }
    if(enemyGen >= 40 && enemyGen < eliteValue){
      jackalTarget.classList.remove("locked-target")
    }
    if(enemyGen >= eliteValue){
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
  gunToken.innerHTML += `<img src="assets/ar-token.png" class="gun-token" alt=""></img>`
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
  marineToken.innerHTML += `<img src="assets/marine-token.png" class="marine-token" alt=""></img>`
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

function purchaseElite(){
  eliteToken.innerHTML += `<img src="assets/elite-token.png" class="elite-token" alt=""></img>`
  targetClicks = targetClicks - elitePrice
  elitePrice = elitePrice * 2
  eliteButton.innerText = `More Elites: ${elitePrice}`
  eliteValue = eliteValue - 10
  if(targetClicks < elitePrice){
    eliteButton.classList.add("locked-button")
  }
  if(eliteValue < 70){
    eliteButton.innerText = `More Elites: Sold Out`
    eliteButton.classList.add("locked-button")
  }

}

function purchaseSpartan(){
  spartanToken.innerHTML += `<img src="assets/spartan-token.png" class="spartan-token" alt=""></img>`
  targetClicks = targetClicks - spartanPrice
  spartanPrice = spartanPrice + 1
  spartanButton.innerText = `Spartan: ${spartanPrice}`
  autoClickerValue = autoClickerValue * 20
  if(targetClicks < spartanPrice){
    marineButton.classList.add("locked-button")
  }
  if(spartanPrice > 1000){
    spartanButton.innerText = `Spartan: Sold Out`
    spartanButton.classList.add("locked-button")
  }
}