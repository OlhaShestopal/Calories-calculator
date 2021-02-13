const storage = (store) => {
  store.on('@init', ()=> ({
    storage: {
        breakfast:{
          listProducts:[],
          totalCalories: 0,
          totalProtein: 0,
          totalFats: 0,
          totalCarbohydrates: 0
        },
        lunch: {
          listProducts:[],
          totalCalories: 0,
          totalProtein: 0,
          totalFats: 0,
          totalCarbohydrates: 0
        },
        supper:{
          listProducts:[],
          totalCalories: 0,
          totalProtein: 0,
          totalFats: 0,
          totalCarbohydrates: 0
        },
        snack:{
          listProducts:[],
          totalCalories: 0,
          totalProtein: 0,
          totalFats: 0,
          totalCarbohydrates: 0
        },
        yourCalories: 0,
        
    }
    
  }))

  store.on('saveStorageCalories', (state, _) => {
    return {
      ...state,
      storage: {
        ...state.storage,
        yourCalories: state.totalCalories
      }
    }
  })

store.on('saveStorageProducts', (state, _) => {
  let locationProducts
  if (state.eatings.locationType){
    locationProducts = state.eatings.locationType;
  } else{
    locationProducts = (window.location.search).slice(window.location.search.indexOf('=') + 1)
  }

      return{
        ...state,
          storage: {
            ...state.storage,
            [locationProducts]:{
              ...storage[locationProducts],
              listProducts: [...state.storage[locationProducts].listProducts ,state.products[locationProducts]],
              
            }
          }
      }})


store.on('storage/calculate',(state)=>{
  let locationProducts
  if (state.eatings.locationType){
    locationProducts = state.eatings.locationType;
  } else{
    locationProducts = (window.location.search).slice(window.location.search.indexOf('=') + 1)
  }
  const activeMeal = state.storage[locationProducts].listProducts;
  const totalCaloriesEat = +Math.round(activeMeal.reduce((total, current) => total + +current.calories, 0));
  const totalFats = +Math.round(activeMeal.reduce((total, current) => total + +current.fat_total_g, 0));
  const  totalProtein = +Math.round(activeMeal.reduce((total, current) => total + +current.protein_g, 0));
  const totalCarbohydrates = +Math.round(activeMeal.reduce((total, current) => total + +current.carbohydrates_total_g, 0));

  return{
    ...state,
    storage: {
      ...state.storage,
      [locationProducts]: {
        ...state.storage[locationProducts],
          totalCalories: +totalCaloriesEat, 
          totalFats: +totalFats,
          totalProtein: +totalProtein,
          totalCarbohydrates: +totalCarbohydrates,
      }
    }
  }
})
}



export{
  storage
}