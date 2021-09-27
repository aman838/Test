export const INCREMENT ="INCREMENT"
export const DECREMENT ="DECREMENT"
export const increment=()=>{

    return {
        type:INCREMENT
    }
}
export const delayIncrement=()=>{
     return(dispatch)=>{
         console.log(dispatch)
           setTimeout(()=>{
        return  dispatch(increment());
        },2000)
    }
} 
export const decrement=()=>{
    return {
        type:DECREMENT
    }
}