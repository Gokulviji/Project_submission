        const player1score=document.getElementById('player0')
		const player2score=document.getElementById('player1')

        const player1totalscore=document.getElementById('player0total');
		const player2totalscore=document.getElementById('player1total');

		const Reset=document.getElementById('reset')
		const Hold=document.getElementById('Hold')

		const firstpl=document.getElementById("firstp")

        var player1=0
		var player2=0


	   player1score.textContent=0;
	   player2score.textContent=0;
	   player1totalscore.textContent=0;
       player2totalscore.textContent=0;

	   let score=[0,0], currenrtScore=0, activePlayer=0,playing=true;


		let cube = document.getElementById('cube');
		let currentscore=0;
		var randomAngle
		
		angleArray = [[0,0,0],[-310,-362,-38],[-400,-320,-2],[135,-217,-88],[-224,-317,5],[-47,-219,-81],[-133,-360,-53]];
			cube.style.animation = 'animate 1.4s linear';
		cube.addEventListener('click',function(e){
		
			randomAngle = Math.floor(Math.random() * 6) + 1;
			
			cube.style.transform = 'rotateX('+angleArray[randomAngle][0]+'deg) rotateY('+angleArray[randomAngle][1]+'deg) rotateZ('+angleArray[randomAngle][2]+'deg)';
			cube.style.transition = '1s linear'
		
			cube.addEventListener('animationend',function(e){
				cube.style.animation = '';
			});

			Addingscore()			
		});



const normal = function(){
       score=[0,0];
	   currenrtScore=0;
	   activePlayer=0;
	   playing=true;

	   player1score.textContent=0;
	   player2score.textContent=0;
	   player1totalscore.textContent=0;
       player2totalscore.textContent=0;
	   document.querySelector("player1").classList.remove('switch')
	   document.querySelector("player0").classList.remove('switch')

}
Reset.addEventListener('click',normal)

// Hold.addEventListener('click',function(){
//         score+=currenrtScore
// 		player1score.textContent=score
//         if(playing){
// 			if(score[activePlayer]>=100){
// 				playing=false
// 			}
// 		}
		
// })


        
       



function Addingscore(){
			if(randomAngle===1 ){
				score[activePlayer]+=currenrtScore
				document.getElementById(`player${activePlayer}`).textContent=score[activePlayer];
				switchPlayer()
			
			}else if(randomAngle!==1 && score[activePlayer]<=100){
				currenrtScore+=randomAngle;
				console.log(randomAngle)
				document.getElementById(`player${activePlayer}total`).textContent=currenrtScore
				document.querySelector(`.player${activePlayer}`).classList.add('switch')
			}else{
				document.getElementById(`win${activePlayer}`).style.display="block"
			}
			
		}



function switchPlayer(){
    
	currenrtScore=0
	player1totalscore.textContent=0;
	player2totalscore.textContent=0;
	document.querySelector(`.player${activePlayer}`).classList.remove('switch')
	if(playing){
        if(activePlayer===0 && score[activePlayer]<=100){

			activePlayer=1
	
		}else if(activePlayer===1 && score[activePlayer]<=100){
			activePlayer=0
		}
		else{
			playing=false
		}
	}
	
	document.querySelector(`.player${activePlayer}`).classList.add('switch')

   
}



 
