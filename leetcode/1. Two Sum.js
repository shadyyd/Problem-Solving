/**
 * @param {number[]} nums  // Input parameter: an array of numbers.
 * @param {number} target  // Input parameter: the target number we want to find the sum for.
 * @return {number[]}     // The function returns an array of two numbers (indices).
 * O(N) time solution 
 */
var twoSum = function(nums, target) {
   
    const m = new Map();  // Create a Map to store numbers and their corresponding indices.

    // Loop through the 'nums' array to populate the Map.
    for (let i = 0; i < nums.length; i++) {
        m.set(nums[i], i);  // Store the number as the key and its index as the value in the Map.
    }

    // Loop through the 'nums' array again to check for pairs.
    for (let i = 0; i < nums.length; i++) {
        // Calculate the difference between the 'target' and the current number.
        const complement = target - nums[i];

        // Check if the complement exists in the Map and make sure it's not the same element.
        if (m.has(complement) && m.get(complement) !== i) {
            // If a complement is found, return an array containing the indices of the two elements.
            return [m.get(complement), i];
        }
    }
}
