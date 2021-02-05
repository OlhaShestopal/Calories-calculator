const storage = (store) => {
  store.on('@init', ()=> ({
    storage: {
      breakfastStorage: [],
      lunchStorage: [],
      supperStorage: [],
      snackStorage: [],
      totalCalories: ''
    }
  }))

  store.on('saveStorageCalories', (state, _)=>{
    return{
      storage:{
        totalCalories: state.totalCalories
      }
    }
  })

store.on('saveStorageProducts', (state, _) => {
  const locationProducts = state.eatings.locationType;
  switch(locationProducts){
    case 'breakfast':
      return{
        storage: {
          ...state.storage,
            breakfasStorege:state.products.breakfast,
        }
      }
      case 'lunch':
        return{
          storage: {
            ...state.storage,
              lunchStorage:state.products.lunch,
          }
        }
        case 'supper':
          return{
            storage: {
              ...state.storage,
                supperStorage:state.products.supper,
            }
          }
          case 'snaсk':
            return{
              storage: {
                ...state.storage,
                  snackStorage:state.products.snack,
              }
            }
    }
  })
}

export{
  storage
}