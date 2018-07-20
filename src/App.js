import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const CHECKOUT_DATA = {
  "subtotal": "$102.96",
  "pickupSavings": "-$3.85",
  "estTaxesFees": "$8.92",
  "zipCode": "94085",
  "estTotal": "$108.03",
  "items": [
      {
          "title": "OFM Essentials Racecar-Style Leather Gaming Chair, Red",
          "imgUrl": "https://i5.walmartimages.com/asr/58ed28c8-42fa-4966-902c-292940257bb1_1.ef2b733f30c41bfa79d99303e6a11627.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
          "price": "$99.11",
          "originalPrice": "$102.96",
          "qty": "1"
      }
  ]
};

class CheckoutSummary extends React.Component {
  render() {
    return (
      <div>
        <span class="subtotal-label">Subtotal</span>
        <span class="subtotal-value">{this.props.summaryData.subtotal}</span>
        <span class="pickup-savings-label">Pickup Savings</span>
        <span class="pickup-savings-value">{this.props.summaryData.pickupSavings}</span>
        <span class="est-taxes-fees-label">Est. taxes & fees</span>
        <span class="est-taxes-fees-value">{this.props.summaryData.estTaxesFees}</span>
        <span class="zipcode-label">(Based on {this.props.summaryData.zipCode})</span>
      </div>
    );
  }
}

class CheckoutItemDetails extends React.Component {
  render() {
    return (
      <div>
        <div class="show-label-wrapper">
          <span class="show-label">See item details</span>
          <span class="show-icon">+</span>
        </div>
        <div class="hide-label-wrapper">
          <span class="hide-label">Hide item details</span>
          <span class="hide-icon">-</span>
        </div>
        <div class="item-wrapper">
          <div class="item-img">
            <img src={this.props.itemData.imgUrl} />
          </div>
          <div class="item-summary">
            <div class="item-title">{this.props.itemData.title}</div>
            <div class="item-price">{this.props.itemData.price}</div>
            <div class="item-qty">{this.props.itemData.qty}</div>
            <div class="item-original-price">{this.props.itemData.originalPrice}</div>
          </div>
        </div>
      </div>
    )
  }
}

class CheckoutPromoCode extends React.Component {
  render() {
    return (
      <div>
        <div class="show-label-wrapper">
          <span class="show-label">Apply promo code</span>
          <span class="show-icon">+</span>
        </div>
        <div class="hide-label-wrapper">
          <span class="hide-label">Hide promo code</span>
          <span class="hide-icon">-</span>
        </div>
        <div class="item-wrapper">
          <span class="promo-label">Promo code</span>
          <div class="promo-input-wrapper">
            <input class="promo-input" />
            <button class="promo-apply-button">Apply</button>
          </div>
        </div>
      </div>
    )
  }
}

class CheckoutTotal extends React.Component {
  render() {
    return (
      <div>
        <CheckoutSummary summaryData={this.props.checkoutData} />
        <span class="est-total-label">Est. total</span>
        <span class="est-total-value">{this.props.checkoutData.estTotal}</span>
        <CheckoutItemDetails itemData={this.props.checkoutData.items[0]} />
        <CheckoutPromoCode />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <CheckoutTotal checkoutData={CHECKOUT_DATA} />
        </p>
      </div>
    );
  }
}

export default App;
