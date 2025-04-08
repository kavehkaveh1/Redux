import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'
function ItemContainer(props) {
  return (
    <div>
        <h2>item:{props.item}</h2>
        <button onClick={props.buyItem}>buy item</button>
    </div>
  )
}
const mapStateToProps = (state, ownprops)=>{
    const itemState = ownprops.cake?
    state.cake.numOfCakes:state.iceCream.numOfIceCreams
    return{
        item: itemState
    }
}
const mapDispatchToProps = (dispatch, ownprops)=>{
  const dispachFunction = ownprops.cake?
  ()=>dispatch(buyCake()):
  ()=>dispatch(buyIceCream())
  return{
      buyItem: dispachFunction
  }
}

export default connect(mapStateToProps,mapDispatchToProps)( ItemContainer)