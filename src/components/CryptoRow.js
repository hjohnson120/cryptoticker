import React, { Component } from 'react'

class CryptoRow extends Component {
  render() {
    return (
      <div>
        <section>
          <ol>
            <li>
              {this.props.name} {this.props.currencies}
            </li>
          </ol>
        </section>
      </div>
    )
  }
}

export default CryptoRow
