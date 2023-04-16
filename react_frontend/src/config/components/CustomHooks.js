import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoading,
  setError,
  setProducts,
  // setSingleProdLoading,
  // setSingleProdError,
  setSingleProduct,
} from "../redux/actions/productActions";
import { useParams } from "react-router-dom";

// ====== API calling for feature products ======

function useFetchProducts() {
  const url = "https://api.pujakaitem.com/api/products";
  const dispatch = useDispatch();
  const currState = useSelector((state) => state.productReducer);
  const { products } = currState;
  useEffect(() => {
    const getProducts = async () => {
      dispatch(setLoading());
      try {
        const res = await axios.get(url);
        dispatch(setProducts(res.data));
      } catch (err) {
        dispatch(setError(err));
        // console.log("Error:", err);
      }
    };
    getProducts();
  }, [dispatch]);
  return products;
}



// ==== API calling for single product details =====

function useFetchSingleProduct() {
  const {id} = useParams()
  const dispatch = useDispatch();
  const {singleProduct} = useSelector((state) => state.productReducer);
  // console.log("🚀 ~ file: CustomHooks.js:44 ~ useFetchSingleProduct ~ singleProductDetail:", singleProduct)

  useEffect(() => {
    const getProducts = async () => {
      // dispatch(setSingleProdLoading());
      try {
        const res = await axios.get(`https://api.pujakaitem.com/api/products/${id}`);
        dispatch(setSingleProduct(res.data));
      } catch (err) {
        // dispatch(setSingleProdError("Error:", err));
        console.log("Error:", err);
      }
    };
    getProducts();
  }, [dispatch, id]);
  return singleProduct
}

export { useFetchProducts, useFetchSingleProduct };
