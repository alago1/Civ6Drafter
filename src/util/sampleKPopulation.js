export const sample = (population, k) => {
  //Given a population (array) and k (number <= population.length)
  //returns an array of k elements randomly selected from the population
  //This is Python's implementation of .sample
  //credit to Derek (https://stackoverflow.com/a/45556840/5323429)

  if (!Array.isArray(population))
    throw new TypeError("Population must be an array.");
  var n = population.length;
  if (k < 0 || k > n)
    throw new RangeError("Sample larger than population or is negative");

  var result = new Array(k);
  var setsize = 21; // size of a small set minus size of an empty list

  if (k > 5) setsize += Math.pow(4, Math.ceil(Math.log(k * 3, 4)));

  if (n <= setsize) {
    // An n-length list is smaller than a k-length set
    var pool = population.slice();
    for (var i = 0; i < k; i++) {
      // invariant:  non-selected at [0,n-i)
      var j = (Math.random() * (n - i)) | 0;
      result[i] = pool[j];
      pool[j] = pool[n - i - 1]; // move non-selected item into vacancy
    }
  } else {
    var selected = new Set();
    // eslint-disable-next-line
    for (var i = 0; i < k; i++) {
      // eslint-disable-next-line
      var j = (Math.random() * n) | 0;
      while (selected.has(j)) {
        j = (Math.random() * n) | 0;
      }
      selected.add(j);
      result[i] = population[j];
    }
  }

  return result;
};
