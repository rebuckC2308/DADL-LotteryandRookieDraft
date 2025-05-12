import React from 'react'
import { Typography } from '@mui/material';



const PrimaryListElement = ({ team }) => {
  
  return (
    <React.Fragment>
            <Typography
              component="span"
              variant="h5"
              color='black'
            >
              {team}
            </Typography>
          </React.Fragment>
  )
}

export default PrimaryListElement
