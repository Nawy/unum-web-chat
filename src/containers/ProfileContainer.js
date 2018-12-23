import {connect} from "react-redux";
import Profile from "../components/Profile"
import {createPeer} from "../actions/peersActions";

const mapStateToProps = state => ({
    peers: state.peersReducer.peers
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    createPeer: (name) => createPeer(dispatch)(name),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);