// This content is exclusive to auth'd users
import React from "react";
import requireAuth from "./requireAuth";

class Feature extends React.Component {
  render() {
    return <div>Feature</div>;
  }
}

// Wrap Feature with HOC to ensure user must be auth'd
export default requireAuth(Feature);
