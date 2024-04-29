
import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/ProductReducer";

const AppContext = createContext()

const API = "https://api.pujakaitem.com/api/products";

//useReducer hook initialState and reducer function 
const initialState = {
      isLoading: false,
      isError: false,
      products: [],
      featureProducts: [],
      isSingleLoading: false,
      singleProduct: {}  //we use object because we want to show only single product
}


const AppProvider = ({ children }) => {
      // useReducer //
      const [state, dispatch] = useReducer(reducer, initialState)

      const getProducts = async (url) => {
            dispatch({ type: "SET_LOADING" })
            try {
                  const response = await axios.get(url)
                  const products = await response.data;
                  // console.log("file  : productcontext,js `line 10 `get Products ` res ", products)
                  dispatch({ type: "SET_API_DATA", payload: products })
            } catch (error) {
                  dispatch({ type: "API_ERROR" })

            }
      }

      // my 2nd api call for single products 
      const getSingleProduct = async (url) => {
            dispatch({ type: "SET_SINGLE_LOADING" });
            try {
                  const res = await axios.get(url);
                  const singleProduct = await res.data;
                  dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
                  // console.log(singleProduct,'this is')
            } catch (error) {
                  dispatch({ type: "SET_SINGLE_ERROR" });
            }
      };
      useEffect(() => {
            getProducts(API);

      }, [])
      return (
            <AppContext.Provider value={{ ...state, getSingleProduct }}>
                  {children}
            </AppContext.Provider>
      );

}
// create costome hook 

const useGlobalProductContext = () => {
      return useContext(AppContext);
};
export { AppProvider, AppContext, useGlobalProductContext }




