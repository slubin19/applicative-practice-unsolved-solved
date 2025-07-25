/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */


export function getGreatestDiscoveryYear(data)
{
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  let asteroidList = data.asteroids;
  let years = [];
  let maxFrequency = 0;
  let leader = 0;
  for (let asteroid of asteroidList)
  {
    years.push(asteroid.discoveryYear);
  }
  for (let year of years)
  {
    const count = years.filter(y => y === year).length;
    if (count > maxFrequency)
    {
      maxFrequency = count;
      leader = year;
    }
  }
  return leader;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
