input.onButtonPressed(Button.A, function () {
    steps = 0
    basic.showNumber(steps)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(steps * 2)
    basic.showString("ft")
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
    basic.showNumber(steps)
    if (steps == 5) {
        basic.showIcon(IconNames.Happy)
    }
})
let steps = 0
steps = 0
