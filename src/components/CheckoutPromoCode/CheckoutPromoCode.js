import React, { Component } from 'react';
import './CheckoutPromoCode.css';

export default class CheckoutPromoCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  } 

  onShowClick() {
    this.setState({
      expanded: true
    });
  }

  onHideClick() {
    this.setState({
      expanded: false
    })
  }

  render() {
    return (
      <div className="CheckoutPromoCode">
        {!this.state.expanded &&
          <div className="show-label-wrapper" onClick={this.onShowClick.bind(this)}>
            <span className="show-label">Apply promo code</span>
            <span className="show-icon">+</span>
          </div>
        }
        {this.state.expanded &&
          <div>
            <div className="hide-label-wrapper" onClick={this.onHideClick.bind(this)}>
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
        }
      </div>
    )
  }
}
