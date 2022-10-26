import React, { Component } from "react";
import { connect } from "react-redux";
import { setAadhaar } from "../redux";

export class Auth extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      aadhaar: null
    };

  }

  isValidAadhaar = () => {
    return (/^[2-9]{1}[0-9]{3}[\s-]?\d{4}[\s-]?\d{4}$/).test(this.state.aadhaar);
  };

  render() {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
        <h1 className="py-5">Decentralized E-Voting System</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            name="aadhaar"
            id="aadhaar"
            autoFocus
            className="form-control"
            maxLength={"14"}
            placeholder="Enter Aadhaar Number"
            onChange={(e) => this.setState({ aadhaar: e.target.value })}
          />
        </form>

        <button
          className="btn btn-outline-success my-5"
          type="submit"
          disabled={!this.isValidAadhaar()}
          onClick={() => {
            if (this.isValidAadhaar()) 
              this.props.setAadhaar(this.state.aadhaar);
          }}
        >
          Login
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  setAadhaar
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
