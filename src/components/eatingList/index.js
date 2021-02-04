import {useEffect} from 'react';
import {useStoreon} from 'storeon/react'
import add from '../../assets/img/add.svg'
import './style.scss'

function EatingList({handleRoute}) {
  const {eatings, dispatch} = useStoreon('eatings')
  useEffect(() => {
    dispatch('eatings/fetchEatings');
  }, [dispatch]);
  
  const handleRouteSetLocation = (location) => {
    handleRoute(location)
    dispatch('setTypeLocation', {locationType:location})
  };

  return (
    <ul className='eating__list'>
      {eatings.list.map(item => 
        <li key={item.id} className='eating__item'>
          <div className='eating__item-header'>
            <span className='eating__name'>{item.name}</span>
            <span className='eating__calories'>{item.calories} калорій
          </span>
          </div>
          <div className="eating__content">
            <img className='eating__img' src={item.img} alt='eat' />
            <button className='btn-icon' onClick={() => handleRouteSetLocation(item.type)}>
              <img className='btn-icon-img' src={add} alt='add' />
            </button>
          </div>
        </li>
      )}
</ul>
  )
}

export{
  EatingList
}