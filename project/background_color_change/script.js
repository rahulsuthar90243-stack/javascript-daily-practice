const parent = document.getElementById("parent");
const body = document.querySelector("body")

parent.addEventListener("click", (e)=>{
    // console.log(e.target);
    const child = e.target;
    body.style.backgroundColor = child.id;
})