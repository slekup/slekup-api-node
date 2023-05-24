# Slekup API

A JavaScript library for interacting with Slekup API.

Slekup API is a powerful multi-purpose API that allows for fast and easy integration of a wide range of features and external services into your application.

## Resources

- [Official Documentation](https://slekup.com/dev/docs)
- [Discord Server](https://discord.gg/)
- [GitHub](https://github.com/slekup/slekup-api-node)
- [NPM](https://www.npmjs.com/package/slekup-api)

# Getting started

## Installation

```bash
npm install slekup-api
```

## Usage

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

### Log debug messages

```ts
client.on('debug', (message) => {
  console.log(message);
});
```
