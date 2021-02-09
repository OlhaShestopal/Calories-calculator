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
        activeMeal: {},
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

store.on('saveStorageProducts', (state, _) => {
  const locationProducts = state.eatings.locationType;

  const totalCaloriesEat = state.storage[locationProducts].listProducts.reduce((total, current) => total + current.calories, 0).toFixed(2);
  // const totalEatings = list.reduce((total, current) => total + current.calories, 0);

  const totalFats = state.storage[locationProducts].listProducts.reduce((total, current) => total + current.fat_total_g, 0).toFixed(2);

  const  totalProtein = state.storage[locationProducts].listProducts.reduce((total, current) => total + current.protein_g, 0).toFixed(2);

  const totalCarbohydrates = state.storage[locationProducts].listProducts.reduce((total, current) => total + current.carbohydrates_total_g, 0).toFixed(2);

      return{
        ...state,
          storage: {
            ...state.storage,
            [locationProducts]:{
              ...storage[locationProducts],
              listProducts: state.products[locationProducts],
              totalCaloriesEat: totalCaloriesEat, 
              totalFats: totalFats,
              totalProtein: totalProtein,
              totalCarbohydrates: totalCarbohydrates,
            }
          }
      }})

}



export{
  storage
}