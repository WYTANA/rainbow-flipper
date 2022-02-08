


let change = document.querySelectorAll(".container")
let button = document.getElementById("js-theme")

let reversedMode = false

// button function

button.addEventListener("click", () => {
    if (reversedMode === false) {
        reversedRainbowColors()
        reversedMode = true
    } else {
        originalRainbowColors()
        reversedMode = false
    }
})

// reverse color function here 

const reversedRainbowColors = () => {
    for (let i = 0; i < change.length; i++) {
        let text = change[i].innerText
        let newColor = change[i].style
        if (text === "Red") {
            change[i].innerText = "Purple"
            newColor.backgroundColor = "purple"
        } else if (text === "Orange") {
            change[i].innerText = "Blue"
            newColor.backgroundColor = "blue"
        } else if (text === "Yellow") {
            change[i].innerText = "Green"
            newColor.backgroundColor = "green"
        } else if (text === "Green") {
            change[i].innerText = "Yellow"
            newColor.backgroundColor = "yellow"
        } else if (text === "Blue") {
            change[i].innerText = "Orange"
            newColor.backgroundColor = "orange"
        } else if (text === "Purple") {
            change[i].innerText = "Red"
            newColor.backgroundColor = "red"
        }
    }
    return change
}


// original color function here

const originalRainbowColors = () => {
    for (let i = 0; i < change.length; i++) {
        let text = change[i].innerText
        let newColor = change[i].style
        if (text === "Purple") {
            change[i].innerText = "Red"
            newColor.backgroundColor = "red"
        } else if (text === "Blue") {
            change[i].innerText = "Orange"
            newColor.backgroundColor = "orange"
        } else if (text === "Green") {
            change[i].innerText = "Yellow"
            newColor.backgroundColor = "yellow"
        } else if (text === "Yellow") {
            change[i].innerText = "Green"
            newColor.backgroundColor = "green"
        } else if (text === "Orange") {
            change[i].innerText = "Blue"
            newColor.backgroundColor = "blue"
        } else if (text === "Red") {
            change[i].innerText = "Purple"
            newColor.backgroundColor = "purple"
        }
    }
    return change
}

