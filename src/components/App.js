import React, { Component } from 'react';
import CheckoutTotal from './CheckoutTotal/CheckoutTotal.js';
import logo from '../logo.svg';
import CHECKOUT_DATA from '../data/checkout-total.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-container">
          <CheckoutTotal checkoutData={CHECKOUT_DATA}  className="CheckoutTotalComponent" />
        </div>
      </div>
    );
  }
}

export default App;
