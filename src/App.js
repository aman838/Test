import React, {useState,useEffect} from 'react';
import {connect} from "react-redux"
import {increment,decrement, delayIncrement} from  "./Redux/actions/IncrementDecrementAction"
import Attendence from './Attendence';
import ExampleOfUseCallBack1 from './ExampleOfuseCallBack1';


import ExampleOfUseMemo from './ExampleOfUseMemo';
import Simple from './simple';

function App(props) {
  // const [length, set_length] = useState(3);
  // const [name, set_name] = useState('John Doe');
 
 const incrementNumber=()=>{
   props.increment();
      //  props.delayIncrement();
 }
 const decrementNumber=()=>{
   if(props.number>0){
  props.decrement();
   }
 }

// useEffect(() => {
//   console.log(props)
// }, [])
 


  return (
 <>
   <h1>Hello Aman {props.number}</h1>
   <button onClick={()=>incrementNumber()}>ADD</button>
   <button onClick={()=>decrementNumber()}>REMOVE</button>
   </>
  );
}

const mapStateToProps=(obj)=>{
 const number = obj.rootReducer.number
 return {number}
}

const mapDispatchToProps=(dispatch)=>{
  return {
     delayIncrement:()=>dispatch(delayIncrement()),
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
   }
}

export default connect(mapStateToProps,
   mapDispatchToProps
  )(App);