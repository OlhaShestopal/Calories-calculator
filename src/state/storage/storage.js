const storage = (store) => {
  store.on('@init', ()=> ({
    storage: {
        breakfast:{
          listProducts:[],
          totalCaloriesEat: '',
          totalProtein: '',
          totalFats: '',
          totalCarbohydrates: ''
        },
        lunch: {
          listProducts:[],
          totalCalories: '',
          totalProtein: '',
          totalFats: '',
          totalCarbohydrates: ''
        },
        supper:{
          listProducts:[],
          totalCalories: '',
          totalProtein: '',
          totalFats: '',
          totalCarbohydrates: ''
        },
        snack:{
          listProducts:[],
          totalCalories: '',
          totalProtein: '',
          totalFats: '',
          totalCarbohydrates: ''
        },
        totalCalories: '',

    }
    
  }))

  store.on('saveStorageCalories', (state, _) => {
    return {
      ...state,
      storage: {
        ...state.storage,
        totalCalories: state.totalCalories
      }
    }
  })

store.on('saveStorageProducts', async (state) => {
  const locationProducts = state.eatings.locationType;

  return{
      storage: {
        ...state.storage,
        [locationProducts]:{
          ...state.storage[locationProducts],
          listProducts: [...state.products[locationProducts]],
        }
      }
  }})

}


export{
  storage
}