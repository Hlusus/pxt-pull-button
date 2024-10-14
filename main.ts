let data: number = 0
basic.forever(function () {
    data = input.buttonIsPressed(Button.A) ? 1 :0
console.logValue("data ", data)
basic.pause(1)
})
