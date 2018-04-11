# Truffle Drizzle React Boilerplate

<div>

[![Build Status](https://travis-ci.org/NFhbar/Truffle-Drizzle-Boilerplate.png?branch=master)](https://travis-ci.org/NFhbar/Truffle-Drizzle-Boilerplate)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/NFhbar/Truffle-Drizzle-Boilerplate/issues)

</div>

This boiler plate is based on [Truffle Drizzle](http://truffleframework.com/blog/drizzle-reactive-ethereum-data-for-front-ends) implementation
for React. It includes webpack, jest, and several other additions to improve dev experience.

## Install
Clone repo to local machine, then:
```
yarn Install
```
## Truffle Environment:
To enter Truffle:
```
truffle develop
```
To compile:
```
truffle(develop)> compile
```
To migrate:
```
truffle(develop)> migrate
```
To test:
```
truffle(develop)> test
```
To deploy:
```
truffle deploy --network [network]
```
Remember to add your private key to ```.env.development``` for deployment.

## Local Environment
Install:
[Metamask](https://metamask.io/#how-it-works) &
[Ganache](http://truffleframework.com/ganache/)

1. Run Ganache
2. Deploy contract to ganache: ```truffle deploy --network ganache```
3. Run local front-end: ```yarn run dev-server```
4. Using Metamask Custom RPC option connect to Private Ganache Network:
5. RPC Server: HTTP://127.0.0.1:7545
6. Network ID: 5777

## Yarn Scripts
### Install
```
yarn Install
```
### Dev server
```
yarn run dev-server
```
### Production build
```
yarn run build:prod
```
### Testing
```
yarn test -- --watch
```

## Issues
### Wrong Contract Address
When migrating
```
Error: Attempting to run transaction which calls a contract function, but recipient address 0x8cdaf0cd259887258bc13a92c0a6da92698644c0 is not a contract address
```
Solution: delete contents of /build/contracts and recompile.

### Jest test failing 872
https://github.com/reactstrap/reactstrap/issues/872

Quick fix: revert to "reactstrap": "5.0.0-beta". It has older react-popper version.

### Metamask does not support WS - Web1.0 Support
```
Error: The current provider doesn't support subscriptions: MetamaskInpageProvider
```
https://github.com/MetaMask/metamask-extension/issues/2350


## License
[MIT](https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/LICENSE)
