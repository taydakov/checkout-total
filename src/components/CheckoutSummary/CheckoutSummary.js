import React, { Component } from 'react';
import './CheckoutSummary.css';

export default class CheckoutSummary extends Component {
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
