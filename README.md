# Default Starter Kit for Expressly

[![Deploy to Fastly](https://deploy.edgecompute.app/button)](https://deploy.edgecompute.app/deploy)

Expressly is a lightweight and minimalist routing layer for JavaScript apps running on Fastly Compute. Get to know the Compute environment with a basic expressly starter that demonstrates routing and middleware. To learn more about expressly, check out our [blog post](https://www.fastly.com/blog/write-less-do-more-at-the-edge-introducing-expressly) and visit our [documentation](https://expressly.edgecompute.app/).

**For more details about other starter kits for Fastly Compute, see the [Fastly developer hub](https://developer.fastly.com/solutions/starters)**

## Understanding the code

This starter is intentionally lightweight, and only requires the [`@fastly/js-compute`](https://www.npmjs.com/package/@fastly/js-compute) and [`@fastly/expressly`](https://www.npmjs.com/package/@fastly/expressly) npm packages. 

The starter doesn't require the use of any backends. Once deployed, you will have a Fastly service running on Compute that can generate synthetic responses at the edge.

## Running the application

To create an application using this starter kit, create a new directory for your application and switch to it, and then type the following command:

```shell
npm create @fastly/compute@latest -- --language=javascript --starter-kit=expressly
```

To build and run your new application in the local development environment, type the following command:

```shell
npm run start
```

To build and deploy your application to your Fastly account, type the following command. The first time you deploy the application, you will be prompted to create a new service in your account.

```shell
npm run deploy
```

## Security issues

Please see our [SECURITY.md](SECURITY.md) for guidance on reporting security-related issues.
