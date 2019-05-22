import React, { Component } from 'react'
import Pictures from './Pictures'
class CryptoRow extends Component {
  render() {
    return (
      <section className="table">
        <h3> {this.props.name}</h3>
        <p>
          <Pictures id={this.props.id} />
        </p>
        <em>{this.props.currencies}</em>
      </section>
    )
  }
}

export default CryptoRow
