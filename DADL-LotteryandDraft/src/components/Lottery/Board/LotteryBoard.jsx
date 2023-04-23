import { Grid, List } from '@mui/material';
import ListElement from '../ListComponents/ListElement'
import classes from './LotteryBoard.module.css'


const LotteryBoard = ({ nonLottoTeams }) => {
  return (
    <Grid container spacing={2} className={classes.grid}>
          <Grid item xs={12} md={6}>
            <div>
              <List>
                {nonLottoTeams.map((team) => {
                  return <ListElement key={team.id} team={team.team} byWayOf={team.byWayOf}
                    pick={team.id} />
                })}
              </List>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
                <List>
                  {nonLottoTeams.map((team) => {
                    return <ListElement key={team.id} team={team.team} byWayOf={team.byWayOf}
                      pick={team.id} />
                  })}
                </List>
            </div>
          </Grid>
        </Grid>
  )
}

export default LotteryBoard
