// Write your code here
import './index.css'
import {Component} from 'react'
import CryptocurrenciesList from '../CryptocurrenciesList'

const CryptocurrencyTracker = () => (
  <div className="crypto-container">
    <CryptocurrenciesList />
  </div>
)

export default CryptocurrencyTracker
