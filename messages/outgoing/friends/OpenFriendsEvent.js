import { client } from "../../../main.js";
import { Log } from "../../../util/logger/Logger.js";
import { OutgoingFriendsEvents } from "../Outgoing.js";

export class OpenFriendsEvent {
    
    constructor(dataParsed) {
        
        this.packet = dataParsed;
        
    }

    sendToServer() {
    
        client.getWS().send(JSON.stringify(this.packet));
        
    }

    static listen() {
        
        const friendsOpenButton = document.getElementById("open-friends-component");
        const friendsComponent = document.getElementById("friends-component");
        
        friendsOpenButton.onclick = function() {
            
        const dataPacket = {
            packetId: OutgoingFriendsEvents.OpenFriendsEvent,
                data: [
                    {
                        ssoTicket: client.getSSO()
                    }
                ]
            };
            const openFriendsEvent = new OpenFriendsEvent(dataPacket);
            openFriendsEvent.sendToServer();
                
        }
        
    }
    
}