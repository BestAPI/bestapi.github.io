---
layout: api
title: "OpenAI API"
description: "Access advanced AI models like GPT-4 for natural language understanding and generation"
api_url: "https://api.openai.com"
category: "AI & Machine Learning"
tags: [ai, nlp, machine-learning, text-generation, image-generation]
version: "v1"
featured: true
endpoints:
  - method: POST
    path: /v1/chat/completions
    description: Create a completion for a chat conversation
  - method: POST
    path: /v1/completions
    description: Create a text completion
  - method: POST
    path: /v1/images/generations
    description: Generate images from a text prompt
---

## Overview

The OpenAI API provides access to powerful AI models that can understand and generate natural language, code, and images. The API can be applied to virtually any task that involves understanding or generating natural language, code, or images.

## Features

- Text generation and completion with GPT models
- Chat-based interactions using chat models
- Image generation with DALL-E
- Fine-tuning models on your specific use case
- Embeddings for advanced text analysis and search
- Moderation API to detect harmful content

## Authentication

Authentication to the OpenAI API is done by providing your API key in the request header:

```
Authorization: Bearer YOUR_API_KEY
```

API keys can be managed in the [OpenAI dashboard](https://platform.openai.com/account/api-keys).

## Rate Limits

Rate limits vary based on your usage tier and the specific model being used. The API returns a 429 status code when rate limits are exceeded, along with information about when you can retry the request.

## Examples

```javascript
// Generate text with GPT
fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: 'You are a helpful assistant.'
      },
      {
        role: 'user',
        content: 'Explain quantum computing in simple terms.'
      }
    ],
    temperature: 0.7
  })
})
  .then(response => response.json())
  .then(data => console.log(data.choices[0].message.content));

// Generate an image
fetch('https://api.openai.com/v1/images/generations', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    prompt: 'A futuristic city with flying cars',
    n: 1,
    size: '1024x1024'
  })
})
  .then(response => response.json())
  .then(data => console.log(data.data[0].url));
```

## Documentation

For complete documentation, visit the [OpenAI API Documentation](https://platform.openai.com/docs/api-reference).