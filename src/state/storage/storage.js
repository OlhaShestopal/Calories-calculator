const storage = (store) => {
  store.on('@init', ()=> ({
    storage: {
      breakfast: [],
      lunch: [],
      supper: [], 
      snack: [],
      totalCalories: '',
      active: []
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
            breakfast:state.products.breakfast,
        }
      }
      case 'lunch':
        return{
          storage: {
            ...state.storage,
              lunch:state.products.lunch,
          }
        }
        case 'supper':
          return{
            storage: {
              ...state.storage,
                supper:state.products.supper,
            }
          }
          case 'snack':
            return{
              storage: {
                ...state.storage,
                snack:state.products.snack,
              }
            }
    }
  })
// store.on('storage/fetchActiveProductList', async (state, location)=>{
// console.log(typeof(location))
//   switch(location){
//     case 'breakfast':
//       return{
//         storage: {
//           ...state.storage,
//             active:storage.breakfast,
//         }
//       }
//       case 'lunch':
//         return{
//           storage: {
//             ...state.storage,
//             active:storage.lunch,
//           }
//         }
//         case 'supper':
//           return{
//             storage: {
//               ...state.storage,
//               active:storage.supper,
//             }
//           }
//           case 'snack':
//             return{
//               storage: {
//                 ...state.storage,
//                 active:storage.snack,
//               }
//             }
//   }
// })

}



export{
  storage
}