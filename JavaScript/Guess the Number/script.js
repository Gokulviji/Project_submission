const mini=1;
const max=100;
let attempt=0;
const randomNumber=Math.floor(Math.random()*(mini,max+1));
console.log(randomNumber);
const userinput=document.getElementById("usernumber");
const Showprocess=document.getElementById("status");
const Showattempt=document.getElementById("attempt")
const images=document.querySelector(".Celimg")
console.log(images)


function inputnumber(){
    
    var input=userinput.value;
    var input=Number(input) 
    attempt++

    if(input>max || input<mini){
        Showprocess.innerHTML="please enter a value number"
    }
    else if(input === randomNumber){
        Showprocess.innerHTML="given number is correct"
        Showattempt.innerText=attempt
        images.style.display="block"
    }
    else if(input>randomNumber){
        Showprocess.innerHTML="less than given number"
    }else{
        Showprocess.innerHTML="greater than given number"
    }
}
