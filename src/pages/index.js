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
        <h3>Leadership Reporting Application</h3>
        </div>
      </div>
    </div>

    <div className="Portfolio">
      <div className="PortfolioGroup">
        <Link to="/"><img src={require ('../images/AnalyticsHero@2x.png')}/></Link>
        <div>
        <h2>Analytics +</h2>
        <h3>Leadership Reporting Application</h3>
        </div>
      </div>
    </div>

    <div className="Portfolio">
      <div className="PortfolioGroup">
        <Link to="/"><img src={require ('../images/AnalyticsHero@2x.png')}/></Link>
        <div>
        <h2>Analytics +</h2>
        <h3>Leadership Reporting Application</h3>
        </div>
      </div>
    </div>

    <div className="Portfolio">
      <div className="PortfolioGroup">
        <Link to="/"><img src={require ('../images/AnalyticsHero@2x.png')}/></Link>
        <div>
        <h2>Analytics +</h2>
        <h3>Leadership Reporting Application</h3>
        </div>
      </div>
    </div>
      

      <div className="Title">
        <p>Let's connect<span className="Underline"><Link to="/">bymandidesign@mac.com</Link></span></p><p>Talk soon!</p>
      </div>

</Layout>    
)

export default IndexPage
