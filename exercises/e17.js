/**
 * Make sure to read the e17.md file!
 * For this exercise we want you to make custom `maxBy` and `minBy` methods. 
 * In order to do this it is ok to use any type of FOR loops. 
 * REQUIREMENTS: functions should:
 * * Take an array of things
 * * minBy(): Return the element where the callback function on that element yields the lowest value
 * * maxBy(): Return the element where the callback function on that element yields the highest value
 */

export function minBy(array, cb)
{
  if (array.length === 0)
  {
    return undefined;
  }
  let min = array[0];
  let minValue = cb(min);
  for (let i = 1; i < array.length; i++) {
    const currentValue = cb(array[i]);
    if (currentValue < minValue) {
      min = array[i];
      minValue = currentValue;
    }
  }
  return min;
}

export function maxBy(array, cb)
{
  if (array.length === 0)
  {
    return undefined;
  }
  let max = array[0];
  let maxValue = cb(max);
  for (let i = 1; i < array.length; i++) {
    const currentValue = cb(array[i]);
    if (currentValue > maxValue) {
      max = array[i];
      maxValue = currentValue;
    }
  }
  return max;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function