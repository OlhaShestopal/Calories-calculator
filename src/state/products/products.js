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
  
  let locationProducts
  if (state.eatings.locationType){
    locationProducts = state.eatings.locationType;
  } else{
    locationProducts = (window.location.search).slice(window.location.search.indexOf('=') + 1)
  }
  
  listItem.calories = Math.round((productWeight * listItem.calories)/100);
  listItem.fat_total_g = Math.round((productWeight * listItem.fat_total_g)/100);
  listItem.protein_g = Math.round((productWeight * listItem.protein_g)/100);
  listItem.carbohydrates_total_g = Math.round((productWeight * listItem.carbohydrates_total_g)/100);

  return{
      products: {
        ...state.products,
          [locationProducts]: listItem,
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