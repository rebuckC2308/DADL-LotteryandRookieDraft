import { Grid, List } from '@mui/material';
import ListElement from '../ListComponents/ListElement'
import classes from './LotteryBoard.module.css'


const LotteryBoard = ({ nonLotteryTeams, lotteryTeams }) => {
  return (
    <Grid container spacing={2} className={classes.grid}>
          <Grid item xs={12} md={6}>
            <div>
              <List>
                {lotteryTeams.map((team) => {
                  return <ListElement key={team.id} team={team.team} details={team.record}
                    pick={team.id} />
                })}
              </List>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
                <List>
                  {nonLotteryTeams.map((team) => {
                    return <ListElement key={team.id} team={team.team} details={team.byWayOf}
                      pick={team.id} />
                  })}
                </List>
            </div>
          </Grid>
        </Grid>
  )
}

export default LotteryBoard
