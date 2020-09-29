import { client } from "../../../main.js";
import { Log } from "../../../util/logger/Logger.js";
import { OutgoingUserEvents } from "../Outgoing.js";

export class UserPingEvent {
    
    constructor(dataParsed) {
        
        this.packet = dataParsed;
        
    }

    sendToServer() {
        
        const dataPacket = {
                packetId: OutgoingUserEvents.UserPingEvent,
                data: [
                    {
                        ssoTicket: sso
                    }
                ]
            };
        client.getWS().send(JSON.stringify(dataPacket));
        Log('🏓 Ping', 'info');
        
    }
}