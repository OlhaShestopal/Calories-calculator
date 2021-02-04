import Breakfast from '../../assets/img/teacup.svg';
import Snack from  '../../assets/img/Red-apple.svg';
import Lunch from '../../assets/img/mealplate.svg';
import Supper from '../../assets/img/saladbowl.svg';

const eatings = (store) =>{
  store.on('@init', () =>({
    eatings: {
      list:[],
      totalEatCalories: '',
      freeCalories:'',
      locationType: ''
      
    }
  } ))

store.on('eatings/fetchEatings', async (state) => {
    const list = [
      {
        id: 1, name: 'Breakfast', calories: 200, img: Breakfast, type: 'breakfast'
      },
      {
        id: 2, name: 'Lunch', calories: 100, img: Lunch, type: 'lunch'
      },
      {
        id: 3, name: 'Supper', calories: 300, img: Supper, type: 'supper'
      },
      {
        id: 4, name: 'Snack', calories: 300, img: Snack, type: 'snack'
      }
    ];

    store.dispatch('eatings/updateEatings', list);
  });


store.on('eatings/updateEatings', (state, list) => {
    const totalEatings = list.reduce((total, current) => total + current.calories, 0);
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
  
  
