const assert = require('assert')

/**
 * Given k sorted arrays, merge them into a single sorted array.
 *
 * In this solution, we will use tournament trees to generate a single sorted array as efficiently as possible.
 *
 * This is a rather large topic and I highly recommend you check out the animated video to get a better
 * understanding of this problem, it's variants (like distributed sort) and their solutions.
 *
 * Time Complexity: Θ(n logk) - Notice the big Theta notation. k is the number of given input arrays.
 * Auxiliary Space: ~2k (to store the tournament tree) + n to store the output
 *
 * @param inputArrays - An array of arrays to be merged.
 * @returns - The merged array (sorted).
 */
function kWayMerge (inputArrays) {
  // validate the input
  assert(Array.isArray(inputArrays) && inputArrays.every(arr => Array.isArray(arr)), 'Input should be an array of arrays.')


}

/**
 * Tests
 */

// test case #1: mixed integers
const exampleInput1 = [-5, 2, -1, 3, -2]
const maxSolution1 = [2, -1, 3]
const minSolution1 = [-5]

const calculatedMaxSolution1 = getMaxMinSubarray(exampleInput1, true)
const calculatedMinSolution1 = getMaxMinSubarray(exampleInput1, false)

console.log(`Example Input #1: ${JSON.stringify(exampleInput1)}, Max Sum Subarray: ${JSON.stringify(calculatedMaxSolution1)}, Min Sum Subarray: ${JSON.stringify(calculatedMinSolution1)}`)
assert.deepStrictEqual(calculatedMaxSolution1, maxSolution1)
assert.deepStrictEqual(calculatedMinSolution1, minSolution1)

// test case #2: empty array
const exampleInput2 = []
const maxSolution2 = []
const minSolution2 = []

const calculatedMaxSolution2 = getMaxMinSubarray(exampleInput2, true)
const calculatedMinSolution2 = getMaxMinSubarray(exampleInput2, false)

console.log(`Example Input #2: ${JSON.stringify(exampleInput2)}, Max Sum Subarray: ${JSON.stringify(calculatedMaxSolution2)}, Min Sum Subarray: ${JSON.stringify(calculatedMinSolution2)}`)
assert.deepStrictEqual(calculatedMaxSolution2, maxSolution2)
assert.deepStrictEqual(calculatedMinSolution2, minSolution2)

// test case #3: all 0's
const exampleInput3 = [0, 0, 0]
const maxSolution3 = []
const minSolution3 = []

const calculatedMaxSolution3 = getMaxMinSubarray(exampleInput3, true)
const calculatedMinSolution3 = getMaxMinSubarray(exampleInput3, false)

console.log(`Example Input #3: ${JSON.stringify(exampleInput3)}, Max Sum Subarray: ${JSON.stringify(calculatedMaxSolution3)}, Min Sum Subarray: ${JSON.stringify(calculatedMinSolution3)}`)
assert.deepStrictEqual(calculatedMaxSolution3, maxSolution3)
assert.deepStrictEqual(calculatedMinSolution3, minSolution3)

// test case #4: all negative
const exampleInput4 = [-1, -2, -3, -4, -5]
const maxSolution4 = []
const minSolution4 = [-1, -2, -3, -4, -5]

const calculatedMaxSolution4 = getMaxMinSubarray(exampleInput4, true)
const calculatedMinSolution4 = getMaxMinSubarray(exampleInput4, false)

console.log(`Example Input #4: ${JSON.stringify(exampleInput4)}, Max Sum Subarray: ${JSON.stringify(calculatedMaxSolution4)}, Min Sum Subarray: ${JSON.stringify(calculatedMinSolution4)}`)
assert.deepStrictEqual(calculatedMaxSolution4, maxSolution4)
assert.deepStrictEqual(calculatedMinSolution4, minSolution4)

// test case #5: all positive
const exampleInput5 = [1, 2, 3, 4, 5]
const maxSolution5 = [1, 2, 3, 4, 5]
const minSolution5 = []

const calculatedMaxSolution5 = getMaxMinSubarray(exampleInput5, true)
const calculatedMinSolution5 = getMaxMinSubarray(exampleInput5, false)

console.log(`Example Input #5: ${JSON.stringify(exampleInput5)}, Max Sum Subarray: ${JSON.stringify(calculatedMaxSolution5)}, Min Sum Subarray: ${JSON.stringify(calculatedMinSolution5)}`)
assert.deepStrictEqual(calculatedMaxSolution5, maxSolution5)
assert.deepStrictEqual(calculatedMinSolution5, minSolution5)
