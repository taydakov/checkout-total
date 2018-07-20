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
      <div className="CheckoutSummary">
        <span className="subtotal-label">Subtotal</span>
        <span className="subtotal-value">{this.props.summaryData.subtotal}</span>
        <span className="pickup-savings-label">Pickup Savings</span>
        <span className="pickup-savings-value">{this.props.summaryData.pickupSavings}</span>
        <span className="est-taxes-fees-label">Est. taxes & fees</span>
        <span className="est-taxes-fees-value">{this.props.summaryData.estTaxesFees}</span>
        <span className="zipcode-label">(Based on {this.props.summaryData.zipCode})</span>
      </div>
    );
  }
}

class CheckoutItemDetails extends React.Component {
  render() {
    return (
      <div className="CheckoutItemDetails">
        <div className="show-label-wrapper">
          <span className="show-label">See item details</span>
          <span className="show-icon">+</span>
        </div>
        <div className="hide-label-wrapper">
          <span className="hide-label">Hide item details</span>
          <span className="hide-icon">-</span>
        </div>
        <div className="item-wrapper">
          <div className="item-img">
            <img src={this.props.itemData.imgUrl} alt={this.props.itemData.title} />
          </div>
          <div className="item-summary">
            <div className="item-title">{this.props.itemData.title}</div>
            <div className="item-price">{this.props.itemData.price}</div>
            <div className="item-qty">{this.props.itemData.qty}</div>
            <div className="item-original-price">{this.props.itemData.originalPrice}</div>
          </div>
        </div>
      </div>
    )
  }
}

class CheckoutPromoCode extends React.Component {
  render() {
    return (
      <div className="CheckoutPromoCode">
        <div className="show-label-wrapper">
          <span className="show-label">Apply promo code</span>
          <span className="show-icon">+</span>
        </div>
        <div className="hide-label-wrapper">
          <span className="hide-label">Hide promo code</span>
          <span className="hide-icon">-</span>
        </div>
        <div className="item-wrapper">
          <span className="promo-label">Promo code</span>
          <div className="promo-input-wrapper">
            <input className="promo-input" />
            <button className="promo-apply-button">Apply</button>
          </div>
        </div>
      </div>
    )
  }
}

class CheckoutTotal extends React.Component {
  render() {
    return (
      <div className="CheckoutTotal">
        <CheckoutSummary summaryData={this.props.checkoutData} />
        <span className="est-total-label">Est. total</span>
        <span className="est-total-value">{this.props.checkoutData.estTotal}</span>
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
        <div className="App-intro">
          <CheckoutTotal checkoutData={CHECKOUT_DATA} />
        </div>
      </div>
    );
  }
}

export default App;
