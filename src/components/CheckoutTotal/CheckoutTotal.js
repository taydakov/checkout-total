import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { applyDiscount } from '../../store/modules/discount';
import CheckoutSummary from './CheckoutSummary/CheckoutSummary.js';
import CheckoutItemsDetails from './CheckoutItemsDetails/CheckoutItemsDetails.js';
import CheckoutPromoCode from './CheckoutPromoCode/CheckoutPromoCode.js';
import './CheckoutTotal.css';

const DISCOUNT_CODE = 'DISCOUNT';
const DISCOUNT_LABEL = '10%';
const DISCOUNT_MULTIPLIER = 0.1;

class CheckoutTotal extends Component {
  onSubmitPromoCode(code) {
    if (code === DISCOUNT_CODE) {
      this.props.applyDiscount();
    }
  }

  getSubtotalAmount = () => parseFloat(this.props.checkoutData.subtotal);

  getPickupDiscountAmount = () => parseFloat(this.props.checkoutData.pickupSavings);

  getDiscountAmount() {
    if (this.props.isDiscountApplied) {
      return this.props.checkoutData.subtotal * DISCOUNT_MULTIPLIER;
    } else {
      return 0;
    }
  }

  getEstTaxesFeesAmount() {
    return (this.getSubtotalAmount() - this.getDiscountAmount() - this.getPickupDiscountAmount()) * parseFloat(this.props.checkoutData.estTaxesFeesRate);
  }

  getEstTotal() {
    return this.getSubtotalAmount() - this.getDiscountAmount() - this.getPickupDiscountAmount() + this.getEstTaxesFeesAmount();
  }

  render() {
    return (
      <div className="CheckoutTotal">
        <CheckoutSummary
          isDiscountApplied={this.props.isDiscountApplied}
          subtotalAmount={this.getSubtotalAmount()}
          pickupDiscountAmount={this.getPickupDiscountAmount()}
          discountLabel={DISCOUNT_LABEL}
          discountAmount={this.getDiscountAmount()}
          estTaxesFeesAmount={this.getEstTaxesFeesAmount()}
          zipCode={this.props.checkoutData.zipCode}
          />
        <div className="est-total-container">
          <span className="est-total-label">Est. total</span>
          <span className="est-total-value">${this.getEstTotal().toFixed(2)}</span>
        </div>
        <CheckoutItemsDetails itemsData={this.props.checkoutData.items} />
        <CheckoutPromoCode onSubmit={this.onSubmitPromoCode.bind(this)}/>
      </div>
    );
  }
}

const mapStateToProps = ({ discount }) => ({
  isDiscountApplied: discount.isDiscountApplied
});

const mapDispatchToProps = dispatch => bindActionCreators({
  applyDiscount
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutTotal);
