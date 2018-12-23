import {findIndex} from "lodash";

const INIT_STATE = {
    peers: []
};
export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'CREATE_PEER': {
            const peer = action.payload;
            return {
                ...state,
                peers: [...state.peers, createNewPeer(peer)]
            }
        }
        case 'OPENED_PEER': {
            const peer = action.payload;
            return {
                ...state,
                peers: replacePeerWithId(state.peers, peer)
            }
        }
        default:
            return state
    }
}

const replacePeerWithId = (peers, currentPeer) => {
    const index = findIndex(peers, ['name', currentPeer.name]);
    const newPeers = {...peers};
    newPeers[index] = currentPeer;
    return newPeers;
};

const createNewPeer = (peer) => {
    return {
        name: peer.name,
        peer: peer.peer
    }
};