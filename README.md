[![Logo](https://i.imgur.com/NHIbBSFb.png)](https://github.com/slekup/slekup-api-node)

# Slekup API

[![Discord Server](https://img.shields.io/discord/1028009131073880104?color=5865F2&logo=discord&logoColor=white)](https://discord.gg/p5rxxQN7DT)
![NPM Version](https://img.shields.io/npm/v/express-custom.svg) ![NPM Downloads](https://img.shields.io/npm/dt/express-custom) ![Test Status](https://github.com/slekup/express-custom/actions/workflows/tests.yml/badge.svg) ![NPM Size](https://img.shields.io/bundlephobia/min/express-custom)

[Official Documentation](https://slekup.com/dev/docs) • [Discord Server](https://discord.gg/) • [GitHub](https://github.com/slekup/slekup-api-node) • [NPM](https://www.npmjs.com/package/slekup-api)

A JavaScript library for interacting with Slekup API.

Slekup API is a powerful multi-purpose API that allows for fast and easy integration of a wide range of features and external services into your application.

## Installation

```bash
# Using npm
> npm install slekup-api
# Using yarn or pnpm
> yarn/pnpm add slekup-api
```

## Usage

### Importing

This library supports both typescript and javascript, with ES6 modules and CommonJS.

```ts
// ES6 modules
import { Client } from 'slekup-api';
// CommonJS
const { Client } = require('slekup-api');
```

### Initialize the client

Initialize the client with your token.

```ts
import { Client } from 'slekup-api';

const client = new Client({
  token: 'YOUR_TOKEN',
  version: 1,
});

client.login().then(() => {
  console.log('Logged in!');
});
```

### Getting a random joke

```ts
client.jokes
  .random()
  .then((joke) => {
    console.log(joke);
  })
  .catch((err) => {
    console.error(err);
  });
```

## Issues and Contributing

If you have any issues or would like to contribute, please [open an issue](https://github.com/slekup/express-custom/issues/new) or pull request.

## License

Copyright © [slekup](https://github.com/slekup)
