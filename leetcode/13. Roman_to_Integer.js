/**
 * @param {string} s  // Input parameter: a Roman numeral string.
 * @return {number}   // The function returns an integer.
 */
const mp = new Map();  // Create a Map to store Roman numeral characters and their corresponding values.

// Populate the Map with the Roman numeral characters and their values.
mp.set('I', 1);
mp.set('V', 5);
mp.set('X', 10);
mp.set('L', 50);
mp.set('C', 100);
mp.set('D', 500);
mp.set('M', 1000);

// Define the 'romanToInt' function.
var romanToInt = function(s) {
    let ans = 0;  // Initialize a variable to store the resulting integer.

    // Loop through the Roman numeral string.
    for (let i = 0; i < s.length; i++) {
        // Check if the current character's value is less than the next character's value.
        if (mp.get(s[i]) < mp.get(s[i + 1])) {
            ans -= mp.get(s[i]);  // Subtract the value of the current character.
        } else {
            ans += mp.get(s[i]);  // Add the value of the current character.
        }
    }

    return ans;  // Return the calculated integer.
};
