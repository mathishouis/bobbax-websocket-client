import { Networking } from "./networking/Networking.js";
import { OutgoingUserEvents } from "./messages/outgoing/Outgoing.js";
import { OutgoingManager } from "./messages/outgoing/OutgoingManager.js";
import { UserLoginEvent } from "./messages/outgoing/user/UserLoginEvent.js";
import { Log } from "./util/logger/Logger.js";
import { IncomingManager } from "./messages/incoming/IncomingManager.js";

export class Client {
    
    constructor() {
        
        this.ws = new Networking("ws", "localhost", "4567");
        this.incomingManager = new IncomingManager();
        
        this.onOpenWS();
        this.onCloseWS();
        this.onMessageWS();
        this.eventListener();
        
    }
    
    getSSO() {
        
        return sso;
        
    }
    
    eventListener() {
        
        OutgoingManager.eventListener();
        
    }
    
    getWS() {
        
        return this.ws;
        
    }
    
    onOpenWS() {
        
        this.ws.onopen = function(event) {
            
            Log('Connected to WS server!','success');
            
            const dataPacket = {
                packetId: OutgoingUserEvents.UserLoginEvent,
                data: [
                    {
                        ssoTicket: sso
                    }
                ]
            };
            
            const userLoginEvent = new UserLoginEvent(dataPacket);
            userLoginEvent.sendToServer();
        }
    }
    
    onCloseWS() {
        
        Log('Disconnected from WS server!','error');
        
    }
    
    onMessageWS() {
        
        const incomingMessages = this.incomingManager.messages;
        
        this.ws.onmessage = function(event) {
            
            let dataParsed = JSON.parse(event.data);
            
            Log(JSON.stringify(dataParsed), 'info');
            
            let messageClassCorresponding = incomingMessages.get(dataParsed.packetId);
            let message = new messageClassCorresponding(dataParsed);
            
            message.execute();
            
        }
        
    }
    
    
}