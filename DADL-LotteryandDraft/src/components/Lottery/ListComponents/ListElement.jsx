import { ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import SecondaryListElement from './SecondaryListElement';
import PrimaryListElement from './PrimaryListElement';
import classes from './ListElement.module.css'

const ListElement = ({ team, details, pick } ) => {
  return (
    <div className={team==='' && details==='' ? classes.emptyItem : classes.item}>
    <ListItem>
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: '#181818' }}>
          {pick}
        </Avatar>
      </ListItemAvatar>
        <ListItemText
        primary={ team ?
            <PrimaryListElement team={team} /> :
            <PrimaryListElement team={ '' } />
        }
        secondary={ details ?
            <SecondaryListElement details={ details }/>
          : <SecondaryListElement details={ '' } />}
      />
    </ListItem>
    </div>
  )
}

export default ListElement
