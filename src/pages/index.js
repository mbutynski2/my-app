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
      <h1>Meet the Team</h1>
      <div className="MeetGroup">
        <div className="NameBlock">
          <Link to="/"><img src={require ('../images/profile_mandi@2x.png')} /></Link>
          <h2>Mandi Butynski</h2>
          <h3>UX/ UI Capability Lead</h3>
          <p><span className="Underline"><Link to="/">Learn more</Link></span></p>
        </div>
        <div className="NameBlock">
          <Link to="/"><img src={require ('../images/profile_katie@2x.png')}/></Link>
          <h2>Katie Riles</h2>
          <h3>Sr. UX Designer</h3>
          <p><span className="Underline"><Link to="/">Learn more</Link></span></p>
        </div>
        <div className="NameBlock">
          <Link to="/"><img src={require ('../images/profile_mansi@2x.png')}/></Link>
          <h2>Mansi Sundriyal</h2>
          <h3>Sr. UX/UI Developer</h3>
          <p><span className="Underline"><Link to="/">Learn more</Link></span></p>
        </div>
        <div className="NameBlock">
          <Link to="/"><img src={require ('../images/profile_merilly@2x.png')}/></Link>
          <h2>Merilly Ruglas</h2>
          <h3>AV/VR Designer</h3>
          <p><span className="Underline"><Link to="/">Learn more</Link></span></p>
        </div>
        <div className="NameBlock">
          <Link to="/"><img src={require ('../images/profile_vicky@2x.png')}/></Link>
          <h2>Vicky Tran</h2>
          <h3>UX/UI Developer</h3>
          <p><span className="Underline"><Link to="/">Learn more</Link></span></p>
        </div>
      </div>
    </div>
    <div className="OurProcess">
      <div className="Title">
        <h1>Our Process</h1>
        <p>Together we have crafted a method<br /> of delivering exeptional user experiences<br /> that drive results and delight.</p>
      </div>
        <div className="Cards">
          <div className="CardGroup">
            <Card title="Discover"
            text="Empathize &amp; Define"
            image={require('../images/discover_img@2x.png')} />
            <Card title="Design"
            text="Sketch &amp; Design"
            image={require('../images/design_img@2x.png')} />
            <Card title="Develop"
            text="Implement &amp; Evaluate"
            image={require('../images/develop_img@2x.png')} />
            <Card title="Deploy &amp; Scale"
            text="Implement &amp; Evaluate"
            image={require('../images/scale_img@2x.png')} />
          </div>
        </div>
    </div>
    <div className="ContactUs">
      <div className="Title">
        <h1>Contact US</h1>
        <p>Email us at<span className="Underline"><Link to="/">uxuidtcnola@dxc.com</Link></span></p><p>Talk soon!</p>
      </div>
    </div>
</Layout>    
)

export default IndexPage
