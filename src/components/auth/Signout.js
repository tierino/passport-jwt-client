import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Signout extends React.Component {
  componentDidMount() {
    this.props.signout();
  }

  render() {
    return <div>You have been signed out</div>;
  }
}

export default connect(null, actions)(Signout);
