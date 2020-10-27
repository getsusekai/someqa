let userChoice
let result = ''
let coinSide = ''
let victory = 0
let losing = 0
let luck = 0
let luckBooster = 0
let realLuck = 50+luck*100

function setHead(){
    userChoice = 1
    luckBooster = -luck
    document.getElementById("choice").innerHTML = "Head"
}

function setTail(){
    userChoice = 2
    luckBooster = luck
    document.getElementById("choice").innerHTML = "Tail"
}

function flip() {
    let multiplier = document.getElementById('multiplier').value
    while (multiplier >= 1) {
        let coin = Math.round((Math.random() + luckBooster) + 1)
        if (coin === 1) {
            coinSide = "Head"
        } else if (coin === 2) {
            coinSide = "Tail"
        }
        if ((coin === userChoice) && (Number.isInteger(userChoice))) {
            document.getElementById("coin").src="img/1.png"
            victory += 1
            result = 'Victory! (YOU) ' + victory + (' : ') + losing + (' (UN LUCK)')
            showResult(coinSide, result)
        } else if ((coin !== userChoice) && (Number.isInteger(userChoice))){
            document.getElementById("coin").src="img/2.png"
            losing += 1
            result = 'Fail! (YOU) ' + victory + (' : ') + losing + (' (UN LUCK)')
            showResult(coinSide, result)
        } else {
            result = 'Choose side, please!'
            showResult(coinSide, result)
        }
        multiplier -= 1
    }
}

function showResult(coinSide, result) {
    document.getElementById("flipResult").innerHTML = coinSide
    document.getElementById("showLuck").innerHTML = String(Math.floor(realLuck))+'%'
    document.getElementById("result").innerHTML = result
}

function getLuck(){
    if ((victory - losing >= 3) && (Math.floor(50+luck*100) < 100)) {
        victory -= 3
        luck += 0.01
        if (userChoice === 1){
            luckBooster= -luck
        } else if (userChoice === 2) {
            luckBooster = luck
        }
        realLuck = 50+luck*100
        document.getElementById("showLuck").innerHTML = String(Math.floor(realLuck))+'%'
        result = 'Luck increased! (YOU) ' + victory + (' : ') + losing + (' (UN LUCK)')
        document.getElementById("result").innerHTML = result
    } else if (Math.floor(realLuck) === 100) {
        alert("Your luck can't be more than 100%! Sounds sad ;(")
    }else {
        alert("You don't have enough positive difference between wins and fails! (minimum 3)")
    }
}

function reset(){
    userChoice = undefined
    victory = 0
    losing = 0
    luck = 0
    luckBooster = 0
    realLuck = 50+luck*100
    result = 'Reseted! (YOU) ' + victory + (' : ') + losing + (' (WORLD)')
    document.getElementById("choice").innerHTML = ''
    document.getElementById("flipResult").innerHTML = ''
    document.getElementById("showLuck").innerHTML = String(realLuck)+'%'
    document.getElementById("result").innerHTML = result
}
