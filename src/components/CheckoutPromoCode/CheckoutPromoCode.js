import React, { Component } from 'react';
import './CheckoutPromoCode.css';

export default class CheckoutPromoCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      codeInputValue: ''
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

  onCodeChange(event) {
    this.setState({codeInputValue: event.target.value});
  }

  onApplyClick() {
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.codeInputValue);
    }
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
                <input type="text" className="promo-input" value={this.state.codeInputValue} onChange={this.onCodeChange.bind(this)}/>
                <button className="promo-apply-button" onClick={this.onApplyClick.bind(this)}>Apply</button>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}
