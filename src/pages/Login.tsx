import React, { useState } from 'react'

export const Login: React.FC = ({children}) => {

  const [palceHolderAuth ,setPalceHolderAuth] = useState<boolean>(false)

  if(palceHolderAuth) return <>already logged</>
  return (
   <>
    Login page
   </>
  )
}

