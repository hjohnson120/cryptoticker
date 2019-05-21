import React, { Component } from 'react'
import Pictures from './Pictures'
class CryptoRow extends Component {
  render() {
    return (
      <div>
        <section className="table">
          <ul>
            <li>
              <h3> {this.props.name}</h3>
              <p>
                <Pictures id={this.props.id} />
              </p>
              <em>{this.props.currencies}</em>
            </li>
          </ul>
        </section>
      </div>
    )
  }
}

export default CryptoRow
