import fillHopper from './fillHopper.js';
import { testLeague } from './ballData.js';

const lottoBalls = fillHopper(testLeague);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const pickOrder = (lottoBalls) => {
  let picks = []
  while (lottoBalls.length > 0) {
    let randomInt = getRandomInt(lottoBalls.length);
    let team = lottoBalls[randomInt];
    picks.push(team);
    lottoBalls = lottoBalls.filter(x => x !== team);
  }
  return picks;
}


const testPicks = (testNum) => {
  let results = {};
  for (let i = 0; i < testNum; i++) {
    let order = pickOrder(lottoBalls);
    if (!results[order[0]]) {
      results[order[0]] = 1
    } else {
      results[order[0]] = results[order[0]] + 1
    }
  }
  return results;
}

console.log(testPicks(1000));

