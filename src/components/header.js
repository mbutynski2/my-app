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
        <Link to="/"><img src={require ('../images/logo.svg')} width="40" /><span className="Name">Mandi Butynski</span></Link>
        <Link to="/Home">Home</Link>
        <Link to="/Work">Work</Link>
        <Link to="/Play">Play</Link>
        <Link to="/About">About</Link>
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
