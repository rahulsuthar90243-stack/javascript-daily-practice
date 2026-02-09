const result = document.querySelector("#timer");


setInterval(()=>{
const currentTime = Date.now();
const olympicTIme = new Date(2026,2,6).getTime();

let timer = olympicTIme - currentTime;

const day = Math.floor((timer) / (1000 * 60 * 60 * 24));
timer %= 1000*60*60*24;

const hour = Math.floor((timer) / (1000 * 60 * 60));
timer %= 1000*60*60;

const minute = Math.floor((timer) / (1000 * 60));
timer %= 1000*60;

const second = Math.floor((timer) / (1000));
timer %= 1000;

result.textContent = `${day}:day ${hour}:hour ${minute}:minute ${second}:second`
}, 1000)

