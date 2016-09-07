// first, place a quotes array on the global object. (in the browser, whenever you declare a variable and
// are not in a function, it will be set on the global object (called `window`). This variable will be 
// available for use anywhere--in this js file or in another one that follows it!)
var quotes = [
  { 
    // array of objects, so that we can seperate quote from author (and style them slightly differently later)
    quote: "Never forget what you are, for surely the world will not. Make it your strength. Then it can never be your weakness. Armor yourself in it, and it will never be used to hurt you.",
    author: "Tyrion Lannister"
  },
  {
    quote: "Let them see that their words can cut you, and you’ll never be free of the mockery. If they want to give you a name, take it, make it your own. Then they can’t hurt you with it anymore.",
    author: "Tyrion Lannister"
  },
  {
    quote: "When you play the game of thrones, you win or you die. There is no middle ground.",
    author: "Cersei Lannister"
  },
  {
    quote: "If you would take a man’s life, you owe it to him to look into his eyes and hear his final words. And if you cannot bear to do that, then perhaps the man does not deserve to die.",
    author: "Ned Stark"
  },
  {
    quote: "Sorcery is the sauce fools spoon over failure to hide the flavor of their own incompetence",
    author: "Unknown",
    unknown: true
  },
  {
    quote: "Power resides where men believe it resides. No more and no less.",
    author: "Lord Varys"
  },
  {
    quote: "There’s no shame in fear, my father told me, what matters is how we face it.",
    author: "Jon Snow"
  },
  {
    quote: "Love is poison. A sweet poison, yes, but it will kill you all the same.",
    author: "Cersei Lannister"
  },
  {
    quote: "What good is this, I ask you? He who hurries through life hurries to his grave.",
    author: "Salladhor Saan"
  },
  {
    quote: "Old stories are like old friends, she used to say. You have to visit them from time to time.",
    author: "Unknown",
    unknown: true
  },
  {
    quote: "The greatest fools are ofttimes more clever than the men who laugh at them",
    author: "Tywin Lannister"
  },
  {
    quote: "Everyone wants something, Alayne. And when you know what a man wants you know who he is, and how to move him.",
    author: "Unknown",
    unknown: true
  }
];

// declare global variable to keep track of our currently assigned quote. We declare it here, but assign
// in the `updateQuote` function. That way, we will have access to these variables outside of our function.
// `currentIdx` used as a simple way to test for a duplicate quote when updating.
var currentIdx;

// this function is technically "hoisted", that is, it is the first thing that compiles (even before our quotes
// variable). It doesn't really make a difference with how we're using it here... but just so you know.
function updateQuote() {
  // this loop will randomly pick an index number that we will use to get a new quote with our `quotes` array/
  // and the `while` condition checks to make sure it's not the same quote we are currently using. Since we
  // always have to do this at least once, a do/while loop is appropriate.
  do{
      var idx = Math.floor(Math.random() * quotes.length);
  }while(currentIdx === idx);
    
  currentIdx = idx;
  // after we access `quotes[idx]`, we get back an object. We additionally dot off that to get the appropriate
  // property.
  $('#quote').html(quotes[idx].quote);
  $('#author').html(quotes[idx].author);
}

// Remember! We have not actually done anything yet! Just set up our instructions.
// in the jQuery below, we carry that out.

$(function(){ // <--short for $(document).ready(function(){...});
  updateQuote(); // <-- run our set of instructions once, and immediately.
  // we also pass that same function to the jQuery below to set up an event listener. note that we are passing
  // `updateQuote`, not `updateQuote()`. The latter is invoked immediately (which we wanted one time, as above)
  // the former is given to something to invoke later (in this case on every click)
  $('#generator').click(updateQuote);
})

// the script is done running! But our click listener remains. So whenever you click, it remembers the function
// it has and runs it, giving us a new quote.