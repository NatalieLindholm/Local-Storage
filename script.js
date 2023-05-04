const myLang = document.getElementById('chosenLang')

function finClick() {
    localStorage.setItem("lang", "fin")
    location.reload()
}

function sveClick() {
    localStorage.setItem("lang", "sve")
    location.reload()
}

function engClick() {
    localStorage.setItem("lang", "eng")
    location.reload()
}


myLang.innerText = `${localStorage.getItem('lang')}`