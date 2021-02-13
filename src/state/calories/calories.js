import {calcTotal} from '../../pages/calculatingPage/lib/index.js'



const calories = (store) => {
  store.on('@init', () => ({
    yourCalories: ""
  }));

  store.on('setTotalCalories', (_, params) => {
    const yourCalories = calcTotal(params);
    
    return{
      yourCalories: yourCalories,
    }
  })
  
  
}




export {
  calories
}