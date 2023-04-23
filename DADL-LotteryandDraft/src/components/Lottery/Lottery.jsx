import { Box, Grid, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import Card from "../UI/Card"
import classes from './Lottery.module.css'
import { useState } from 'react';
import { nonLottoTeams } from '../../teamdata';
import ListElement from './ListElement';

const Lottery = () => {
  const [nonLottoList, setNonLottoList] = useState(nonLottoTeams)

  //Need to draw for 7th/8th picks

  return (
    <Card>
      <Box sx={{ height:'40%', maxWidth: '100%' }}>
        <h1 className={classes.title}>DADL Draft Lottery</h1>
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
                <List>
                  {nonLottoTeams.map((team) => {
                    return <ListElement key={team.id} team={team.team} byWayOf={team.byWayOf}
                      pick={team.id} />
                  })}
                </List>
              </List>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Card>
  )
}

export default Lottery
