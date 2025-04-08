import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'
function NewCakeContainer(props) {
    const[number,setnumber]=useState(1)
  return (
    <div>
     <h2>number of cake : {props.numOfCakes}</h2>
     <input type='text' value={number} onChange={e=>setnumber(e.target.value)}/>
     <button onClick={() => props.buyCake(number)}>buy {number} cake</button>
    

    </div>
  )
}

const mapStateToprops= state =>{
  return{
    numOfCakes: state.cake.numOfCakes
  }
}
const mapDispatchToprops= dispatch =>{
  return{
    buyCake:(number)=> dispatch(buyCake(number))
  }
}

export default connect(mapStateToprops,mapDispatchToprops)(NewCakeContainer)