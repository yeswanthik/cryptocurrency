// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoList} = props
  const {usdValue, euroValue, currencyLogo, currencyName} = cryptoList
  return (
    <li className="li-items" testid="loader">
      <div className="lis">
        <img className="logo" src={currencyLogo} alt={currencyName} />
        <p>{currencyName}</p>
      </div>
      <div className="lis">
        <p className="pname">{usdValue}</p>
        <p className="pname">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
