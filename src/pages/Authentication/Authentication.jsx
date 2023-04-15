import React from 'react'
import { Grid } from '@mui/material'
import CommonButton from '../../components/common/CommonButton/CommonButton'

function Authentication() {
  const buttonStyles = {
    fontSize: '0.875rem',
    fontWeight: 600,
    textTransform: 'capitalize',
    borderRadius: 2.5,
    '&.MuiButton-contained': {
        backgroundColor: '#009be5',
        '&:hover': {
            backgroundColor: '#006db3'
        },
    },
    '&.MuiButton-outlined': {
        color: "#fff",
        borderColor: '#fff',
        '&:hover': {
            backgroundColor: 'transparent'
        },
    },
};
  return (
    <Grid item xs={8} styles={{backgroundColor: "#009be5"}}>
      Authentication
      <CommonButton
        variant="contained"
        sx={buttonStyles}
      >Add user</CommonButton>
      <CommonButton
        variant="outlined"
        sx={buttonStyles}
      >Web setup</CommonButton>
    </Grid>
    
  )
}

export default Authentication