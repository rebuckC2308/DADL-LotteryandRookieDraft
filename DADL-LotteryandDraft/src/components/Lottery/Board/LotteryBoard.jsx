import { Grid, List } from '@mui/material';
import ListElement from '../ListComponents/ListElement'
import classes from './LotteryBoard.module.css'


const LotteryBoard = ({ lotteryTeams }) => {
  return (
    <Grid container spacing={2} className={classes.grid}>
          <Grid item xs={12} md={6}>
            <div>
              <List>
                {lotteryTeams.filter(team => team.id < 7).map((team, i) => {
                  return <ListElement key={team.id} team={team.name}
                    pick={team.id} />
                })}
              </List>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
                <List>
                  {lotteryTeams.filter(team => team.id >= 7).map((team, i) => {
                    return <ListElement key={team.id} team={team.name}
                      pick={team.id} />
                  })}
                </List>
            </div>
          </Grid>
        </Grid>
  )
}

export default LotteryBoard
