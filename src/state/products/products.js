
const products = (store) =>{
  store.on('@init', () =>({
    products: {
      list:[],
      totalProductsCalories: '',
      
    }
  } ))

  store.on('products/fetchProducts', async(state) =>{
    const list = [
      {name: 'potato', id: '1', calories: '100'},
      {name: 'milk', id: '2', calories: '150'},
      {name: 'meat', id: '3', calories: '120'},
      {name: 'apple', id: '4', calories: '330'},
      {name: 'bunanna', id: '5', calories: '130'},
      {name: 'potato1', id: '6', calories: '140'},
      {name: 'potato2', id: '7', calories: '150'},
      {name: 'potato3', id: '8', calories: '160'},
      {name: 'potato4', id: '9', calories: '180'},
    ];
    store.dispatch('products/updateProducts', list)
  })

  store.on('products/updataProducts', (state, list) =>{
    const totalProductsCalories = list.reduce((total, current) => total + current.calories, 0);
    return{
    ...state,
    products:{
      ...state.products,
      list,
      totalProductsCalories
    }

  }
  

})
}

export{
  products
}