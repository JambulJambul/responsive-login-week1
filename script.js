function closeEye() {
    let x = document.getElementById("on")
    x.style.display = "none"
    let y = document.getElementById("off")
    y.style.display = "block"
    let z = document.getElementById("password-field")
    z.type = "text"
}

function openEye() {
    let x = document.getElementById("on")
    x.style.display = "block"
    let y = document.getElementById("off")
    y.style.display = "none"
    let z = document.getElementById("password-field")
    z.type = "password"
}