import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <span className="navbar-text mr-5">
          <strong>{user ? `Hoşgeldin ${user.username}` : ""}</strong>
        </span>
        <li className="nav-item">
          <button
            onClick={this.props.logout}
            className="nav-link btn btn-info btn-sm text-light"
          >
            Çıkış
          </button>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        {/* <li className="nav-item light">
          <Link to="/register" className="nav-link">
            Sign Up
          </Link>
        </li> */}
        <li className="nav-item light">
          <Link to="/login" className="nav-link">
            Giriş
          </Link>
        </li>
      </ul>
    );

    const randevuAL = (
      <div className="navbar-nav ml-auto mt-2 mt-lg-0 mr-5">
        <Link to="/randevual" className="nav-link">
          Randevu Al
        </Link>
      </div>
    );

    const raporTalep = (
      <div className="navbar-nav ml-auto mt-2 mt-lg-0 mr-5">
        <form
          method="get"
          action="https://dosya.cokbilgi.com/rapor-ornegi-oku-indir.pdf"
        >
          <button type="submit" className="btn btn-success btn-outline-light">
            Sağlık Rapor
          </button>
        </form>
        <form
          method="get"
          action="https://dosya.cokbilgi.com/rapor-ornegi-oku-indir.pdf"
        >
          <button type="submit" className="btn btn-warning btn-outline-light">
            Güvenlik Uzman Rapor
          </button>
        </form>
      </div>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">
              OSGB
            </a>
          </div>
          {isAuthenticated ? raporTalep : randevuAL}
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
