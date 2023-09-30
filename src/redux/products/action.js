import axios from "axios";
import {
  ADD_PRODUCT_SUCCESS,
  GET_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from "../actionTypes";
// https://mock-2-react-ofiiwg6kj-jurikalita011.vercel.app/
export const addProducts = (newProduct) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .post("https://mock2-api-template.onrender.com/products", newProduct)
    .then((res) => {
      dispatch({ type: ADD_PRODUCT_SUCCESS });
      console.log(res, "pro");
    })
    .then((err) => {
      dispatch({ type: PRODUCT_FAILURE });
      console.log(err);
    });
};

export const getProducts = () => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get("https://mock2-api-template.onrender.com/products")
    .then((res) => {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
      console.log(res);
    })
    .then((err) => {
      dispatch({ type: PRODUCT_FAILURE });
      console.log(err);
    });
};
