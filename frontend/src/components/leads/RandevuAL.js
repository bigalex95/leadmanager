import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLead } from "../../actions/leads";

export class RandevuAL extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    owner: "",
  };

  onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  static propTypes = {
    addLead: PropTypes.func.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { name, email, message, owner } = this.state;
    console.log(this.state);
    const lead = { name, email, message, owner };
    this.props.addLead(lead);
    this.setState({
      name: "",
      email: "",
      message: "",
      owner: "",
    });
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2 className="text-center">OSGB Randevu AL</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Firma Adı</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              className="form-control"
              type="text"
              name="message"
              onChange={this.onChange}
              value={message}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addLead })(RandevuAL);
