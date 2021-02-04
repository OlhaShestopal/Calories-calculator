import './style.scss';
import {Select} from '../../shared/select/index.js'
import '../../shared/input/style.scss';
import {Button} from '../../shared/button/index.js'
import { useState } from 'react';
import {useStoreon} from 'storeon/react'

const listGender = [
  {title: 'Ваша стать', value: '', id: '1'},
  {title: 'Жінка', value: 'female', id: '2'},
  {title: 'Чоловік', value: 'male', id: '3'},
];

const listActivity = [
  {title: 'Активність', value: '', id: '1'},
  {title: 'Низька активність', value: '1.2', id: '2'},
  {title: 'Невисока активність', value: '1.375', id: '3'},
  {title: 'Помірна активність', value: '1.55', id: '4'},
  {title: 'Висока активність', value: '1.725', id: '5'}
];


function Calculate(props) {
  const {totalCalories, dispatch: caloriesDispatch}=useStoreon('calories')
  const {dispatch: storeDispatch}=useStoreon('storage')

  const[gender, setGender]=useState('');
  const [height, setHeight]=useState('');
  const[weight, setWeight]=useState('');
  const [age, setAge]=useState('');
  const [activity, setActivity]=useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    caloriesDispatch('setTotalCalories', {age,weight,height,gender,activity});
    storeDispatch('saveStorage',totalCalories)
    props.history.push('/dashboard')
  }

  return(
    <div className='container'>
      <form className="calculating"  onSubmit={handleSubmit}>
          <h1 className='calculating__title'>Розрахуємо вашу потребу в калоріях</h1>
          <div className="calculating__item calculating__item-select">
            <Select required value={gender} list={listGender} onChange={event => setGender(event.target.value)}/>
          </div>
          <input 
            type="text"
            required
            className='input calculating__item'
            placeholder="Введіть ріст"
            value={height} onChange={event => setHeight(event.target.value)}/>
          <input 
            type="text"
            required
            className='input calculating__item' 
            placeholder="Введіть вагу"
            value={weight} onChange={event => setWeight(event.target.value)}/>
          <input 
            type="text"
            required
            className='input calculating__item' 
            placeholder="Введіть вік"
            value={age} onChange={event => setAge(event.target.value)}/>
          <div className="calculating__item calculating__item-select">
            <Select required
            value={activity} list={listActivity} onChange={event => setActivity(event.target.value)}/>
          </div>
          <Button className='calculating__item calculating__item-button'>
            Розрахувати
          </Button>
        </form>
    </div>
    
  )
}

export {Calculate}
