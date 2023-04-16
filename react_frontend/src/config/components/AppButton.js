import React from 'react'
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'


function AppButton({name, linkPath, color}) {

    return (
        <>
            <Button
                variant="contained"
                component={NavLink}
                to={linkPath}
                // color={color? color : 'primary'}
                color= {color}
                >
               {name} 
            </Button>
        </>
    )
}

export default AppButton