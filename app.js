let ab=document.querySelector(".box");
let b =document.querySelector("body");
ab.classList.add("pop_up");
b.classList.add("rest1");
let ac=document.querySelector("#cb");
ac.onclick=()=>{
    ab.classList.remove("pop_up");
    b.classList.remove("rest1");
}
let a =document.querySelector("#bt1");
let c=document.querySelectorAll(".button1");

let m="w";
localStorage.setItem("mode", m);
a.onclick = () =>{
    if(m==="w"){
        b.classList.add("black");
        b.classList.remove("white");
        m="b";
        console.log(m);
        localStorage.setItem("mode", m);
    }
    else{
        b.classList.add("white");
        b.classList.remove("black");
        m="w";
        console.log(m);
        localStorage.setItem("mode", m);
    }
}
c.forEach((button1) =>{
    button1.addEventListener("click",() =>{
        location.href="page1.html";
    })
})
