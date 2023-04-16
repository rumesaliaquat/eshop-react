
// // API ka data redux mai store krwane k liae dispatch k through actions ke functions obj ko bhejein ge as a argument then wo action reducer ke pass jaega or jo task perform krna hai payload k sth wo hoga or phr agr redux se display krna ho app mai to kr skte

const setLoading = () => {
  return {
    type: 'SET_LOADING',
  }
}
const setProducts = (products) => {
  return {
    type: 'SET_PRODUCTS',
    payload: products,
  }
}

const setError = () => {
  return {
    type: 'SET_ERROR',
  }
}

const setSingleProdLoading = () => {
  return {
    type: 'SET_SINGLE_LOADING',
  }
}

const setSingleProduct = (singleProductDetail) => {
  return {
    type: 'SET_SINGLE_PRODUCT',
    payload: singleProductDetail, 
  }
}

const setSingleProdError = () => {
  return {
    type: 'SET_SINGLE_ERROR',
  }
}


export { setLoading, setProducts, setError, setSingleProdLoading, setSingleProduct,setSingleProdError }