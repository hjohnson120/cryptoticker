import React, { Component } from 'react'

class Pictures extends Component {
  render() {
    return (
      <div>
        <img
          src={
            'https://s2.coinmarketcap.com/static/img/coins/16x16/' +
            this.props.id +
            '.png'
          }
        />
      </div>
    )
  }
}

export default Pictures
