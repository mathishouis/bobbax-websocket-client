import { IncomingFriendsMessages } from "./Incoming.js";
import { ShowFriendsMessage } from "./friends/ShowFriendsMessage.js";

export class IncomingManager {
    
    constructor() {
        
        this.messages = new Map();
        
        this.registerShowFriendsMessage();
        
    }
    
    registerShowFriendsMessage() {
        
        this.messages.set(IncomingFriendsMessages.ShowFriendsMessage, ShowFriendsMessage);
        
    }

    getMessages() {
        
        return this.messages;
        
    }
}