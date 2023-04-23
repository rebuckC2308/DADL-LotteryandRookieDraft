import React from 'react'
import { Typography } from '@mui/material';
import classes from './SecondaryListElement.module.css'


const SecondaryListElement = ({ byWayOf }) => {
  return (
    <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color='black'
                className={classes.secondary}
              >
                {byWayOf ? 'By way of ' + byWayOf : null}
              </Typography>
            </React.Fragment>
  )
}

export default SecondaryListElement
