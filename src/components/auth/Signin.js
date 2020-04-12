import React from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Signin extends React.Component {
  onSubmit = (formProps) => {
    // Callback navigates user to '/feature' path when they sign up
    this.props.signin(formProps, () => {
      // The 'history' prop comes from Redux Router
      this.props.history.push("/feature");
    });
  };

  render() {
    // Destructure handleSubmit from props object (provided by reduxForm)
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="off"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="off"
          />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button>Sign in</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

// compose() just allows us to apply multiple HOCs to a single component with better syntax
export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: "signin" })
)(Signin);
