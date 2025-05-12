// Fisher-Yates shuffle algorithm
const randomizeArray = (arr) => {
  let remainingElements = arr.length
  let tempVal, randomInd;

    // While there remain elements to shuffle
    while (remainingElements) {
        // Pick a remaining element
        randomInd = Math.floor(Math.random() * remainingElements--);

        // And swap it with the current element.
        tempVal = arr[remainingElements];
        arr[remainingElements] = arr[randomInd];
        arr[randomInd] = tempVal;
    }

    return arr;
}

const filterPickFromArray = (teamArr, pickObj1, pickObj2, matchProperties) => {
      return teamArr.filter(item => {
        return !(
            matchProperties.every(prop => item[prop] === pickObj1[prop]) ||
            matchProperties.every(prop => item[prop] === pickObj2[prop])
        );
    });
}

export const createLotteryArray = (teams,) => {
  // Create array and fill with team objects
  const lotteryArray = teams.map((team) => Array(team.lotteryOdds).fill({team: team.name, originalOwner: team.originalOwner })).flat();

  // Randomize the order of the team objects in the array
  randomizeArray(lotteryArray);
  return lotteryArray;
}

export const determinePicks1and2 = (teams) => {
  
  const index = Math.floor(Math.random() * teams.length - 1)
  const selectedPick = teams[index];
  teams = teams.filter((team) => team !== selectedPick)

  // console.log(`The selected pick is:   `, selectedPick)
  // console.log(teams)
  
  return [selectedPick, teams]
}

export const filterLotteryTeams = (teams, pick1, pick2) => {
  const teamArr = [...teams];
  const pick1Obj = teams.find(team => team.name === pick1.team && team.originalOwner === pick1.originalOwner);
  const pick2Obj = teams.find(team => team.name === pick2.team && team.originalOwner === pick2.originalOwner);
  console.log(`"Pick Obj1: "`, pick1Obj)
  console.log(`"Pick Obj2: "`,pick2Obj)

  const teamArrWithoutPicks = filterPickFromArray(teamArr, pick1Obj, pick2Obj, ["name", "originalOwner"])

  const sortedTeamArray = teamArrWithoutPicks.sort((a, b) => b.finishPosition - a.finishPosition);

  return [sortedTeamArray, pick1Obj, pick2Obj];
}

export const addPicksToLotteryArray = (teamArr, pick1, pick2) => {
  teamArr.unshift(pick2);
  teamArr.unshift(pick1);
  console.log(teamArr)
  return teamArr;
}