import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/Card"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1><span className="Bolder">Hi.</span> I'm <span className="Red">Mandi Butynski.</span> <br></br>I am a creative problem solver.</h1>
        <p>My current position is UX/UI Capability Lead and Senior UX Designer at DXC Technology. I completed my design training at Savannah College of Art and Design. I am a self-taught coder and UX process practicioner where I advocate for the user.</p>
        {/* <div>
        <Link to="/using-typescript/">Portfolio</Link>
        </div> */}
      </div>
    </div>
    <div className="Title">
      <h4>My Recent Work</h4>
    </div>
    <div className="Portfolio">
      <div className="PortfolioGroup">
        <Link to="/"><img src={require ('../images/AnalyticsHero@2x.png')}/></Link>
        <div>
        <h2>Analytics +</h2>
        <h5>Leadership Reporting Application</h5>
        </div>
      </div>
    </div>

    <div className="Portfolio">
      <div className="PortfolioGroup Teal">
        <Link to="/"><img src={require ('../images/InnTracker@2x.png')}/></Link>
        <div>
        <h2>Innovation Tracker</h2>
        <h5>Manufacturing and Automotive Tool</h5>
        </div>
      </div>
    </div>

    <div className="Portfolio">
      <div className="PortfolioGroup Pink">
        <Link to="/"><img src={require ('../images/FlightPro@2x.png')}/></Link>
        <div>
        <h2>FlightPro</h2>
        <h5>Flight Attendant Tablet Application</h5>
        </div>
      </div>
    </div>

    <div className="Portfolio">
      <div className="PortfolioGroup Brown">
        <Link to="/"><img src={require ('../images/UXProcess@2x.png')}/></Link>
        <div>
        <h2>UX Process Design</h2>
        <h5>UX Capability at the NOLA DTC</h5>
        </div>
      </div>
    </div>
      

      <div className="Contact">
        <h3>Let's connect</h3>
        <p>Get in touch with opportunities or just to say hi!</p>
        <div className="ContactGroup">
        <Link to="/"><img src={require ('../images/LinkedIn.png')}/></Link>
        <Link to="/"><img src={require ('../images/MailIcon.png')}/></Link>
        </div>
      </div>

</Layout>    
)

export default IndexPage
