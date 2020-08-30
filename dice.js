var randomsrc = Math.random();
randomnum1 = Math.floor(randomsrc * 6) + 1;
var randomsrc = Math.random();
randomnum2 = Math.floor(randomsrc * 6) + 1;
document.querySelector('.img1').setAttribute('src', 'images/dice' + randomnum1 + '.png');
document.querySelector('.img2').setAttribute('src', 'images/dice' + randomnum2 + '.png');
if (randomnum1 > randomnum2) {
    document.querySelector('h1').innerHTML = "Player 1 wins!"
} else if (randomnum1 < randomnum2) {
    document.querySelector('h1').innerHTML = "Player 2 wins!"
} else {
    document.querySelector('h1').innerHTML = "Draw!"
}
console.log(randomnum);