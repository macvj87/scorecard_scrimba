// Variable Declarations
let homenum = 0
let guestnum = 0
let num1 = 1
let num2 = 2
let num3 = 3
let homesumel = document.getElementById("home-el")
let guestsumel = document.getElementById("guest-el")

// Variable assignments
document.getElementById("home-el").textContent = homenum
document.getElementById("guest-el").textContent = guestnum


// Functions for HomeScore
function add1() {
    homenum += num1
    homesumel.textContent = homenum
}

function add2() {
    homenum += num2
    homesumel.textContent = homenum
}

function add3() {
    homenum += num3
    homesumel.textContent = homenum
}

// Functions for GuestScore
function gadd1() {
    guestnum += num1
    guestsumel.textContent = guestnum
}

function gadd2() {
    guestnum += num2
    guestsumel.textContent = guestnum
}

function gadd3() {
    guestnum += num3
    guestsumel.textContent = guestnum
}

// function to reset the score to 0

function resetscore() {
    homenum = 0
    guestnum = 0
    homesumel.textContent = homenum
    guestsumel.textContent = guestnum
}