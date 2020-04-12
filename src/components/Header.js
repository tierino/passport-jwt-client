import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends React.Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div>
          <Link to="/signout">Sign out</Link>
          <Link to="/feature">Feature</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Sign up</Link>
          <Link to="/signin">Sign in</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Link to="/">Redux Auth</Link>
        {this.renderLinks()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
