import React, { Component } from 'react';
import './CheckoutPromoCode.css';

export default class CheckoutPromoCode extends Component {
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
