import { determinePicks7and8 } from './pickSevenAndEight';

const updateTeamArr = (teamArr, team) => {
  let index = teamArr.indexOf(team);
  teamArr.splice(index, 1);

  return teamArr
}

export const pickHandler = (pickNum, nonLottoTeamOrder, consolationTeams) => {
  //Randomly Select 7th/8th Pick
  if (pickNum > 6) {
    let consolationTeamsCopy = [...consolationTeams]
    let pick = determinePicks7and8(consolationTeamsCopy)
    //After randomly selecting pick 8 we remove that team from the array of consolation teams
    let updatedTeamArr = updateTeamArr(consolationTeamsCopy, pick);

    let index = pickNum === 8 ? 1 : 0;
    let nonLottoTeamOrderCopy = [...nonLottoTeamOrder]
    nonLottoTeamOrderCopy[index].team = pick.team;
    nonLottoTeamOrderCopy[index].byWayOf= pick.byWayOf

    return [nonLottoTeamOrderCopy, updatedTeamArr];
  }


}