//GEnerate a random number fro, 1 to 6
const firstRandomNum = Math.floor(Math.random()*6)+1;

//GEnerating images from 1 to 6
const firstDiceImage = 'images/dice' + firstRandomNum + '.png';


document.querySelectorAll('img')[0].setAttribute('src',firstDiceImage);

//GEnerate a random number fro, 1 to 6
const secondRandomNum = Math.floor(Math.random()*6)+1;

//GEnerating images from 1 to 6
const secondDiceImage = 'images/dice' + secondRandomNum + '.png';


document.querySelectorAll('img')[1].setAttribute('src',secondDiceImage);

if(firstRandomNum > secondRandomNum){

	document.querySelector('h1').innerHTML = 'The Winner is User 1';
}
else if(firstRandomNum < secondRandomNum){
	
	document.querySelector('h1').innerHTML = 'The Winner is User 2';
}
else
{
	document.querySelector('h1').innerHTML = "It's Draw";
	
}