import { useState } from 'react';
import { Box } from '@mui/material';
import Card from '../UI/Card'
import Button from '../UI/Button'
import LotteryBoard from './Board/LotteryBoard';
import classes from './Lottery.module.css'
import Modal from '../UI/Modal';
import { lottoTeams, lotteryTeams } from '../../teamdata';

const Lottery = () => {
  const [showLotteryComputeButton, setShowLotteryComputeButton] = useState(true)
  const [pickNumber, setPickNumber] = useState(12)
  // const [nonLottoList, setNonLottoList] = useState(nonLottoTeams)
  // const [consolationPicks, setConsolationPicks] = useState(consolationTeams)
  const [sortedLottery, setSortedLottery] = useState([])
  const [lottoList, setLottoList] = useState(lottoTeams)

  const [revealTeam, setRevealTeam] = useState();

  const updateBoard = (pick, teamList) => {

      setRevealTeam({ message: `${teamList[pick - 1]} receives pick No. ${pick}`})
      
      setLottoList(prevState => {
        prevState[pick - 1].name = teamList[pick - 1]
        return [...prevState]
      })
      setPickNumber((prevState) => {
        return prevState = prevState - 1
      })
  }

  const onClickHandler = () => {
      updateBoard(pickNumber, sortedLottery)
  }

  const computeLotteryOrder = () => {
    lotteryTeams.sort(() => Math.random() - 0.5);

    setShowLotteryComputeButton(false);
    setSortedLottery(lotteryTeams)
    console.log(lotteryTeams)
  }

  const hideEnvelope = () => {
    setRevealTeam(null);
  }

  return (
    <Card className={classes.card}>
      {revealTeam && <Modal
        message={revealTeam.message}
        onCloseModal={hideEnvelope}
      />}
      <Box sx={{ height: '40%', maxWidth: '100%', paddingBottom: '1em' }}>
        <div className={classes.div}>
          <LotteryBoard lotteryTeams={lottoList} />
        </div>
        <h1 className={classes.title}>2k Draft Order</h1>
        <div className={classes.buttonDiv}>
          {pickNumber === 0 ? <></> : showLotteryComputeButton ?
            <Button type='submit' onClick={computeLotteryOrder}>Randomize Draft Order</Button> :
            <Button type='submit' onClick={onClickHandler} >Reveal Pick {pickNumber}</Button>}
        </div>
      </Box>
    </Card>
  )
}

export default Lottery
