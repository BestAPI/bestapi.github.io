---
title: How You Can Contribute to BestAPI
layout: page
permalink: /contribute/
---

BestAPI is a community-driven project, and we welcome contributions from everyone. This page explains how you can contribute to the project.

## Ways to Contribute

There are several ways you can contribute to BestAPI:

1. **Add a new API**: Submit information about APIs that aren't already in our collection.
2. **Update existing API information**: Help us keep our API information accurate and up-to-date.
3. **Improve documentation**: Enhance API descriptions, add code examples, or fix errors.
4. **Enhance the website**: Help improve the site's functionality, design, or user experience.

## How to Contribute

BestAPI is hosted on GitHub Pages, making it easy for anyone to contribute. Here's how:

### Adding a New API

1. **Fork the repository**: Go to [our GitHub repository](https://github.com/BestAPI/bestapi.github.io) and fork it to your account.

2. **Create a new API file**: In your forked repository, create a new file in the `_apis` directory. The file should be named with the API name in lowercase, with spaces replaced by hyphens (e.g., `google-maps.md`).

3. **Add API information**: Use the following template for your API file:

```markdown
---
layout: api
title: "API Name"
description: "A brief description of the API"
api_url: "https://api.example.com"
category: "Category Name"
tags: [tag1, tag2, tag3]
version: "1.0"
featured: false
endpoints:
  - method: GET
    path: /endpoint1
    description: Description of what this endpoint does
  - method: POST
    path: /endpoint2
    description: Description of what this endpoint does
---

## Overview

A detailed description of the API.

## Features

- Feature 1
- Feature 2
- Feature 3

## Authentication

Information about authentication methods.

## Rate Limits

Information about rate limits.

## Examples

```code
// Example code here
```

4. **Submit a pull request**: Commit your changes and submit a pull request to our repository.

### Updating Existing API Information

1. **Find the API file**: Locate the API file you want to update in the `_apis` directory.

2. **Make your changes**: Update the information as needed.

3. **Submit a pull request**: Commit your changes and submit a pull request to our repository.

## Guidelines for Contributors

To ensure the quality and consistency of our content, please follow these guidelines:

1. **Be accurate**: Ensure that all information is accurate and up-to-date.

2. **Be comprehensive**: Include as much relevant information about the API as possible.

3. **Be clear**: Write in clear, concise language that is easy to understand.

4. **Follow the template**: Use the provided template for consistency.

5. **Include examples**: Whenever possible, include code examples that demonstrate how to use the API.

6. **Respect copyrights**: Do not copy content directly from API documentation without permission or proper attribution.

## Review Process

All contributions will be reviewed by our team to ensure they meet our standards. We may ask for clarification or suggest changes before merging your pull request.

## Need Help?

If you need help with contributing, feel free to:

- Open an issue on our GitHub repository with your question.
- Contact us at contact@example.com.

Thank you for helping make BestAPI better!