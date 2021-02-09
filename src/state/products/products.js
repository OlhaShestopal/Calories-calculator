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
    ...state,
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
  listItem.totalProdKcal = (productWeight * listItem.calories)/100;

  const locationProducts = state.eatings.locationType;

  return{
    products:{
      ...state.products,
      [locationProducts]: [...state.products[locationProducts], listItem]

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