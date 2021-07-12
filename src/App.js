import React,{useEffect} from "react";
import './App.css';
import Header from "./Header"
import Home from "./Home"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Checkout from "./Checkout"
import Login from "./Login"
import {auth} from "./firebase"
import { useStateValue } from "./StateProvider";
import Payment from "./Payment"
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./Orders"
const promise=loadStripe("pk_test_51J6y0kSIxS0vNtPl2O0vBkiS03lWQJ6oSTSKOpSmze40FNInSawDceuFuLmHWan2uSEnvN9eFoFdomBhWKmOJGwz00mLbzdHlD");


function App() {
  const[{},dispatch]=useStateValue();



  useEffect(()=>{

   auth.onAuthStateChanged (authUser=>{
          console.log('THE USER IS >>> ',authUser);
   
      if(authUser){
            dispatch({
              type:'SET_USER',
              user:authUser// the user just logged in  /the user was logged in
      })}   
      else{
        dispatch({
          type:'SET_USER',
          user:null// the user just logged in  /the user was logged in
  })
             //the user is logged out
      }
   
   
   
    })    //If we login it will change the state of basket and user and same goes with user

  },[])
  
  
  
  return (
    <Router>
    <div className="app">
    


    <Switch>

    <Route path="/login">
     <Login/>
     
     </Route>

     
    <Route path="/orders">
    <Header/>
     <Orders/>
     </Route>


    <Route path="/checkout">
    <Header/>
     <Checkout/>
     </Route>

     <Route path="/payment">
    <Header/>
    <Elements stripe={promise}>
     <Payment/>
     </Elements>
     </Route>



    <Route path="/">
    <Header/>
     <Home/>
     </Route>

     
     </Switch>
    </div>
    </Router>
  );
}

export default App;
