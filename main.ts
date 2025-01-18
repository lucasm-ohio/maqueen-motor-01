function TurnLeft (num: number) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, speed)
    basic.pause(num)
    maqueen.motorStop(maqueen.Motors.All)
}
function GoForward (num: number) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed)
    basic.pause(num)
    maqueen.motorStop(maqueen.Motors.All)
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "LEFT") {
        TurnLeft(250)
        basic.pause(5000)
        TurnLeft(250)
        basic.pause(5000)
        TurnLeft(600)
    } else if (receivedString == "RIGHT") {
        TurnRight(250)
        basic.pause(5000)
        TurnRight(250)
        basic.pause(5000)
        TurnRight(600)
        basic.pause(5000)
    } else if (false) {
    	
    } else if (false) {
    	
    } else {
    	
    }
})
function TurnRight (num: number) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, speed)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed)
    basic.pause(num)
    maqueen.motorStop(maqueen.Motors.All)
}
let speed = 0
basic.showIcon(IconNames.Rollerskate)
radio.setGroup(1)
speed = 120
basic.forever(function () {
	
})
