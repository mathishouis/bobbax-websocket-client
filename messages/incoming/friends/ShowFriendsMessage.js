import { Log } from "../../../util/logger/Logger.js";

export class ShowFriendsMessage {
    
    constructor(packet) {
        
        this.packet = packet;
        
    }

    execute() {
        
        Log('ShowFriendsMessage', 'info');
        
        const friendsComponent = document.getElementById("friends-component");
        
        if(friendsComponent.style.display === 'none') {
            
            friendsComponent.style.display = 'block';
            
        } else {
            
            friendsComponent.style.display = 'none';
            
        }
        
        //for(const name in this.packet.data) {
        //    console.log("cc");
        //}
        
    }
}