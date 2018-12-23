import Peer from 'peerjs';

export const createPeer = dispatch => (name) => {
    return dispatch({
        type: 'CREATE_PEER',
        payload: {
            name: name,
            peer: createPeerObject(name, dispatch)
        }
    })
};

const createPeerObject = (name, dispatch) => {
    const peer = new Peer(null, {
        debug: 2
    });
    peer.on("open", () => {
        console.info("OPENED");
        openedPeer(dispatch)(name, peer, peer.id)
    });
    return peer;
};

export const openedPeer = dispatch => (name, peer, peerId) => {
    return dispatch({
        type: 'OPENED_PEER',
        payload: {
            name: name,
            peer: peer,
            peerId: peerId
        }
    })
};