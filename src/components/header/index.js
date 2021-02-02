import React from 'react'
import './style.scss'

import {Button} from '../../shared/button/index.js'
function Header ({handleRoute}){


  return(
    <header className='header-dashboard'>
      <Button className='btn-update'
        onClick={handleRoute}>
          Оновити дані
      </Button>
    </header>
  )
}

export{
  Header
}