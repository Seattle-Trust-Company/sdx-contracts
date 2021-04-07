# Seattle Digital Exchange

## Description
Utilizing blockchain as a distributed database to represent the transactions of a live digital stock exchange.

## Project Structure
Below is highlighted the major components of our project's structure:
- `contracts`: NA
- `migrations`: NA
- `test`:
- `package.json`: npm configuration
- `truffle-config.json`: truffle configuration

## Installation
Make sure you have npm installed. If not, please install.
```console
$ npm --version
```

Clone this repository and enter its root directory.
```console
$ git clone XXX
$ cd XXX
```

Download all dependencies specified within `package.json`.
```console
$ npm install
```

## Deploy Contracts
To deploy a specific contract to a specific network (say `2_deploy_TSLA.sol` on the `development` network):
```console
$ truffle migrate -f 2 --to 2 --network development
```

## To Contribute
Please notify the members of the Seattle Trust Company.
