export class Networking extends WebSocket {
    
    constructor(secure, host, port) {
        
        super(secure + "://" + host + ":" + port + "/websocket");
        
    }
    
}