import { Grid, List } from '@mui/material';
import ListElement from '../ListComponents/ListElement'
import classes from './LotteryBoard.module.css'


const LotteryBoard = ({ playoffTeamList, lotteryTeams }) => {
  return (
    <Grid container spacing={ 2 } className={ classes.grid }>
          <Grid item xs={ 12 } md={ 6 }>
            <div>
              <List>
                { lotteryTeams.map((team, i) => {
                    return <ListElement key={team.pick} teamName={team.name} originalOwner={team.originalOwner}
                      pick={i+1} record={team.record} show={team.show} />
                  })
                }
              </List>
            </div>
          </Grid>
          <Grid item xs={ 12 } md={ 6 }>
            <div>
                <List>
                  { playoffTeamList.map((team) => {
                      return <ListElement key={team.finishPos} teamName={team.name} originalOwner={team.originalOwner}
                        pick={13 - team.finishPos } record={team.record} show={team.show} />
                    })
                  }
                </List>
            </div>
          </Grid>
        </Grid>
  )
}

export default LotteryBoard
