import React, { Component } from 'react';
import './CheckoutItemsDetails.css';

export default class CheckoutItemDetails extends Component {
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
    let items = [];

    if (this.state.expanded) {
      for (const itemData of this.props.itemsData) {
        items.push(
          <div className="item-wrapper">
            <div className="item-img">
              <img src={itemData.imgUrl} alt={itemData.title} />
            </div>
            <div className="item-summary">
              <div className="item-title">{itemData.title}</div>
              <div className="item-price">{itemData.price}</div>
              <div className="item-qty">{itemData.qty}</div>
              <div className="item-original-price">{itemData.originalPrice}</div>
            </div>
          </div>
        )
      }
    }

    return (
      <div className="CheckoutItemDetails">
        {!this.state.expanded &&
          <div className="show-label-wrapper" onClick={this.onShowClick.bind(this)}>
            <span className="show-label">See item details</span>
            <span className="show-icon">+</span>
          </div>
        }
        {this.state.expanded &&
          <div>
            <div className="hide-label-wrapper" onClick={this.onHideClick.bind(this)}>
              <span className="hide-label">Hide item details</span>
              <span className="hide-icon">-</span>
            </div>
            <div className="items-wrapper">
              {items}
            </div>
          </div>
        }
      </div>
    )
  }
}
