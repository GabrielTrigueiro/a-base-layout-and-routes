import { Drawer } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const SideBar: React.FC = ({children}) => {
  return (
    <>
        <Drawer
        open={true}
        >
            sidebar
        </Drawer>
        {children}
    </>
  )
}
