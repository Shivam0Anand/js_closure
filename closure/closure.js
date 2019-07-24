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

let taj = storyWriter();
taj.addWords(
  "The glorious Taj Mahal was built as the Symbol of Love between Shah Jahan and Mumtaz Mahal."
);
taj.addWords("Shah Jahan was the son of Jehangir the fourth Mughal emperor.");
taj.addWords(
  "Shah Jahan felt in love with Arjumand Banu Begum (Mumtaz) at that time and he asked his father he wanted to marry her."
);
taj.addWords(
  "After five years Shah Jahan and Mumtaz Mahal were married in the year 1612."
);
taj.addWords(
  "In the year 1628, Shah Jahan became the Emperor and he changed her name as Mumtaz Mahal it means “Jewel of the Palace”."
);

taj.erase();
