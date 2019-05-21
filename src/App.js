import React, { Component } from 'react'
import Header from './components/Header'
import CryptoRow from './components/CryptoRow'

class App extends Component {
  state = {
    currencies: []
  }

  componentDidMount() {
    this.getCurrenciesFromApi()
    setInterval(() => this.getCurrenciesFromApi(), 10000)
  }

  getCurrenciesFromApi = () => {
    fetch('https://api.coinmarketcap.com/v2/ticker/?limit=20')
      .then(resp => {
        return resp.json()
      })
      .then(json => {
        console.log(json)
        this.setState({
          currencies: Object.values(json.data)
        })
      })
  }

  render() {
    return (
      <>
        <Header />
        {this.state.currencies.map(currency => {
          return (
            <>
              <CryptoRow
                name={currency.name}
                currencies={currency.quotes.USD.price}
              />
            </>
          )
        })}
      </>
    )
  }
}

export default App
