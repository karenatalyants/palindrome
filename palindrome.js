//
//
// a function that establishes if a word is a palindrome, ignoring the case.
// here I assume that the given string is a single word, so I am not handling
// the case when it is a sentence or has a space



// solution 1 - very bad, I admit, but works!

function isPalindrome(word) {
  var w = word;

  // I thought to force lowercase to avoid issues
  var wordlc = w.toLowerCase();

  //hits is how I track how many letters from
  // start and end part of the word coincide
  var hits = 0;

  //debugger;


  //different handling of words with even and odd length

  if (wordlc.length % 2 === 0) {
    for (let i = 0; i < (wordlc.length / 2) - 1; i++) { //looping letter by letter until we reach the middle of the word
      if (wordlc[i] === wordlc[wordlc.length - 1 - i]) {
        hits = hits + 1;
        if (hits === wordlc.length / 2) { //
          console.log("This word is a palindrome, pal!");
          return;
        }
      }
    }
  }
  if (wordlc.length % 2 > 0) {
    for (let i = 0; i < (wordlc.length - 1) / 2; i++) {
      if (wordlc[i] === wordlc[wordlc.length - 1 - i]) {
        hits = hits + 1;
        if (hits === (wordlc.length - 1) / 2) { // doesn't make sense to check the median index letter, so checking only the first part of the word before it
          console.log("This word is a palindrome, pal!");
          return;
        }
      }
    }
  }
}

isPalindrome("abrakarba");


// OR even a simpler way - just reversing the given string manually


function isPalindrome1(word) {
  var reverse = "";
  var a = word;

  // force lowercase is needed here too
  var w = a.toLowerCase();

  for (let i = word.length - 1; i >= 0; i--) {
    reverse = reverse + w[i]; // building the reverse string
  }
  if (w === reverse) {
    console.log("This word is a palindrome");
    return;
  } else {
    console.log("This is not a palindrome");
  }
}

isPalindrome1("mandavadnam");


// OR yet another (best in my opinion) way - shortest,
// without having to lowercase, and using built-in methods for reversing
// had to use toString as comparing two arrays (even exact copies) does not end well

//debugger;

function isPalindrome2(word) {
  var a = word;

  // making an array out of the string
  var w = a.split("");

  //reversing the array
  var rev = a.split("").reverse();

  // sad to do this, but had to stringify them back to be able to compare... :(
  if (w.toString() === rev.toString()) {
    console.log("This is a palindrome");
    return;
  } else {
    console.log("This is not a palindrome, pal :)")
    return;
  }
}

isPalindrome2("axperrepxa");