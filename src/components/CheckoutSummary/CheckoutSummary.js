import React, { Component } from 'react';
import './CheckoutSummary.css';

const PICKUP_POPUP_TIME = 2000;

export default class CheckoutSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickupPopup: false
    };
  }

  onPickupClick() {
    setTimeout(() => {
      this.setState({
        pickupPopup: false
      });
    }, PICKUP_POPUP_TIME);
    this.setState({
      pickupPopup: true
    });
  }

  render() {
    return (
      <div className="CheckoutSummary">
        <div className="subtotal-container">
          <span className="subtotal-label">Subtotal</span>
          <span className="subtotal-value">{this.props.summaryData.subtotal}</span>
        </div>
        <div className="pickup-savings-container">
          <span className="pickup-savings-label" onClick={this.onPickupClick.bind(this)}>Pickup Savings</span>
          <span className="pickup-savings-value">{this.props.summaryData.pickupSavings}</span>
          {this.state.pickupPopup &&
            <div className="pickup-popup">
              Picking up your order in the store helps cut costs, and we pass the savings on to you.
            </div>
          }
        </div>
        <div className="est-taxes-fees-container">
          <span className="est-taxes-fees-label">Est. taxes & fees</span>
          <span className="est-taxes-fees-value">{this.props.summaryData.estTaxesFees}</span>
        </div>
        <div className="zipcode-label">(Based on {this.props.summaryData.zipCode})</div>
      </div>
    );
  }
}
