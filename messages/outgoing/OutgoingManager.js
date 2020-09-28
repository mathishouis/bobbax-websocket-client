import { OpenFriendsEvent } from "./friends/OpenFriendsEvent.js";

export class OutgoingManager {
    
    static eventListener() {
        
        OpenFriendsEvent.listen();
        
    }
    
}