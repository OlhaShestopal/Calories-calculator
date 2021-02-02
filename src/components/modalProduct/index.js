import './style.scss'
import {useStoreon} from 'storeon/react'


function ModalProduct () {
  const {products}=useStoreon('products')
  return(
    <form className='modal'>
      <h1> Hello</h1>
    </form>
  )

}

export{
  ModalProduct
}