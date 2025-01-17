const clock = document.querySelector("h2#clock");
// clock.innerText = "sss"

function getClock() {
    const date = new Date();
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${min}:${sec}`;
}
getClock();
setInterval(getClock, 1000);