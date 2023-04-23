import { ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import SecondaryListElement from './SecondaryListElement';
import PrimaryListElement from './PrimaryListElement';
import classes from './ListElement.module.css'

const ListElement = ({ team, byWayOf, pick } ) => {
  return (
    <div className={classes.item}>
    <ListItem>
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: '#181818' }}>
          {pick}
        </Avatar>
      </ListItemAvatar>
        <ListItemText
        primary={
          <PrimaryListElement team={ team } />  
        }
        secondary={ byWayOf ?
            <SecondaryListElement byWayOf={ byWayOf }/>
          : null }
      />
    </ListItem>
    </div>
  )
}

export default ListElement
