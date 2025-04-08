import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'
function CakeContainer(props) {
  return (
    <div>
     <h2>number of cake : {props.numOfCakes}</h2>
     <button onClick={props.buyCake}>buy cake</button>
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
    buyCake:()=> dispatch(buyCake())
  }
}

export default connect(mapStateToprops,mapDispatchToprops)(CakeContainer)