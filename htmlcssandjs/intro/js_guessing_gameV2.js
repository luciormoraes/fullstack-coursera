//Global variables and initialize them
var color_index;
var guesses = 1;
//An array of colors out of alphabetical order
var colors = [ "gold", "cyan", "gray", "green", "magenta", "orange", "red", "white", "yellow", "blue"];
//Organize Colors in Alphabetical Order
var colors = colors.sort();
var colors_message = colors.join();
var input_text = "none";
var guess_input;
var finished = false;
//Set backgroundColor to black
// document.body.style.backgroundColor = "black";

function do_game() {
  var random_number = Math.random() * (colors.length - 1);
  var random_number_integer = Math.floor(random_number);
  color_index = random_number_integer;
  var color_answer = String(colors[random_number_integer]);
  document.write("color_index: " + color_index);
  document.write("random_number_integer: " + random_number_integer);
  //Showing correct answer to user
  alert("The correct answer is: " + color_answer);

  while (!finished) {
    input_text = prompt("I am thinking of one of these colors:\n\n" +
    colors_message + "\n\n What color am I thinking of?").toLowerCase();
    guess_input = colors.indexOf(input_text);
    finished = check_guess();
  }

  function check_guess() {
    if (guess_input < 1) {
      alert("Sorry, I don't recognize your color. \n\n Please try again.");
      return false;
    }
    if (guess_input > color_index) {
      alert("Sorry, your guess is not correct! \n\n Hint: Your color is alphabetically higher than mine.\n\n Please try again.");
      guesses += 1;
      return false;
    }
    if (guess_input < color_index) {
      alert("Sorry, your guess is not correct!\n\n Hint: Your color is alphabetically lower than mine.\n\n Please try again.");
      guesses += 1;
      return false;
    }
// Applying color and give a feedback to user
    document.body.style.backgroundColor = color_answer;
    alert("Congratulations! You have guessed the color!\n\n It took you " + guesses + " guesses to finish the game!\n\n You can see the color in the background.")
    return true;
  }
}
