const randomZeroOrOne = (range) => {
  const evenOrOdd = Math.floor(Math.random() * range);

  return evenOrOdd % 2 ? 0 : 1
}


export const determinePicks7and8 = (teams) => {
  if (teams.length === 1) return teams[0];
  let index = randomZeroOrOne(101);

  const pick = teams[index]
  return pick;
}