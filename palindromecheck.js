function palindromeCheck() { 
    var str = document.getElementById("palindrome").value;
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    if (reverseStr === lowRegStr) {
        document.getElementById("result").innerHTML = "Yes, it is a palindrome.";
    } else {
        document.getElementById("result").innerHTML = "No, it is not a palindrome.";
    }
}