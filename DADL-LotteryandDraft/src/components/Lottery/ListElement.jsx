import React from 'react';
import { ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';

// eslint-disable-next-line react/prop-types
const ListElement = ({ team, byWayOf, pick } ) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: '#181818'}}>
          {pick}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="h5"
              color='black'
            >
              {team}
            </Typography>
          </React.Fragment>}
        secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color='black'
              >
                {byWayOf ? 'By way of: ' + byWayOf : null}
              </Typography>
            </React.Fragment>
          }
      />
    </ListItem>
  )
}

export default ListElement
