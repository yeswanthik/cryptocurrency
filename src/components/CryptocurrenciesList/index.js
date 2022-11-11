// Write your JS code here
// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class CryptocurrenciesList extends Component {
  state = {isLoading: true, cryptoData: []}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(each => ({
      id: each.id,
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      usdValue: each.usd_value,
    }))
    this.setState({cryptoData: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, cryptoData} = this.state

    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <h1>Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
            />
            <ul className="ul-items">
              <div className="headings">
                <div className="coin">
                  <h1>Coin</h1>
                  <h1>Type</h1>
                </div>
                <div className="coin">
                  <h1>USD</h1>
                  <h1>EURO</h1>
                </div>
              </div>
              {cryptoData.map(each => (
                <CryptocurrencyItem key={each.id} cryptoList={each} />
              ))}{' '}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList
