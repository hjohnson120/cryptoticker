import React, { Component } from 'react'

class CryptoRow extends Component {
  render() {
    return (
      <div>
        <section>
          <ul>
            <li>
              <h3> {this.props.name}</h3>
              <em>{this.props.currencies}</em>
            </li>
          </ul>
        </section>
      </div>
    )
  }
}

export default CryptoRow
