import {Select} from '../../shared/select/index.js';
import '../../shared/input/style.scss';
import {Button} from '../../shared/button/index.js';
import { useState } from 'react';
import {useStoreon} from 'storeon/react';
import './style.scss';

const listGender = [
  {title: 'Your gender', value: '', id: '1'},
  {title: 'Female', value: 'female', id: '2'},
  {title: 'Male', value: 'male', id: '3'},
];

const listActivity = [
  {title: 'Activity', value: '', id: '1'},
  {title: 'Low activity', value: '1.2', id: '2'},
  {title: 'Moderate activity', value: '1.55', id: '3'},
  {title: 'High activity', value: '1.725', id: '4'}
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
    storeDispatch('saveStorageCalories',totalCalories)
    props.history.push('/dashboard')
  }

  return(
    <div className='container'>
      <form className="calculating"  onSubmit={handleSubmit}>
          <h1 className='calculating__title'>Calculate your need for calories</h1>
          <div className="calculating__item calculating__item-select">
            <Select required value={gender} list={listGender} onChange={event => setGender(event.target.value)}/>
          </div>
          <input 
            type="text"
            required
            className='input calculating__item'
            placeholder="Enter your height"
            value={height} onChange={event => setHeight(event.target.value)}/>
          <input 
            type="text"
            required
            className='input calculating__item' 
            placeholder="Enter your weight"
            value={weight} onChange={event => setWeight(event.target.value)}/>
          <input 
            type="text"
            required
            className='input calculating__item' 
            placeholder="Enter your age"
            value={age} onChange={event => setAge(event.target.value)}/>
          <div className="calculating__item calculating__item-select">
            <Select required
            value={activity} list={listActivity} onChange={event => setActivity(event.target.value)}/>
          </div>
          <Button className='calculating__item calculating__item-button'>
          Calculate
          </Button>
        </form>
    </div>
    
  )
}

export {Calculate}
