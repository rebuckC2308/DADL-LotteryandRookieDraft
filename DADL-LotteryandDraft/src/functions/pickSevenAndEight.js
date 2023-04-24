const randomZeroOrOne = (range) => {
  const evenOrOdd = Math.floor(Math.random() * range);

  return evenOrOdd % 2 ? 0 : 1
}


export const determinePicks7and8 = (team1, team2) => {

  const selectionArr = [team1, team2];
  let index = randomZeroOrOne(101);

  

  const pick8 = selectionArr[index]
  const pick7 = selectionArr[index === 0 ? 1 : 0]

  return [pick7, pick8];
}