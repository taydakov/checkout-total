import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import CheckoutTotal from './CheckoutTotal';
import CHECKOUT_DATA from '../../data/checkout-total.json';

const CHECKOUT_TESTDATA = {
    "subtotal": "102.96",
    "pickupSavings": "3.85",
    "estTaxesFeesRate": "0.09",
    "zipCode": "",
    "items": [
        {
            "title": "",
            "imgUrl": "",
            "price": "",
            "originalPrice": "",
            "qty": ""
        }
    ]
};

describe('CheckoutTotal', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
            <CheckoutTotal checkoutData={CHECKOUT_TESTDATA}/>
        </Provider>,
        div);
    ReactDOM.unmountComponentAtNode(div);
  });

//   describe();
});
