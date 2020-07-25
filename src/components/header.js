import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll',
    this.handleScroll)
  }

handleScroll = (event) => {
  const scrollTop = window.pageYOffset

  if (scrollTop > 50) {
    this.setState({ hasScrolled: true })
  } else {
    this.setState({ hasScrolled: false })
  }
}


  render() {
    return (
    <div className={this.state.hasScrolled ?
    'Header HeaderScrolled' : 'Header'}>
      <div className="HeaderGroup">
        <Link to="/"><img src={require ('../images/logo.svg')} width="40" /></Link>
        <Link to="/Our Process">Our Process</Link>
        <Link to="/About Us">About Us</Link>
        <Link to="/Portfolio">Portfolio</Link>
        <Link to="/Let's Connect"><button>Let's Connect</button></Link>
      </div>
    </div>
    )
  }
}


// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
