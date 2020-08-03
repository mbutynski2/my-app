import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/Card"


const Work = () => (
  <Layout>
    <SEO title="Work" />
    <div className="Portfolio">
      <div className="PortfolioGroup HeroInterior">
        <Link to="Work"><img src={require ('../images/AnalyticsHero@2x.png')}/></Link>
        <div>
        <h2>Analytics +</h2>
        <h5>Leadership Reporting Application</h5>
        </div>
      </div>
    </div>

    <div className="Intro">
        <div className="IntroGroup">
            <h4>Role</h4>
            <h4>Timeframe</h4>
            <p>UX/UI Technical Developer Lead</p>
            <p>14 weeks</p>
        </div>
    </div>

    <div className="Content">
        <h4>Overview</h4>
        <p>DXC was assigned as the delivery center to develop an application for a fortune 250 IT company based on the UX design by a third-party design firm. This is a designer led initiative by our client so it is critical to highlight our front-end development capability. My role was the UX/UI Lead Technical Developer where I was tasked to outline specifics of the UI, formalize execution of the front-end, and review the design before stakeholder review. </p>
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

export default Work
