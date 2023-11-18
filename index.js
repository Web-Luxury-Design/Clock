let totalSecond;
let interval;

const Timer=()=>{
    let minute=Math.floor(totalSecond/60)
    let second=totalSecond%60
    ShowTimer.textContent=`${minute}:${second<10 ? "0"+second :second}`
}
const ColorRandom=()=>{
    red=Math.round(Math.random()*255)
    green=Math.round(Math.random()*255)
    blue=Math.round(Math.random()*255)
    InputNumber.style.backgroundColor=`rgb(${red},${green},${blue})`
    InputNumber.style.scale="1.2"
    setTimeout(() => {
        InputNumber.style.scale="1"
    }, 900);
}

TimerContainer.addEventListener("submit",(e)=>{
    e.preventDefault()
    if (InputNumber.value>0) {
        totalSecond=InputNumber.value*60;
        InputNumber.value=""
        clearInterval(interval)
        interval=setInterval(() => {
            Timer()
            totalSecond--
            if (totalSecond===0) {
                clearInterval(interval)
                ShowTimer.textContent="Terminer"
                ShowTimer.style.color="red"
                ShowTimer.style.scale="1.2"
                ShowTimer.style.transition="1s ease"
            }
            ColorRandom()
        }, 1000);   
    } else {
        alert("veuiller choisir un nombre plus grand que 0")
    }
})