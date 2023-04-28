import { useState } from 'react';
import { Box } from '@mui/material';
import Card from '../UI/Card'
import Button from '../UI/Button'
import LotteryBoard from './Board/LotteryBoard';
import classes from './Lottery.module.css'
import Modal from '../UI/Modal';
import { nonLottoTeams, consolationTeams, lottoTeams, lotteryTeams } from '../../teamdata';
import { createLotteryArray, determinePicks1and2, filterAndSortLotteryTeams } from '../../functions/lotteryOrderHandler';
import { pickHandler } from '../../functions/pickHandler';

const Lottery = () => {
  const [showLotteryComputeButton, setShowLotteryComputeButton] = useState(false)
  const [pickNumber, setPickNumber] = useState(8)
  const [nonLottoList, setNonLottoList] = useState(nonLottoTeams)
  const [consolationPicks, setConsolationPicks] = useState(consolationTeams)
  const [filteredSortedLottery, setFilteredSortedLottery] = useState([])
  const [lottoList, setLottoList] = useState(lottoTeams)

  const [revealTeam, setRevealTeam] = useState();

  const updateBoard = (pick, teamList, newConsolationList = [], pickedTeam={}) => {
    if (pick > 6) {
      setRevealTeam({ team: pickedTeam.team, message: `${pickedTeam.team} recieves pick No. ${pick}`, image: pickedTeam.image})

      setConsolationPicks(newConsolationList);
      setNonLottoList(teamList);
      setPickNumber((prevState) => {
        return prevState = prevState - 1
      })
    }
    if (pick <= 6) {

      setRevealTeam({ team: teamList[pick - 1].name, message: `${teamList[pick - 1].name} receives pick No. ${pick}`, image: teamList[pick - 1].image })
      
      setLottoList(prevState => {
        prevState[pick - 1].team = teamList[pick - 1].name
        prevState[pick - 1].record = teamList[pick - 1].record
        return [...prevState]
      })
      setPickNumber((prevState) => {
        return prevState = prevState - 1
      })
    }
  }

  const onClickHandler = () => {
    if (pickNumber > 6) {
      let [pickedTeam, updatedNonLottoTeams, updatedCoosolationTeam] = pickHandler(pickNumber, nonLottoList, consolationPicks)

      updateBoard(pickNumber, updatedNonLottoTeams, updatedCoosolationTeam, pickedTeam )

      if (pickNumber === 7) setShowLotteryComputeButton(true);
      return;
    }

    if (pickNumber <= 6) {
      updateBoard(pickNumber, filteredSortedLottery)
    }
  }

  const computeLotteryOrder = () => {
    const lotteryArr = createLotteryArray(lotteryTeams)

    const [pick1, remainingLotteryTeamsArr] = determinePicks1and2(lotteryArr);
    const [pick2] = determinePicks1and2(remainingLotteryTeamsArr)

    const filteredSortedLotteryTeams = filterAndSortLotteryTeams(lotteryTeams, pick1, pick2);

    setFilteredSortedLottery([...filteredSortedLotteryTeams])

    setShowLotteryComputeButton(false);
  }

  const hideEnvelope = () => {
    setRevealTeam(null);
  }

  return (
    <Card>
      {revealTeam && <Modal
        team={revealTeam.team}
        message={revealTeam.message}
        image={revealTeam.image}
        onCloseModal={hideEnvelope}
      />}
      <Box sx={{ height: '40%', maxWidth: '100%', paddingBottom: '1em' }}>
        <h1 className={classes.title}>DADL Draft Lottery</h1>
        <div className={classes.buttonDiv}>
          {pickNumber === 0 ? <></> : showLotteryComputeButton ?
            <Button type='submit' onClick={computeLotteryOrder}>Randomize Lottery Order</Button> :
            <Button type='submit' onClick={onClickHandler} >Reveal Pick {pickNumber}</Button>}
        </div>
        <div className={classes.div}>
          <LotteryBoard nonLotteryTeams={nonLottoList} lotteryTeams={lottoList} />
        </div>
      </Box>
    </Card>
  )
}

export default Lottery
