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
      for (const itemId in this.props.itemsData) {
        let itemData = this.props.itemsData[itemId];
        items.push(
          <div key={itemId} className="item-wrapper">
            <div className="item-img-wrapper">
              <img className="item-img" src={itemData.imgUrl} alt={itemData.title} />
            </div>
            <div className="item-summary">
              <div className="item-title">{itemData.title}</div>
              <div className="item-priceqty-container">
                <span className="item-price">${itemData.price}</span>
                <span className="item-qty">Qty: {itemData.qty}</span>
              </div>
              <div className="item-original-price">${itemData.originalPrice}</div>
            </div>
          </div>
        )
      }
    }

    return (
      <div className="CheckoutItemDetails">
        {!this.state.expanded &&
          <div className="showhide-label-wrapper" onClick={this.onShowClick.bind(this)}>
            <span className="showhide-label">See item details</span>
            <span className="showhide-icon">+</span>
          </div>
        }
        {this.state.expanded &&
          <div>
            <div className="showhide-label-wrapper" onClick={this.onHideClick.bind(this)}>
              <span className="showhide-label">Hide item details</span>
              <span className="showhide-icon">−</span>
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
