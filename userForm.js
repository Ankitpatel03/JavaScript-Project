const myInput=document.getElementById("myInput")
const myInputPass=document.getElementById("myInput-pass")
const button=document.getElementById("button")

button.addEventListener("click",()=>{
    const yourname=myInput.value;
    console.log(yourname);
    const yourPass=myInputPass.value;
    console.log(yourPass);
})
