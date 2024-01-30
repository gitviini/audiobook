const backward = document.querySelector("#backward")
const play = document.querySelector("#play")
const forward = document.querySelector("#forward")
var audio = document.querySelector("audio")
const capitulo = document.querySelector("#capitulo")
const path = 'books/dom-casmurro/'

var number_cap = 1

statics = {
    play:['bi bi-play-circle-fill', 'bi bi-pause-circle-fill'],
}

var interval = 0

function plaing(){
    let span = document.querySelector("#play span")

    play.classList.toggle('click')

    if (span.className == 'bi bi-play-circle-fill'){
        span.setAttribute('class', statics['play'][1])
        audio.play()
    }
    else{
        clearInterval(interval)
        audio.pause()
        span.setAttribute('class', statics['play'][0])
    }
}
play.addEventListener('click', plaing 
)

forward.addEventListener('click', ()=>{
    if (number_cap >= 10){
        number_cap = 1
    }
    else{
        number_cap++
    }
    audio.src = `${path}${number_cap}.mp3`
    plaing()
    capitulo.innerHTML = `Capitulo ${number_cap}`
})

backward.addEventListener('click', ()=>{
    if (number_cap <= 1){
        number_cap = 10
    }
    else{
        number_cap--
    }
    audio.src = `${path}${number_cap}.mp3`
    plaing()
    capitulo.innerHTML = `Capitulo ${number_cap}`
    console.log(number_cap)
})