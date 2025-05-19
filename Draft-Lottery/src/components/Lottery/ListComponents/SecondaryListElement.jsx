import React from 'react'
import { Typography } from '@mui/material';
import classes from './SecondaryListElement.module.css'


const SecondaryListElement = ({ details }) => {
  return (
    <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color='#B8CCDE'
                className={classes.secondary}
              >
                {details}
              </Typography>
            </React.Fragment>
  )
}

export default SecondaryListElement
