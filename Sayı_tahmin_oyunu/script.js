'use strict'

let secretNumber = Math.trunc(Math.random()*20)
 let score =20;
 let highscore= 0;

 const displaymessage = function(message){
     document.querySelector('.message').textContent = message;
 };

 document.querySelector('.check').addEventListener('click',function(){

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);

    console.log(secretNumber,typeof secretNumber);



    if(!guess)
    {displaymessage('bir sayı giriniz');}


    //sayılar eşleşirse
    else if (guess === secretNumber){
        displaymessage('DOĞRU TAHMİN,TEBRİKLER');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#7cfc00';
        document.querySelector('.number').style.width ='30rem';

            if(score > highscore){
                highscore = score;

                document.querySelector('.highscore').textContent = highscore;

            }

    }

    //sayılar eşleşmiyorsa

    else if (guess !== secretNumber) {

        if(score>1){
            displaymessage(guess > secretNumber ? 'çok yüksek':'çok düşük');
            document.querySelector('.score').textContent = score;

        }
        else {
            displaymessage('oyunu kaybettiniz');
            document.querySelector('.score').textContent = '0';
        }
    }


 });

  document.querySelector('.again').addEventListener('click',function(){
      score = 20;
      secretNumber = Math.trunc(Math.random()*20)+1;

      displaymessage('Tahmin Ediliyor...');
      document.querySelector('.score').textContent = score;
      document.querySelector('.number').textContent = '?';
      document.querySelector('.guess').value = '';


      document.querySelector('body').style.backgroundColor = '#000000';
      document.querySelector('.number').style.width = '15rem';

  })
