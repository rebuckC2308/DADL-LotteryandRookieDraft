import { useState, useEffect  } from 'react';
import { Box } from '@mui/material';
import Card from '../UI/Card'
import Button from '../UI/Button'
import LotteryBoard from './Board/LotteryBoard';
import classes from './Lottery.module.css'
import Modal from '../UI/Modal';
import { playoffTeams, lotteryTeams, lottoTeams } from './teamData/teamData.js';
import { createLotteryArray, determinePicks1and2, filterLotteryTeams, addPicksToLotteryArray } from '../../functions/lotteryOrderHandler';
// import { pickHandler } from '../../functions/pickHandler';

const Lottery = () => {
  // What button to show on board
  const [showRandomizeButton, setShowRandomizeButton] = useState(true)
  const [lotteryDraftOrder, setLotteryDraftOrder] = useState([])
  const [pickNumber, setPickNumber] = useState(6)

  const [lottoList, setLottoList] = useState(lottoTeams)

  const [revealTeam, setRevealTeam] = useState();


  const updateLotteryDraftOrder = (newOrder) => {
        setLotteryDraftOrder(newOrder);
  };
  
  // This effect runs whenever lotteryDraftOrder changes
  useEffect(() => {
        console.log('Lottery draft order updated:', lotteryDraftOrder);
    }, [lotteryDraftOrder]
  );

  // Click button to randomize the order of picks:
  const onRandomizeOrderClick = () => {
    const lotteryTeamArr = lotteryTeams.slice()
    // Create lottery array
    const lotteryArr = createLotteryArray(lotteryTeamArr)

    const [pick1, remainingLotteryTeamsArr] = determinePicks1and2(lotteryArr)
    const [pick2] = determinePicks1and2(remainingLotteryTeamsArr)

    //returns remaining teams in array, sorted by inverse of finish, and the two teams that were selected
    const [filteredAndSortedTeams, numberOne, number2] = filterLotteryTeams(lotteryTeamArr, pick1, pick2)

    const lotteryArray = addPicksToLotteryArray(filteredAndSortedTeams, numberOne, number2)

    updateLotteryDraftOrder(lotteryArray)
    setShowRandomizeButton(false);
  }




  const updateBoard = (pick, teamList) => {
    if (pick <= 6) {

      setRevealTeam({ team: teamList[pick - 1].name, message: `${teamList[pick - 1].name} receives pick No. ${pick}`, image: teamList[pick - 1].image })
      
      setLottoList(prevState => {
        prevState[pick - 1].name = teamList[pick - 1].name
        prevState[pick - 1].record = teamList[pick - 1].record
        prevState[pick - 1].originalOwner = teamList[pick - 1].originalOwner
        prevState[pick - 1].show = true
        return [...prevState]
      })
      setPickNumber((prevState) => {
        return prevState = prevState - 1
      })
    }
  }

  const onRevealPickClick = () => {
    if (pickNumber <= 6) {
      updateBoard(pickNumber, lotteryDraftOrder)
    }
  }


  const hideEnvelope = () => {
    setRevealTeam(null);
  }

  return (
    <Card>
      { revealTeam && <Modal
        team={ revealTeam.team }
        message={ revealTeam.message }
        image={ revealTeam.image }
        onCloseModal={ hideEnvelope }
      />
      }
      <Box sx={{ height: '40%', maxWidth: '100%', paddingBottom: '1em' }}>
        <h1 className={ classes.title }>DADL Draft Lottery</h1>
        <div className={ classes.buttonDiv }>
          { pickNumber === 0 ? <></> : showRandomizeButton ?
            <Button type='submit' onClick={onRandomizeOrderClick}>Randomize Lottery Order</Button> :
            <Button type='submit' onClick={onRevealPickClick} >Reveal Pick {pickNumber}</Button>
          }
        </div>
        <div className={ classes.div }>
          <LotteryBoard playoffTeamList={ playoffTeams } lotteryTeams={ lottoList } />
        </div>
      </Box>
    </Card>
  )
}

export default Lottery
