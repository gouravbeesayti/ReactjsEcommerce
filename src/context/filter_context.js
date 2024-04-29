import { createContext, useContext, useEffect, useReducer } from "react";
import { useGlobalProductContext } from "./ProductContext";
import reducer from "../reducer/filterReducer"
// import { type } from "@testing-library/user-event/dist/type";

const FilterContext = createContext()

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view :true,
    sorting_value:'lowest', 
    filters:{
        text:'',
        category:"all",
        company:"all",
        color :'all',
        maxPrice:0 ,
        price:0,
        minPrice:0  ,
    }  
}
export const FilterContextProvider = ({ children }) => { // children is app component

    const { products } = useGlobalProductContext()
    console.log('filter products', products)

    const [state, dispatch] = useReducer(reducer, initialState)
    
    // set te grid view 
    const setGridView =()=>{
        return dispatch({type :"SET_GRID_VIEW"})
    }
    const setListView =()=>{
        return dispatch({type :"SET_LIST_VIEW"})
    }
    // sorting function 
    const sorting = (event)=>{
        let userValue = event.target.value;
        dispatch({type :"GET_SORT_VALUE",payload:userValue})
    }

    // update te filter values when input change (search)
    const updateFilterValue=(event)=>{
        let name=event.target.name;
        let value =event.target.value;
        return dispatch({type :'UPDATE_FILTER_VALUE' ,payload:{name,value}})

    }
    // to clear the filter by  clicking clear filter button
    const clearFilters=()=>{
        dispatch({type:"CLEAR_FILTERS"})
    }

    // to sort the product 
    useEffect(()=>{
            // console.log('hii')
            dispatch({type:'FILTER_PRODUCTS'})
            dispatch({type :'SORTING_PRODUCTS' })
    },[state.sorting_value,state.filters])
    useEffect(() => {

        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
    },[products])


    return <FilterContext.Provider value={{ ...state,setGridView ,setListView,sorting,updateFilterValue,clearFilters}}>
        {children}
    </FilterContext.Provider>
}


export const useFilterContext = () => {
    return useContext(FilterContext)
}
