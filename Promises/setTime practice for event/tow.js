
const  myName = (()=>{
    console.log("Rahul")
})

const changeText = function(){
    document.querySelector("h1").innerHTML = "Jut Code It";
}

const change = setTimeout(changeText, 2000)

document.querySelector("#stop").addEventListener("click", function(){
    clearTimeout(change);
    console.log("STOPPED");
})
document.querySelector("#run").addEventListener("click",(()=>{
    setTimeout(changeText, 2000)
    console.log("RUNNING");
}))