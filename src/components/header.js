import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'

const Header = ({ siteTitle }) => (
  <header>
    <div className="Header">
      <div className="HeaderGroup">
        <Link to="/"><img src={require ('../images/logo.svg')} width="50" /></Link>
        <Link to="/Our Process">Our Process</Link>
        <Link to="/About Us">About Us</Link>
        <Link to="/Portfolio">Portfolio</Link>
        <Link to="/Let's Connect"><button>Let's Connect</button></Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
