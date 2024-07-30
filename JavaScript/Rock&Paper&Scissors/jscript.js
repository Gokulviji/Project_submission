const randomNumber=Math.floor(Math.random()*(1,2+1));
const computerlist=["rock","paper","sissor"];
const computerselect=computerlist[randomNumber];
const showresult=document.getElementById("result");
const selectusers=document.getElementById("rock")
const selectcomputers=document.getElementById("rps")
console.log(computerselect)





function checkgame(input){
   
    if(input === computerselect){
      showresult.innerHTML="Match Draw"
      selectusers.classList.remove('hidden')
      selectusers.src=`images/${computerselect}.gif`
      selectcomputers.classList.remove('hidden')
      selectcomputers.src=`images/${computerselect}.gif`
    }else if(input === "rock"){
          selectusers.classList.remove('hidden')
          selectusers.src=`images/rock.gif`
         if(computerselect === "paper"){   
            showresult.innerHTML="computer won"
            selectcomputers.classList.remove('hidden')
            selectcomputers.src=`images/paper.gif`
         }
        else{
            showresult.innerHTML="you won"
            selectcomputers.classList.remove('hidden')
            selectcomputers.src=`images/sissor.gif`
        }
    }else if(input === "paper"){
        selectusers.classList.remove('hidden')
        selectusers.src=`images/paper.gif`
        if(computerselect === "sissor"){   
           showresult.innerHTML="computer won"
           selectcomputers.classList.remove('hidden')
           selectcomputers.src=`images/sissor.gif`

        }
       else{
           showresult.innerHTML="you won"
           selectcomputers.classList.remove('hidden')
           selectcomputers.src=`images/rock.gif`
       }
   }else{
    selectusers.classList.remove('hidden')
        selectusers.src=`images/sissor.gif`
    if(computerselect === "rock"){   
        showresult.innerHTML="computer won"
        selectcomputers.classList.remove('hidden')
        selectcomputers.src=`images/rock.gif`
     }
    else{
        showresult.innerHTML="you won"
        selectcomputers.classList.remove('hidden')
        selectcomputers.src=`images/paper.gif`
    }
   }
       
}
