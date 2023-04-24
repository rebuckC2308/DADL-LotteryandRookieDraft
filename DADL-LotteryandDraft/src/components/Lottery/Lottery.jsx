import { useState } from 'react';
import { Box } from '@mui/material';
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './Lottery.module.css'
import { nonLottoTeams } from '../../teamdata';
import LotteryBoard from './Board/LotteryBoard';
import { determinePicks7and8 } from '../../functions/pickSevenAndEight';

const Lottery = () => {
  const [nonLottoList, setNonLottoList] = useState(nonLottoTeams)
  const [disablePick78Btn, setDisablePick78Btn] = useState(false);

  //Need to draw for 7th/8th picks
  const pickSevenAndEightClickHandler = () => {
    const [pick7, pick8] = determinePicks7and8("Money Train", "TWINNING .")

    let newArr = [...nonLottoList]

    newArr[1].team = pick8;
    setNonLottoList(newArr)

    newArr[0].team = pick7;

    setDisablePick78Btn(true)
    return
  }

  return (
    <Card>
      <Box sx={{ height: '40%', maxWidth: '100%', paddingBottom: '1em'}}>
        <h1 className={classes.title}>DADL Draft Lottery</h1>
        <div className={classes.buttonDiv}>
        <Button type='submit'>Reveal Picks 1-6</Button>
        <Button type='submit' onClick={pickSevenAndEightClickHandler} disableBtn={disablePick78Btn}>Reveal Picks 7 & 8</Button>
        </div>
        <div className={classes.div}>
          <LotteryBoard nonLottoTeams={ nonLottoList } />
        </div>
      </Box>
    </Card>
  )
}

export default Lottery
