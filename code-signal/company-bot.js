// Each CodeSignal Company Bot is trained by engineers from that specific company.The way it works is that a representative group of engineers from each company is identified as trainers before the bot goes live, and they CodeFight against the bot during a training phase.The current training algorithm is definitely more complex, but let's assume it works this way:

// For each trainer we collect two pieces of information per task[answerTime, correctness], where correctness is 1 if the answer was correct, -1 if the answer was wrong, and 0 if no answer was given.In this case, the bot's correct answer time for a given task would be the average of the answer times from the trainers who answered correctly. Given all of the training information for a specific task, calculate the bot's answer time.

function solution(trainingData) {
  let totalTime = 0;
  let correctCounter = 0;
  const arrayLength = trainingData.length;
  for (let i = 0; i < arrayLength; i++) {
    if (trainingData[i][1] === 1) {
      totalTime += trainingData[i][0];
      correctCounter++;
    }
  }
  if (totalTime === 0) {
    return 0;
  }
  return totalTime / correctCounter;
}

solution([[3, 1],
  [6, 1],
  [4, 1],
  [5, 1]]);
