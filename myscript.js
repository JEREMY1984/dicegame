/// random player 1 dice



/// random player 2 dice




var runGame = document.querySelector('header h1');

runGame.addEventListener('click',function(){                    /// run game after click

    var imgPlayerTwo = document.querySelector('.playerTwo img');
    var rNum2 = Math.floor(Math.random()*6)+1;
    imgPlayerTwo.src = './images/dice' + rNum2 + '.png';

    var imgPlayerOne = document.querySelector('.playerOne img');
    var rNum1 = Math.floor(Math.random()*6)+1;
    imgPlayerOne.src = './images/dice' + rNum1 + '.png';

    if(rNum1 > rNum2){
        document.querySelector('header h1').innerHTML = "Player one wins!"
    } else if (rNum1 < rNum2){
        document.querySelector('header h1').innerHTML = 'Player two wins!'
    } else {
        document.querySelector('header h1').innerHTML = "DRAW!"
    }

})


/// show result after compare player one and two result

