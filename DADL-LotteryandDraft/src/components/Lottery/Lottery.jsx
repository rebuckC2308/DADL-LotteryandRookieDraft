import { useState } from 'react';
import { Box } from '@mui/material';
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './Lottery.module.css'
import { pickHandler } from '../../functions/pickHandler';
import { nonLottoTeams, consolationTeams, lottoTeams } from '../../teamdata';
import LotteryBoard from './Board/LotteryBoard';

const Lottery = () => {
  const [pickNumber, setPickNumber] = useState(8)
  const [nonLottoList, setNonLottoList] = useState(nonLottoTeams)
  const [consolationPicks, setConsolationPicks] = useState(consolationTeams)
  const [lottoList, setLottoList] = useState(lottoTeams)

  const updateBoard = (pick, newNonLottoList, newConsolationList) => {
    if (pick > 6) {
      setConsolationPicks(newConsolationList);
      setNonLottoList(newNonLottoList);
      setPickNumber((prevState) => {
        return prevState = prevState -1
      })
    }
  
  }
  //Need to draw for 7th/8th picks
  const onClickHandler = () => {
    if (pickNumber > 6) {
      let [ updatedNonLottoTeams, updatedCoosolationTeam ] = pickHandler(pickNumber, nonLottoList, consolationPicks)
      
      updateBoard(pickNumber, updatedNonLottoTeams, updatedCoosolationTeam)
    }
  }

  return (
    <Card>
      <Box sx={{ height: '40%', maxWidth: '100%', paddingBottom: '1em'}}>
        <h1 className={classes.title}>DADL Draft Lottery</h1>
        <div className={classes.buttonDiv}>
          <Button type='submit' onClick={onClickHandler} >Reveal Pick {pickNumber}</Button>
        </div>
        <div className={classes.div}>
          <LotteryBoard nonLotteryTeams={ nonLottoList } lotteryTeams={lottoList} />
        </div>
      </Box>
    </Card>
  )
}

export default Lottery
