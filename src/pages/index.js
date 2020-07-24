import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>User Experience is <span className="Underline">essential</span> for digital transformation</h1>
        <p>Get to know the UX team, our process, <br />and see some of our latest works from the <br />New Orleans Digital Delivery Center.</p>
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

