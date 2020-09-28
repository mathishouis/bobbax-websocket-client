import { Log } from "../../../util/logger/Logger.js";

export class ShowFriendsMessage {
    
    constructor(packet) {
        
        this.packet = packet;
        
    }

    execute() {
        
        Log('ShowFriendsMessage', 'info');
        
        //for(const name in this.packet.data) {
        //    console.log("cc");
        //}
        
    }
}