export class Contract {
    name = 'Token';
    address = '0xefE1e4e13F9ED8399eE8e258b3a1717b7D15f054';
    abi = {};
    events = ['Transfer'];

    constructor(name:string, address: string, abi: JSON, events: Array<string>){
        this.name = name;
        this.address = address;
        this.abi = abi;
        this.events = events;
    }
}