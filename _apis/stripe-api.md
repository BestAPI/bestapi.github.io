---
layout: api
title: "Stripe API"
description: "Complete payment processing platform for online businesses"
api_url: "https://api.stripe.com"
category: "Payments"
tags: [payments, credit-cards, subscriptions, billing]
version: "2022-11-15"
featured: true
endpoints:
  - method: POST
    path: /v1/charges
    description: Create a charge
  - method: GET
    path: /v1/charges/{id}
    description: Retrieve a charge
  - method: POST
    path: /v1/customers
    description: Create a customer
  - method: POST
    path: /v1/subscriptions
    description: Create a subscription
---

## Overview

The Stripe API is a comprehensive set of tools for accepting payments, managing subscriptions, and automating financial workflows online. It's RESTful, with predictable resource-oriented URLs, accepts form-encoded request bodies, and returns JSON-encoded responses.

## Features

- Process one-time and recurring payments
- Handle subscriptions and complex billing models
- Integrate with multiple payment methods worldwide
- Manage customers and their payment information
- Detect and prevent fraud
- Generate financial reports
- Support for webhooks to automate workflows

## Authentication

All API requests must be authenticated using your Stripe API keys. There are two types of keys:

- **Secret key**: Used for API requests from your server
- **Publishable key**: Used for requests from the client-side

Authentication is done by providing the API key in the Authorization header:

```
Authorization: Bearer sk_test_YOUR_SECRET_KEY
```

## Rate Limits

Stripe rate limits vary by endpoint but typically allow several hundred requests per second. When you exceed the rate limit, Stripe returns a 429 Too Many Requests error.

## Examples

```javascript
// Create a customer
fetch('https://api.stripe.com/v1/customers', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer sk_test_YOUR_SECRET_KEY',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: new URLSearchParams({
    email: 'customer@example.com',
    name: 'Jenny Rosen'
  })
})
  .then(response => response.json())
  .then(customer => console.log(customer));

// Create a payment
fetch('https://api.stripe.com/v1/payment_intents', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer sk_test_YOUR_SECRET_KEY',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: new URLSearchParams({
    amount: 2000, // $20.00
    currency: 'usd',
    payment_method_types: ['card'],
    receipt_email: 'customer@example.com'
  })
})
  .then(response => response.json())
  .then(paymentIntent => console.log(paymentIntent));
```

## Documentation

For complete documentation, visit the [Stripe API Reference](https://stripe.com/docs/api).