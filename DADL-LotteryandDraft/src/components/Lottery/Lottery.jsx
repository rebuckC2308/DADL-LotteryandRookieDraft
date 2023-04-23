import { useState } from 'react';
import { Box } from '@mui/material';
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './Lottery.module.css'
import { nonLottoTeams } from '../../teamdata';
import LotteryBoard from './Board/LotteryBoard';

const Lottery = () => {
  const [nonLottoList, setNonLottoList] = useState(nonLottoTeams)

  //Need to draw for 7th/8th picks

  return (
    <Card>
      <Box sx={{ height: '40%', maxWidth: '100%', paddingBottom: '1em'}}>
        <h1 className={classes.title}>DADL Draft Lottery</h1>
        <div className={classes.buttonDiv}>
        <Button type='submit'>Reveal Picks 1-6</Button>
        <Button type='submit'>Reveal Picks 7 & 8</Button>
        </div>
        <div className={classes.div}>
          <LotteryBoard nonLottoTeams={ nonLottoList } />
        </div>
      </Box>
    </Card>
  )
}

export default Lottery
