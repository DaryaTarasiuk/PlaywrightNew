# PlaywrightNew

Playwright is a Node.js library created by Microsoft to automate Chromium, Firefox, and WebKit with a single API. Playwright is built to enable cross-browser web automation that is ever-green, capable, reliable, and fast across all modern browsers.

It is open source and free.
## How to use this repository

After the npm install you can clone this rpository to your local or download it as zip.
This repo contains simple tests, every test has its owm branch:
- first Branch: Writing First Script
- type branch: Interacting with Elements
- element_satte branch: Element State
- keyboard branch: Managing a Virtual Keyboard
- mouse branch: Interacting with Mouse Events
- screenshot branch: Taking a Screenshot
- video branch: Recording videos
- bookstore branch: Integration with Jest and creating Page Object Model
- cli branch: Playwright CLI
## Installation

In order to install Playwright, we need first to have installed Node.js. So, make sure you have it installed in your system.

Also, we'll be using an IDE, in my case, I'll be using Visual Studio Code.
After you have it both installed, open or launch Visual Studio Code.
Now, we will install Playwright using npm. 

To do that, we can go to Terminal > New Terminal, and  type

```bash
  npm init -y
```
Then we can install Playwright. To do that, we'll just need to type

```bash
  npm i -D playwright
```
It finishes installing all the packages, you should see the “node_modules” folder created here. And also package.json, we should see the “devDependencies”, and “playwright”, which is what we just installed.
## Pre-requisites
[NodeJS](https://nodejs.org/en/)

[Visual Studio Code](https://code.visualstudio.com/)

[Applitools API key](https://auth.applitools.com/users/register)


## Running Tests

To run tests, run the following command

```bash
  node fileName.js
```

## Integrate with Jest
Integrate Jest with Playwright in order to run tests. Jest is JavaScript testing framework with a focus on simplicity. Jest offers a test runner, assertion library, CLI tool, and great support for different mocking techniques.

Install Jest using npm:
```bash
  npm install -D jest
```
In order to running tests with Jest, type 

```bash
  npm test
```
## Features

- This framework has built in library to operate on UI, API (both SOAP & REST API) and DB (MSSQL, DB2 & Oracle).
- Supports execution of tests in different browsers.
- Allows transfer of data between test cases.
- Has utility built in for file download, Read PDF files etc.
- Generates Playwright's HTML Report, Allure Report & JUnit Report in HTML format for each exaction.
- Allure & Playwright report including snapshots and video in case of test failure.
- All the playwright related config is controlled by playwright config file.
- Environment variables can be modified at runtime and its controlled by .env file.
- Easy and simple integration to CI/CD tools like Jenkins.

Supported Browsers:
- Chrome - default browser
- Firefox
- MS Edge
- WebKit - web browser engine used by Safari


## Documentation

[Documentation](https://playwright.dev/docs/intro)

[API reference](https://playwright.dev/docs/api/class-playwright/)