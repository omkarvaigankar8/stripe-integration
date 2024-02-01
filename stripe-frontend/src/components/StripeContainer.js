import React from 'react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm';

const PUBLIC_KEY = "pk_test_51Oey6PSBJRTTq5hgAems5X1FoBrBB0oGP2V9Zm7IwRGrkl8ACj3t56TdofppyW5DFbVMFjVjkrz5yTLLC2eg0nj700bYlwr1Zy"
const stripeTestPromise = loadStripe(PUBLIC_KEY)
const StripeContainer = () => {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}

export default StripeContainer