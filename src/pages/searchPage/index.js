import './style.scss'
import {useStoreon} from 'storeon/react'
import {ModalProduct} from '../../components/modalProduct/index.js'
import { useEffect, useState } from 'react'
import { Button } from '../../shared/button'
import {NotFoundModal} from '../../components/modalNotFound/index.js'
import back from '../../assets/img/back.svg'


function Search (props){

  const {products, dispatch}=useStoreon('products');
  const {eatings}=useStoreon('eatings');
  const [productName, setProductName]=useState('');
  const handlerequest = (e) => {
    e.preventDefault();
    dispatch('fetchProducts', {url: '/nutrition', method: 'GET', query: {query: productName} });
  }

  const handleBack = () => {
    props.history.push('/dashboard')
  }
  useEffect(() => {
    return () => {
      dispatch('product/resetSerchState')
    }
  },[dispatch])

  
  return(
  <div className='container'>
    <form className='search-form' onSubmit={handlerequest}>
      <button className="btn-icon" onClick={handleBack}><img className='btn-icon-img' src={back} alt='back'/></button>
      <input className='input input-search' 
        value={productName} onChange={event => setProductName(event.target.value)}
        type='search'
        placeholder=" Введіть назву продукту...">
      </input>
      <Button className='btn-search'>
        Search
      </Button>
    </form>
    {products.ProductProperties !== null && <ModalProduct/>}
    {!products.isRequestSuccess && <NotFoundModal/>}
  </div>
  
  )
}
export{
  Search
}