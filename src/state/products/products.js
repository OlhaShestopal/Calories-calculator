import {request} from '../../api/request';

const products = (store) =>{
  store.on('@init', () =>({
    products: {
      breakfast: [],
      lunch: [],
      supper: [],
      snack: [],
      ProductProperties: null,
      productWeight: '',
      isRequestSuccess: true,
    }
  } ))
  
store.on('fetchProducts',  async (_,params) => {
  const resalt = await request(params);
  
store.dispatch('products/saveProducts', resalt.items)

})
  
store.on('products/saveProducts', ((state, data) => {
  
  return{
      products:{
        ...state.products,
        ProductProperties: data.length > 0 ? data[0] : null,
        isRequestSuccess: data.length > 0
      }
    
  }
}))
  
store.on('products/save', (state, payload) => {
  const productWeight = +payload.productWeight;
  const listItem = {...state.products.ProductProperties};
  listItem.productWeight = productWeight;
  const locationProducts = state.eatings.locationType;
  console.log(locationProducts)
  switch(locationProducts){
    case 'breakfast':
      return{
        products: {
          ...state.products,
          breakfast:[...state.products.breakfast, listItem],
          
        }
      }
      case 'lunch':
        return{
          products: {
            ...state.products,
            lunch:[...state.products.lunch, listItem],
            
          }
        }
        case 'supper':
          return{
            products: {
              ...state.products,
              supper:[...state.products.supper, listItem],
              
            }
          }
          case 'snack':
            return{
              products: {
                ...state.products,
                snack:[...state.products.snack, listItem],
                
              }
            }
  }
  
}
)


store.on('product/resetSerchState',(state)=>({
  products:{
    ...state.products,
    isRequestSuccess: true,
    ProductProperties: null,
    
  }
}))
}


export{
  products
}