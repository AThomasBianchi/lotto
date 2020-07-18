const fillHopper = league => {
  const hopper = [];
  for (const [key, value] of Object.entries(league)) {
    let teamBalls = new Array(value).fill(key)
    hopper.push(...teamBalls);
  }
  return hopper;
};

export default fillHopper;