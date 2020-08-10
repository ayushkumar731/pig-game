let scores,roundScore,activePlayer,gamePlaying;
// let lastDice;
init();



document.getElementsByClassName('btn-roll')[0].addEventListener('click',function(){
    if(gamePlaying){
        let dice1=Math.floor(Math.random()*6)+1;
        let dice2=Math.floor(Math.random()*6)+1;
        console.log(dice1,dice2);

        document.getElementById('dice-1').style.display='block';
        document.getElementById('dice-2').style.display='block';

        document.getElementById('dice-1').src='./assets/images/dice-'+dice1+'.png';
        document.getElementById('dice-2').src='./assets/images/dice-'+dice2+'.png';

        if(dice1!==1 && dice2!==1){
            roundScore+=dice1+dice2;
            document.getElementById('current-'+activePlayer).textContent=roundScore;
        }else{
           nextPlayer();
    
        }

        /*
        if(dice==6 && lastDice==6){
            scores[activePlayer]=0;
            document.getElementById('score-'+activePlayer).textContent=0;
            nextPlayer();
        }else if(dice!==1){
            roundScore+=dice;
            document.getElementById('current-'+activePlayer).textContent=roundScore;
        }else{
           nextPlayer();
    
        }
        lastDice=dice;
        */
    }
});

document.getElementsByClassName('btn-hold')[0].addEventListener('click',function(){
    if(gamePlaying){
        scores[activePlayer]+=roundScore;
        document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];

        let input=document.getElementsByClassName('final-score')[0].value;
        let winnerScore;
        if(input){
            winnerScore=input;
        }else{
            winnerScore=100;
        }

        if(scores[activePlayer]>=winnerScore){
            document.getElementById('name-'+activePlayer).textContent='Winner!';
            document.getElementById('dice-1').style.display='none';
            document.getElementById('dice-2').style.display='none';

            gamePlaying=false;

            document.getElementsByClassName('player-'+activePlayer+'-panel')[0].classList.add('winner');
            document.getElementsByClassName('player-'+activePlayer+'-panel')[0].classList.remove('active');
        }else{
            nextPlayer();
        }
    }
});

function nextPlayer(){
    activePlayer===0?activePlayer=1:activePlayer=0;

    roundScore=0;
    document.getElementById('current-0').textContent=0;
    document.getElementById('current-1').textContent=0;

    document.getElementsByClassName('player-0-panel')[0].classList.toggle('active');
    document.getElementsByClassName('player-1-panel')[0].classList.toggle('active');

    document.getElementById('dice-1').style.display='none';
    document.getElementById('dice-2').style.display='none';
}

document.getElementsByClassName('btn-new')[0].addEventListener('click',init);

function init(){
    scores=[0,0];
    roundScore=0;
    activePlayer=0;
    gamePlaying=true;

    document.getElementById('dice-1').style.display='none';
    document.getElementById('dice-2').style.display='none';

    document.getElementById('score-0').textContent=0;
    document.getElementById('score-1').textContent=0;
    document.getElementById('current-0').textContent=0;
    document.getElementById('current-1').textContent=0;

    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';

    document.getElementsByClassName('player-0-panel')[0].classList.remove('winner');
    document.getElementsByClassName('player-1-panel')[0].classList.remove('winner');
    document.getElementsByClassName('player-0-panel')[0].classList.remove('active');
    document.getElementsByClassName('player-1-panel')[0].classList.remove('active');
    document.getElementsByClassName('player-0-panel')[0].classList.add('active');


}