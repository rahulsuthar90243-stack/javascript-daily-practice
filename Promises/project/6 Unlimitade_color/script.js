const randomColor = function(){
    const hax = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        const random = Math.floor(Math.random() * 16)
        color += hax[random];
    }
    return color;
}

let intervar;

const startChangeColor = function(){

if (!intervar){{
intervar = setInterval(startBgColor, 1000)
}}
function startBgColor(){
    document.body.style.backgroundColor = randomColor();
}
console.log("Start");

}


const stopChangeColor = function(){
 clearInterval(intervar);
 intervar = null;
 console.log("Stop");
}


document.querySelector("#start").addEventListener("click", startChangeColor);
document.querySelector("#stop").addEventListener("click", stopChangeColor);