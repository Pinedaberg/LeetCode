//Given an integer x, return true if x is a 
//palindrome
//, and false otherwise.

 

//Example 1:

//Input: x = 121
//Output: true
//Explanation: 121 reads as 121 from left to right and from right to left.
//Example 2:

//Input: x = -121
//Output: false
//Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
//Example 3:

//Input: x = 10
//Output: false
//Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

//Constraints:

//-231 <= x <= 231 - 1
 

//Follow up: Could you solve it without converting the integer to a string?


//exercise 


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    const len = getLength(x);

    for (let i = 0; i < len >> 1; ++i) {
        if (getDigitAt(i, x, len) !== getDigitAt(len - i - 1, x, len))
            return false;
    }
    return true;
};

function getLength(x) {
    if (x === 0) return 1;
    return ~~(Math.log10(x)) + 1;
}

function getDigitAt(i, x, l) {
    const exp = l - 1 - i;
    return ~~(x / 10 ** exp) % 10;
}
