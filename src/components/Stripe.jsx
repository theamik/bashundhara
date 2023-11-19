import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import axios from 'axios'
import { useState } from 'react'
import CheckoutForm from './CheckoutForm'

const stripePromise = loadStripe('pk_test_51ODijACqzYsiCOJFmetcUwzXwsO8d5v56O1vgBJ4cwp4PQV1JbURWUuBTPUtYU4Cu7znXj1YRC851DAHfXe330wc00hhOqIqP6')
const Stripe = ({ price, orderId }) => {
    const [clientSecret, setClientSecret] = useState('')
    const apperance = {
        theme: 'stripe'
    }
    const options = {
        apperance,
        clientSecret
    }
    const create_payment = async () => {
        try {
            const { data } = await axios.post('https://bashundhara-backend.onrender.com/api/v1/order/create-payment', { price }, { withCredentials: true })
            setClientSecret(data.clientSecret)
        } catch (error) {
            console.log(error.response.data)
        }
    }
    return (
        <div className='mt-4'>
            {
                clientSecret ? (
                    <Elements options={options} stripe={stripePromise}>
                        <CheckoutForm orderId={orderId} />
                    </Elements>
                ) : <button onClick={create_payment} className='px-10 py-[6px] rounded-sm hover:shadow-orange-500/20 hover:shadow-lg bg-orange-500 text-white'>Start Payment</button>
            }
        </div>
    )
}

export default Stripe