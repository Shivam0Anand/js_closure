// 1

function nonsence(string) {
  var blab = function() {
    alert(string);
  };
  blab();
}

// 2

function nonsence(string) {
  var blab = function() {
    alert(string);
  };
  setTimeout(blab, 2000);
}

// 3

function nonsence(string) {
  var blab = function() {
    alert(string);
  };
  return blab;
}
let blabLater = nonsense("abcd");
let blabAgainLater = nonsense("abcd again");
blabLater();
blabAgainLater();

// 4

function lastNameTrier(firstName) {
  function innerFunction(lastName) {
    console.log(`${firstName} ${lastName}`);
  }
  return innerFunction;
}

var firstName = lastNameTrier("Shivam");
var fullName = firstName("Anand");

// 5

function storyWriter() {
  let story = "";
  let writerMethod = {
    addWords: storyLine => {
      story += storyLine;
      console.log(story);
    },
    erase: () => {
      story = "";
      console.log(story);
    }
  };
  return writerMethod;
}

let storyOfOurPlanet = storyWriter();
storyOfOurPlanet.addWords("14 billions years ago! ");
storyOfOurPlanet.addWords("There was a big bag. ");
storyOfOurPlanet.addWords(
  "And for the first time universe came into existence. "
);
storyOfOurPlanet.addWords("But our planet is not created yet. ");
storyOfOurPlanet.addWords("And the story continues. ");
storyOfOurPlanet.addWords(
  "Now let's erase our universe along with this story."
);

storyOfOurPlanet.erase();
