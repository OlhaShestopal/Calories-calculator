const storage = (store) => {
  store.on('@init', ()=> ({
    storage: {
      listProductsStore: [],
      totalCalories: ''
    }
  }))

  store.on('saveStorage', (state, _) => {
    // const listItemStorage = state.products.listProducts
    console.log(state, '<---')
    return{
        storage:{
          ...state.storage,
          listProductsStore: state.products.listProducts,
          totalCalories: state.totalCalories,
          // [...state.products.listProducts, listItem]
        }
      
    }
  })
}

export{
  storage
}