import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream} from '../redux'
function IceCreamContainer(props) {
  return (
    <div>
     <h2>number of iceCreams : {props.numOfIceCreams}</h2>
     <button onClick={props.buyIceCream}>by iceCream</button>
    </div>
  )
}

const mapStateToprops= state =>{
  return{
    numOfIceCreams: state.iceCream.numOfIceCreams
  }
}
const mapDispatchToprops= dispatch =>{
  return{
    buyIceCream:()=> dispatch(buyIceCream())
  }
}

export default connect(mapStateToprops,mapDispatchToprops)(IceCreamContainer)