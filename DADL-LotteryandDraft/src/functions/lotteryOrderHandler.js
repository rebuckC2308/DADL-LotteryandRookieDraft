  // { name: 'Moores Whores', record: '(72-81)', odds: 8, order: 6 },
  // { name: 'Trae Bombs', record: '(70-83)', odds: 3, order: 5  },
  // { name: 'Rocky Mtn Bulls', record: '(68-85)', odds: 16, order: 4  },
  // { name: 'The Future', record: '(64-89)', odds: 18, order: 3  },
  // { name: 'WINdy City Bulls', record: '(59-94)', odds: 20, order: 2  },
  // { name: 'LOADING...', record: '(51-102)', odds: 35, order: 1  }
export const createLotteryArray = (teams, ) => {
  const lotteryArray = teams.map((team) => Array(team.odds).fill(team.name)).flat();

  lotteryArray.sort(() => Math.random() - 0.5);
  return lotteryArray;
}

export const determinePicks1and2 = (teams) => {
  const index = Math.floor(Math.random() * teams.length-1)
  const pick = teams[index];

  teams = teams.filter((team) => team !== pick)

  return [pick, teams]
}

export const filterAndSortLotteryTeams = (lotteryTeamsArr, pick1, pick2) => {
  const pick1Obj = lotteryTeamsArr.find(team => team.name === pick1);
  const pick2Obj = lotteryTeamsArr.find(team => team.name === pick2);

  const filterPick1 = lotteryTeamsArr.filter((team) => team.name !== pick1)
  const filterPick2 = filterPick1.filter((team) => team.name !== pick2);

  const sortedRemainingLotteryTeams = filterPick2.sort((a, b) => a.order - b.order)
  sortedRemainingLotteryTeams.unshift(pick2Obj);
  sortedRemainingLotteryTeams.unshift(pick1Obj)

  return sortedRemainingLotteryTeams;
}
