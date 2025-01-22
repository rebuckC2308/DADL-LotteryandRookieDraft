import { ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import SecondaryListElement from './SecondaryListElement';
import PrimaryListElement from './PrimaryListElement';
import classes from './ListElement.module.css'

const ListElement = ({ teamName, originalOwner, pick, record, show=true } ) => {
  return (
    // && details===""
    <ListItem className={ classes.item }>
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: '#181818' }}>
          { pick }
        </Avatar>
      </ListItemAvatar>
        <ListItemText
        primary={ teamName ?
            <PrimaryListElement team={teamName} /> :
            <PrimaryListElement team={ '' } />
        }
        secondary={!show ? <SecondaryListElement details={""} /> :
              originalOwner === teamName ?
             <SecondaryListElement details={ record }/>
            : <SecondaryListElement details={`By way of: ${originalOwner}`} />
        }
      />
    </ListItem>
  )
}

export default ListElement
