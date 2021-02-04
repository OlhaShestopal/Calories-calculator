import {request} from '../../api/request';

const products = (store) =>{
  store.on('@init', () =>({
    products: {
      listProducts:[],
      brackfast: [],
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
  
  
  return {
    products: {
      ...state.products,
      listProducts:[...state.products.listProducts, listItem]
    }
  }
}
)


store.on('product/resetSerchState',(state)=>({
  products:{
    ...state.products,
    isRequestSuccess: true,
    ProductProperties: null
  }
}))
}


export{
  products
}