import React, { Component } from 'react'

 class RestaurantUpdate  extends Component {
  render() {
    console.warn(this.props.match.params.id)
    return (
      <div>
        <h1>Restaurant Update</h1>
      </div>
    )
  }
}
export default RestaurantUpdate