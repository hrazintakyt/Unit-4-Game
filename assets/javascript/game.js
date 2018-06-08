
$(window).on('load', function() {


var wins = 0
var losses = 0


//random number will be at least 20, and up to 120
  var targetNumber = Math.floor(Math.random() * 100 + 21);

  $("#number-to-guess").text(targetNumber);

  var counter = 0;



var reset = (function(){
  counter = 0;
})


var first = Math.floor(Math.random() * 12 + 1);
var second = Math.floor(Math.random() * 12 + 1);
var third = Math.floor(Math.random() * 12 + 1);
var fourth = Math.floor(Math.random() * 12 + 1);




  // giving the array four random values, but only one of the values is kept
  var numberOptions = [first, second, third, fourth];




 
  
  for (var i = 0; i < numberOptions.length; i++) {

    var imageCrystal = $(".crystal");

    imageCrystal.addClass("crystal-image");

    
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

  }

  $(".crystal-image").on("click", function() {


    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;


    alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
      wins++;
      $("#wins").html(wins);
      reset()
      
    }


//So I tried to get the counter to set to 0 after the targetnumber is surpassed by the counter, but it didn't work for me.


    else if (counter >= targetNumber) {
      alert("You lose!!");
      losses++;
      $("#losses").html(losses);
      reset()
      
    }
  })
  });
;
