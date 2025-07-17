function getColor(){
    const randomNumber=Math.floor(Math.random()*16777215);
    const randomCode= "#"+randomNumber.toString(16);
    document.body.style.backgroundColor=randomCode;
    document.getElementById("code").innerHTML=randomCode;
    navigator.clipboard.writeText(randomCode);
}
// call using addEventListener 
document.getElementById("btn").addEventListener('click',getColor);

getColor();// direct call