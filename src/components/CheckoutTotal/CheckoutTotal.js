import React, { Component } from 'react';
import CheckoutSummary from '../CheckoutSummary/CheckoutSummary.js';
import CheckoutItemDetails from '../CheckoutItemDetails/CheckoutItemDetails.js';
import CheckoutPromoCode from '../CheckoutPromoCode/CheckoutPromoCode.js';
import './CheckoutTotal.css';

export default class CheckoutTotal extends Component {
  render() {
    return (
      <div className="CheckoutTotal">
        <CheckoutSummary summaryData={this.props.checkoutData} />
        <div className="est-total-container">
          <span className="est-total-label">Est. total</span>
          <span className="est-total-value">{this.props.checkoutData.estTotal}</span>
        </div>
        <CheckoutItemDetails itemData={this.props.checkoutData.items[0]} />
        <CheckoutPromoCode />
      </div>
    );
  }
}
