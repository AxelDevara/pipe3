import { Contract } from "./src/contract";
import { Pipe } from "./src/pipe";

interface Pipes {
  [key: string]: any
}

let totalPipes = 0;
let pipes:Pipes = {}

export default {
    port: 3003,
    fetch(request: Request) {
      pipes[totalPipes] = new Pipe([])
      totalPipes++;

      ethereumEvents.on('block.confirmed', (blockNumber, events, done) => {

        // Events contained in 'confirmed' blocks are considered final,
        // hence the callback is fired only once for each blockNumber.
        // Blocks are delivered in sequential order and one at a time so that none is skipped
        // and you know for sure that every block up to the latest one received was processed.
        
        // Call 'done()' after processing the events in order to receive the next block. 
        // If an error occurs, calling 'done(err)' will retry to deliver the same block
        // without skipping it.
      
      });

      ethereumEvents.start(startBlock);
      
      return new Response("Hello World");
    },
  };