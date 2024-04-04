function palindromeCheck() { 
    var str = document.getElementById("palindrome").value;
    var lowRegStr = str.toLowerCase();
    var isPalindrome = true;
    for (var i = 0; i < lowRegStr.length / 2; i++) {
        if (lowRegStr[i] !== lowRegStr[lowRegStr.length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }
    if (isPalindrome) {
        document.getElementById("result").innerHTML = "Yes, it is a palindrome.";
    } else {
        document.getElementById("result").innerHTML = "No, it is not a palindrome.";
    }
}