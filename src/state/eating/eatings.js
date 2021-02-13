import Breakfast from '../../assets/img/teacup.svg';
import Snack from  '../../assets/img/Red-apple.svg';
import Lunch from '../../assets/img/mealplate.svg';
import Supper from '../../assets/img/saladbowl.svg';

const eatings = (store) =>{
  store.on('@init', () =>({
    eatings: {
      list:[],
      totalEatCalories: 0,
      freeCalories:0,
      locationType: ''
      
    }
  } ))

store.on('eatings/fetchEatings', async (state) => {
    const list = [
      {
        id: 1, name: 'Breakfast', calories: state.storage.breakfast.totalCaloriesEat, img: Breakfast, type: 'breakfast'
      },
      {
        id: 2, name: 'Lunch', calories: state.storage.lunch.totalCaloriesEat, img: Lunch, type: 'lunch'
      },
      {
        id: 3, name: 'Supper', calories: state.storage.supper.totalCaloriesEat, img: Supper, type: 'supper'
      },
      {
        id: 4, name: 'Snack', calories: state.storage.snack.totalCaloriesEat, img: Snack, type: 'snack'
      }
    ];

    store.dispatch('eatings/updateEatings', list);
  });


store.on('eatings/updateEatings', (state, list) => {
  const totalEatings = state.storage.breakfast.totalCalories + state.storage.lunch.totalCalories + state.storage.supper.totalCalories + state.storage.snack.totalCalories;

    const freeCalories = +state.storage.totalCalories - totalEatings;
    return {
      ...state,
      eatings: {
        ...state.eatings,
        list,
        totalEatCalories: totalEatings,
        freeCalories
      }
    }
  });


store.on('setTypeLocation', (state, payload) => {
  return{
    ...state,
    eatings:{
      ...state.eatings,
      locationType: payload.locationType

    }
  }
})

}
export{
  eatings
}
  
  
