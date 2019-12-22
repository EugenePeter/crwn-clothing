import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_aMBHEcgivxjByGtm65VP9lWO00jkM5NSAX';

    const onToken = token => {
        console.log(token);
        alert('payment successful')
    } 

    return (
        <StripeCheckout 
            label='Pay now'
            name='CRWN Clothing LTD'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;