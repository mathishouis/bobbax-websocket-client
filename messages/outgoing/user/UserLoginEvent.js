import { client } from "../../../main.js";
import { Log } from "../../../util/logger/Logger.js";

export class UserLoginEvent {
    
    constructor(dataParsed) {
        
        this.packet = dataParsed;
        
    }

    sendToServer() {
        
        client.getWS().send(JSON.stringify(this.packet));
        Log('' + JSON.stringify(this.packet), 'info');
        
    }
}