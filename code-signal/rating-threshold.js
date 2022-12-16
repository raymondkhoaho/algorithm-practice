// In Thumbtack, users are able to rate Pros based on their experience working
// with them.Each rating is an integer ranging from 1 to 5, and all ratings are
// averaged to produce a single number rating for any given Pro.Those Pros who
// have a rating lower than a specified threshold are manually reviewed by
// Thumbtack staff to ensure high quality of service.

// You're given a list of ratings for some Pros. Find out which Pros should be
// manually reviewed.

function solution(threshold, ratings) {
  const output = [];
  for (let i = 0; i < ratings.length; i++) {
    if (((ratings[i].reduce((acc, cur) => acc + cur)) / ratings[i].length) < threshold) {
      output.push(i);
    }
  }
  return output;
}

solution(3.5, [[3, 4], [3, 3, 3, 4], [4]]);
// expected output: [1]
