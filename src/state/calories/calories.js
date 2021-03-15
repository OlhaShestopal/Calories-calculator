import {calcTotal} from '../../pages/calculatingPage/lib/index.js'



const calories = (store) => {
  store.on('@init', () => ({
    totalCalories: ""
  }));

  store.on('setTotalCalories', (_, params) => {
    const totalCalories = calcTotal(params);
    
    return{
      totalCalories: totalCalories,
    }
  })
  
  
}




export {
  calories
}