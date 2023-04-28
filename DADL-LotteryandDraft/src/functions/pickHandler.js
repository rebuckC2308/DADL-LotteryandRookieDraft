import { determinePicks7and8 } from './pickSevenAndEight';

const updateTeamArr = (teamArr, team) => {
  let index = teamArr.indexOf(team);
  teamArr.splice(index, 1);

  return teamArr
}

export const pickHandler = (pickNum, nonLottoTeamOrder, consolationTeams) => {

  if (pickNum > 6) {
    let consolationTeamsCopy = [...consolationTeams]
    let pickedTeam = determinePicks7and8(consolationTeamsCopy)

    let updatedTeamArr = updateTeamArr(consolationTeamsCopy, pickedTeam);

    let index = pickNum === 8 ? 1 : 0;
    let nonLottoTeamOrderCopy = [...nonLottoTeamOrder]
    nonLottoTeamOrderCopy[index].team = pickedTeam.team;
    nonLottoTeamOrderCopy[index].byWayOf= pickedTeam.byWayOf

    return [pickedTeam, nonLottoTeamOrderCopy, updatedTeamArr];
  }


}