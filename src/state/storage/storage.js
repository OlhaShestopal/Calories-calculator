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


      return{
        ...state,
          storage: {
            ...state.storage,
            [locationProducts]:{
              ...storage[locationProducts],
              listProducts: state.products[locationProducts],
              
            }
          }
      }})


store.on('storage/calculate',(state)=>{
  const locationProducts = state.eatings.locationType;
  const activeMeal = state.storage[locationProducts].listProducts;
  const totalCaloriesEat = activeMeal.reduce((total, current) => total + current.calories, 0);
  // const totalEatings = list.reduce((total, current) => total + current.calories, 0);
  const totalFats = activeMeal.reduce((total, current) => total + current.fat_total_g, 0);

  const  totalProtein = activeMeal.reduce((total, current) => total + current.protein_g, 0);

  const totalCarbohydrates = activeMeal.reduce((total, current) => total + current.carbohydrates_total_g, 0);

  return{
    ...state,
    storage: {
      ...state.storage,
      [locationProducts]: {
        ...store[locationProducts],
          listProducts: state.products[locationProducts],
          totalCaloriesEat: totalCaloriesEat, 
          totalFats: totalFats,
          totalProtein: totalProtein,
          totalCarbohydrates: totalCarbohydrates,
      }


    }
  }
})
}



export{
  storage
}