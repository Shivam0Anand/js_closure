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
