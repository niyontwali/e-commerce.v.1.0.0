'use client'

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

const Checkout = () => {
  const [billingInfo, setBillingInfo] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleBillingInfoChange = (e) => {
    setBillingInfo({ ...billingInfo, [e.target.name]: e.target.value });
  };

  const handlePaymentInfoChange = (e) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit billing and payment information to the server
    console.log(billingInfo, paymentInfo);
  };

  return (
    <div className="container mx-auto max-w-3xl py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={billingInfo.name}
                onChange={handleBillingInfoChange}
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={billingInfo.email}
                onChange={handleBillingInfoChange}
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                name="address"
                value={billingInfo.address}
                onChange={handleBillingInfoChange}
              />
            </div>
            <div>
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                name="city"
                value={billingInfo.city}
                onChange={handleBillingInfoChange}
              />
            </div>
            <div>
              <Label htmlFor="state">State</Label>
              <Input
                id="state"
                name="state"
                value={billingInfo.state}
                onChange={handleBillingInfoChange}
              />
            </div>
            <div>
              <Label htmlFor="zip">Zip Code</Label>
              <Input
                id="zip"
                name="zip"
                value={billingInfo.zip}
                onChange={handleBillingInfoChange}
              />
            </div>
            <div>
              <Label htmlFor="country">Country</Label>
              <Input
                id="country"
                name="country"
                value={billingInfo.country}
                onChange={handleBillingInfoChange}
              />
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                name="cardNumber"
                value={paymentInfo.cardNumber}
                onChange={handlePaymentInfoChange}
              />
            </div>
            <div>
              <Label htmlFor="expirationDate">Expiration Date</Label>
              <Input
                id="expirationDate"
                name="expirationDate"
                value={paymentInfo.expirationDate}
                onChange={handlePaymentInfoChange}
              />
            </div>
            <div>
              <Label htmlFor="cvv">CVV</Label>
              <Input
                id="cvv"
                name="cvv"
                value={paymentInfo.cvv}
                onChange={handlePaymentInfoChange}
              />
            </div>
          </div>
        </div>
        <Button type="submit" className="w-full">
          Place Order
        </Button>
      </form>
    </div>
  );
};

export default Checkout;