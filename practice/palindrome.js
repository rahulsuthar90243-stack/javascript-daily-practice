// Palindrome Checker Function

function isPalindrome(str) {
  // remove spaces and convert to lowercase
  const cleanStr = str.toLowerCase().replace(/\s/g, "");

  // reverse the string
  const reversed = cleanStr.split("").reverse().join("");

  // check if same
  return cleanStr === reversed;
}

// Example usage
const word = "madam";

if (isPalindrome(word)) {
  console.log(word + " is a Palindrome");
} else {
  console.log(word + " is not a Palindrome");
}