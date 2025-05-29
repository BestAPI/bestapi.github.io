---
layout: api
title: "GitHub API"
description: "Access GitHub's features and data including repositories, issues, and pull requests"
api_url: "https://api.github.com"
category: "Developer Tools"
tags: [git, version-control, repositories, open-source]
version: "v3"
featured: true
endpoints:
  - method: GET
    path: /repos/{owner}/{repo}
    description: Get repository information
  - method: GET
    path: /repos/{owner}/{repo}/issues
    description: List issues for a repository
  - method: POST
    path: /repos/{owner}/{repo}/issues
    description: Create an issue
---

## Overview

GitHub's REST API lets you create, manage, and control your GitHub workflow programmatically. It provides access to almost everything you can do on GitHub's website including managing repositories, issues, pull requests, releases, and more.

## Features

- Manage repositories, branches, and files
- Create, update, and close issues
- Review and merge pull requests
- Manage project workflows and releases
- Access user and organization data
- Interact with GitHub Actions
- OAuth authentication

## Authentication

The GitHub API supports several authentication methods:

- **Personal Access Tokens**: The recommended way to authenticate
- **OAuth Apps**: For third-party applications
- **GitHub Apps**: For integrations

Most endpoints require authentication, though some can be accessed anonymously with rate limitations.

## Rate Limits

- **Authenticated requests**: 5,000 requests per hour
- **Unauthenticated requests**: 60 requests per hour
- **GraphQL API**: 5,000 points per hour

Rate limit headers are included in all API responses to help you manage your usage.

## Examples

```javascript
// Fetch repository information
fetch('https://api.github.com/repos/octocat/hello-world')
  .then(response => response.json())
  .then(data => console.log(data));

// Create an issue (requires authentication)
fetch('https://api.github.com/repos/octocat/hello-world/issues', {
  method: 'POST',
  headers: {
    'Authorization': 'token YOUR_TOKEN',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Found a bug',
    body: 'I\'m having a problem with this.',
    labels: ['bug']
  })
})
  .then(response => response.json())
  .then(data => console.log(data));
```

## Documentation

For complete documentation, visit the [GitHub API Documentation](https://docs.github.com/en/rest).