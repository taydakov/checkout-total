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
          <div className="showhide-label-wrapper" onClick={this.onShowClick.bind(this)}>
            <span className="showhide-label">Apply promo code</span>
            <span className="showhide-icon">+</span>
          </div>
        }
        {this.state.expanded &&
          <div>
            <div className="showhide-label-wrapper" onClick={this.onHideClick.bind(this)}>
              <span className="showhide-label">Hide promo code</span>
              <span className="showhide-icon">−</span>
            </div>
            <div className="promo-wrapper">
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
