const Web3 = require('web3');
const EthereumEvents = require('ethereum-events');

const ERC20_ABI = /* ABI for ERC20 token contract */;
const WEB3_PROVIDER = /* Your web3 provider (e.g. geth, Infura) */;

const contracts = [
  {
    name: 'Token',
    address: '0xefE1e4e13F9ED8399eE8e258b3a1717b7D15f054',
    abi: ERC20_ABI,
    events: ['Transfer'] // optional event filter (default: all events)
  } 
];

const options = {
  pollInterval: 13000, // period between polls in milliseconds (default: 13000)
  confirmations: 12,   // n° of confirmation blocks (default: 12)
  chunkSize: 10000,    // n° of blocks to fetch at a time (default: 10000)
  concurrency: 10,     // maximum n° of concurrent web3 requests (default: 10)
  backoff: 1000        // retry backoff in milliseconds (default: 1000)
};

const web3 = new Web3(WEB3_PROVIDER);

const ethereumEvents = new EthereumEvents(web3, contracts, options);
