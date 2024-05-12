export const createLotteryArray = (teams, ) => {
  teams.sort(() => Math.random() - 0.5);
  return teams;
}

