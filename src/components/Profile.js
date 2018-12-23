import React, {PureComponent} from 'react';
import {find, isEmpty, isNull} from "lodash";

class Profile extends PureComponent {

    createConnectionOnClick = (event) => {
        this.props.createPeer("ivan");
    };

    getPeerId = () => {
        console.info("ALL PEERS", this.props.peers);
        if(isEmpty(this.props.peers)) {
            return "Don't have id";
        } else {
            const peer = this.getCurrentPeer();
            return isNull(peer.peerId) ? "loading..." : peer.peerId;
        }
    };

    getCurrentPeer = () => find(this.props.peers, ["name", "ivan"]);

    render = () => {
        return (
            <div>
                <input type="button" onClick={this.createConnectionOnClick} value="Get Peer Id"/><br/>
                Peer: {this.getPeerId()}<br/>
            </div>
        )
    }
}

export default Profile;