# URL Shortener

A simple URL shortener application built with Node.js and MongoDB.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)

## Introduction

URL Shortener is a web application that allows you to generate short links for long URLs. It provides features like custom short URLs, analytics tracking, QR code generation, and link expiration. This repository contains the backend code for the URL shortener application.

## Features

- Shorten URLs and generate custom short links.
- Track analytics, including total clicks and visit history.
- Link expiration based on specified dates.
- MongoDB integration for data storage.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/Decoder-25/URL-shortener.git
   ```
2. Install Dependencies:
   ```
   npm install
   ```
3. Configure your MongoDB connection in index.js.
4. Start the server:
   ```
   npm start
   ```
5. Access the Application:
Open your web browser and navigate to http://localhost:8001

## Usage

**Shorten a URL:**

1. Access the application.
2. Paste a long URL into the provided input field.
3. Click the "Shorten" button to generate a short link.

**Custom Short URLs:**

1. During URL shortening, provide a desired short keyword or slug to create a custom short URL.

**Analytics:**

1. Log into your account on the application.
2. Click on a short link to access its analytics page.
3. View detailed statistics, including the number of clicks, geographical data, and referral sources.

**Link Expiration:**

1. When creating a short link, you have the option to set an expiration date.
2. The link will become inaccessible after the specified date.

**User Management:**

1. Register for an account on the application or log in if you already have one.
2. Use your account to manage and keep track of your short links.

## API Routes

- **POST /url:** Shorten a URL and generate a short link.

- **GET /url/analytics/:shortId:** Get analytics data for a specific short link.
 


   


