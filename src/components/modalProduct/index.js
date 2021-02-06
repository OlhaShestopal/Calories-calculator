import './style.scss'
import '../../shared/input/style.scss'
import {useStoreon} from 'storeon/react'
import {Button} from '../../shared/button/index'
import {IconButton} from '../../shared/icon-button/index'
import { useState } from 'react'


function ModalProduct (props) {
  const {products, dispatch: productsDispatch}=useStoreon('products')
  const {dispatch: storageDispatch}=useStoreon('storage')
  const {name, calories, fat_total_g, protein_g,carbohydrates_total_g} =  products.ProductProperties
  const [productWeight, setProductWeight]=useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    productsDispatch('products/save',{
      productWeight
    })
    productsDispatch('product/resetSerchState')
    storageDispatch('saveStorageProducts', products)
    
  }

  return(
    <div className="modal">
      <form className='modal__body'>
        <div className='modal__header'>
          <h1 className='modal__title'>Add to menu {name}?</h1>
          <IconButton 
            className="modal__close"
            icon="close"
            aria-label="close modal"
            />
        </div>
      
      <input 
        className="input modal__input"
        placeholder='How many grams?'
        value={productWeight} onChange={event => setProductWeight(event.target.value)}/>
        <div className="modal__info">
          <span className='modal__info-item'>Kcal: {calories}</span>
          <span className='modal__info-item'>Protein: {protein_g}</span>
          <span className='modal__info-item'>Fats: {fat_total_g}</span>
          <span className='modal__info-item'>Carbohydrates: {carbohydrates_total_g}</span>
        </div>
        <Button className="modal__btn" onClick ={handleSubmit}>Add</Button>
      </form>
    </div>
    
  )

}

export{
  ModalProduct
}