import React,{createContext,useContext,useReducer} from "react";

//Prepare the DataLayer
export const StateContext=createContext();

//Wrap our App and provide the data Layer
export const StateProvider=({reducer,intialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,intialState)}>
    {children}
    </StateContext.Provider>
);

//Pull information from the data layer
export const useStateValue=()=>useContext(StateContext);

