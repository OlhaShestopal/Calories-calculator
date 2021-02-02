import Breakfast from '../../assets/img/teacup.svg';
import Snack from  '../../assets/img/Red-apple.svg';
import Lunch from '../../assets/img/mealplate.svg';
import Supper from '../../assets/img/saladbowl.svg';

const eatings = (store) =>{
  store.on('@init', () =>({
    eatings: {
      list:[],
      totalEatCalories: '',
      freeCalories:''
    }
  } ))

store.on('eatings/fetchEatings', async (state) => {
    const list = [
      {
        id: 1, name: 'Сніданок', calories: 200, img: Breakfast
      },
      {
        id: 2, name: 'Обід', calories: 100, img: Lunch
      },
      {
        id: 3, name: 'Вечеря', calories: 300, img: Supper
      },
      {
        id: 4, name: 'Перекус', calories: 300, img: Snack
      }
    ];

    store.dispatch('eatings/updateEatings', list);
  });


  store.on('eatings/updateEatings', (state, list) => {
    const totalEatings = list.reduce((total, current) => total + current.calories, 0);
    const freeCalories = +state.totalCalories - totalEatings;
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

}
export{
  eatings
}
  
  
