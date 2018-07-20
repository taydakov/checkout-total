import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { applyDiscount } from '../../store/modules/discount';
import CheckoutSummary from '../CheckoutSummary/CheckoutSummary.js';
import CheckoutItemsDetails from '../CheckoutItemsDetails/CheckoutItemsDetails.js';
import CheckoutPromoCode from '../CheckoutPromoCode/CheckoutPromoCode.js';
import './CheckoutTotal.css';

class CheckoutTotal extends Component {
  onThatClick() {
    this.props.applyDiscount();
  }

  render() {
    if (this.props.discountApplied) {
      console.log('discount applied');
    }

    return (
      <div className="CheckoutTotal">
        <CheckoutSummary summaryData={this.props.checkoutData} />
        <div className="est-total-container">
          <span className="est-total-label" onClick={this.onThatClick.bind(this)}>Est. total</span>
          <span className="est-total-value">{this.props.checkoutData.estTotal}</span>
        </div>
        <CheckoutItemsDetails itemsData={this.props.checkoutData.items} />
        <CheckoutPromoCode />
      </div>
    );
  }
}

const mapStateToProps = ({ discount }) => ({
  discountApplied: discount.discountApplied
});

const mapDispatchToProps = dispatch => bindActionCreators({
  applyDiscount
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutTotal);
