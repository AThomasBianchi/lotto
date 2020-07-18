export const getBallz = (league) => {
  const ballzArray = [];
  for (const [key, value] of Object.entries(league)) {
    let teamArray = new Array(value).fill(key)
    ballzArray.push(...teamArray);
  }
  return ballzArray;
};