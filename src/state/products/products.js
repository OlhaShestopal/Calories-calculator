import {request} from '../../api/request.js';

const products = (store) =>{
  store.on('@init', () =>({
    products: {
      list:[],
      ProductProperties: null,
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
  store.on('products/updataProducts', (state, list) =>{
    const ProductProperties = list.reduce((total, current) => total + current.calories, 0);
    return{
    ...state,
    products:{
      ...state.products,
      list,
      ProductProperties
    }

  }
  

})
}

export{
  products
}