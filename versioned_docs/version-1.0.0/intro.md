---
sidebar_position: 1
title: Intro
tags:
  - Introduction
  - Getting started
slug: /
---

# Introduction

Thanks for reading the Help/Documentation for Noten-App!

Currently you are in the documentation for the API Version 1.0.0.

# Base-URL

The Base-Url for the API is: https://api.noten-app.de/v1

This will be the base for all endpoints except the ping endpoint.

# Code Examples

All code examples will be written in [NodeJS](https://nodejs.org) using the [Axios](https://www.npmjs.com/package/axios) package.

# Authentication

Before using any other Endpoints, you will need to authenticate with the authentication Endpoint to get an access token. This token will be used for all other endpoints.  
The token will be valid for 1 hour. After that you will need to refresh your token using the refresh token endpoint.  
More Information about the authentication can be found under [API > Endpoints > Authentication](/endpoints/authentication/).

# Navigating the Docs

On the Left in the Sidebar you can find the following categories:

- [API > Endpoints](/category/endpoints/) which contains all endpoints
- [API > Tutorials](/category/tutorials/) which contains tutorials for the API
