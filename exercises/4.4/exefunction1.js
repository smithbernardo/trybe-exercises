function palindrome(a){
    if (a=== a.split("").reverse().join("")){
        return true;
    }else {
        return false;
    }
}


console.log(palindrome('arara'));
console.log(palindrome('desenvolvimento'));