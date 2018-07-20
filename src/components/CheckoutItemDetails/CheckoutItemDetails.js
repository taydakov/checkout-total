import React, { Component } from 'react';
import './CheckoutItemDetails.css';

export default class CheckoutItemDetails extends Component {
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