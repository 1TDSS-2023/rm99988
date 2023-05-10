"use strict"

const button =[...document.getElementsByName("button")];
const body = [...document.getElementsByName("body")];
const input = [...document.getElementsByName("input")];
const list = [...document.getElementsByName("ul")];
const img = [...document.getElementsByName("img")];
const h2 = [...document.getElementsByName("h2")];

button[0].addEventListener("click", () =>{
    let r=0, g=0, b=0;
    r=Math.round(Math.random()*255);
    g=Math.round(Math.random()*255);
    b=Math.round(Math.random()*255);


    body[0].setAttribute("Style", `background-color:rgb(${r},${g},${b});`);


});

//2

const newlist = document.createElement('li');

button[1].addEventListener("click", () =>{

    let conteudo = input[0].value;
    console.log(conteudo);
    list[0].appendChild(newlist).innerHTML = conteudo;
});

//3

button[2].addEventListener("click", () =>{
    img[0].src =""
})

//4 
button[3].addEventListener("click", () =>{
    h2[0].innerHTML="eu nao aguento mais IASIOTJASJI"
})
//5

button[4].addEventListener("click", () =>{

    img[1].hidden = true;

})