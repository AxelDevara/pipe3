import {Contract} from './contract';
const Web3 = require('web3');
const EthereumEvents = require('ethereum-events');
const WEB3_PROVIDER = process.env.ALCHEMY_ETH_API_URL;

export class Pipe {
  contracts:Array<Contract> = [];
  listener: any;

  readonly options = {
    pollInterval: 13000, // period between polls in milliseconds (default: 13000)
    confirmations: 12,   // n° of confirmation blocks (default: 12)
    chunkSize: 10000,    // n° of blocks to fetch at a time (default: 10000)
    concurrency: 10,     // maximum n° of concurrent web3 requests (default: 10)
    backoff: 1000        // retry backoff in milliseconds (default: 1000)
  };
  
  constructor(contracts: Array<Contract>) {
    this.contracts = contracts;
    const web3 = new Web3(WEB3_PROVIDER);
    this.listener = new EthereumEvents(web3, this.contracts, this.options)
  }
}

