/*
 * Create a list that holds all of your cards
 */
 // this variable is an array  that holds the content of the cards
let cardArray =["diamond", "anchor", "bolt", "cube", "leaf", "paper-plane", "bicycle", "bomb",    
			"diamond", "anchor", "bolt", "cube", "leaf", "paper-plane", "bicycle", "bomb"] ;
let allCardsOpened=[]; 
let timer = 0;

let cardsOpened= []; 
$rating = $('.fa-star');
stars3 = 15;
stars2 = 19;
stars1 = 23;


// Shuffle function from http://stackoverflow.com/a/2450976

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// function to create a new deck
function gameStart(){
	let allCards = shuffle(cardArray);
	$('.deck').empty();
	match = 0;
	$('.moves').text('0');
	for (let  i = 0; i < allCards.length; i++) {
		$('.deck').append($('<li class="card"><i class="fa fa-' + allCards[i] +'"></i></li>'))
	}
	addCardListener();
  startTimer();
  //call the function that startTheTimer() for the game
}

 // click function 
let addCardListener = function(){
	$('.card').on('click' , function (){  
    //only open the card If not have two shown
    let numCardsShown = cardsOpened.length;
    starRating(moves);
   

    if(numCardsShown < 2) {
      cardsOpened.push($(this)["0"].firstChild.className);
      $(this).addClass('open show');
      if(numCardsShow = 1) {
        console.log('1 card clicked');
        checkMatch();
         moveCounter();
         
      }
    } 
	});
}
 // function that checks the values and  looks for match 
function checkMatch() {
  let card1 = cardsOpened[0];
  let card2 = cardsOpened[1];
  
 //all the function that can calculate the star rating according to the moves
  if(card1 == card2) {
    $(this).addClass('match');
    cardsOpened = [];
    console.log('Match!!');
     
    
    
  } else {
      setTimeout (function(){
      $(this).removeClass('open show');
      }, 1500 )     
  }  
}
 // function to restart game
$('.restart').on('click', function (){
		$('.stars').find('i').addClass('fa-star');
		moves= 0;
    cardsOpened = [];
		gameStart();
    console.log('new game');
});
  //timer function 
function startTimer(){
    second =0;
    setInterval(function(){
    $('#timer').text(second)
    second++;
    }, 1000);
    console.log('timer running');
}

function starRating(moves){
  let rating = 3;
  if(moves > stars3 && moves < stars2){
    $rating.eq(3).removeClass('fa-star').addClass('fa-star-o');
  } else if( moves > stars2 && moves< stars1 ){
      $rating.eq(2).removeClass('fa-star').addClass('fa-star-o');
         rating = 2;
  }else if (moves > stars1){
          $rating.eq(1).removeClass('fa-star').addClass('fa-star-o');
    rating = 1;
  }
  return{score:rating};
}

function moveCounter(){
  $('.moves').text(moves)
  moves++
  console.log('counting moves');
}
          
 //function checkEndGame(){
 //if (cardArray.length == Allcards.length){
 //  alert('game over!!');
 // }};

