import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/Card"


const Work = () => (
  <Layout>
    <SEO title="Work" />
    <div className="CasestudyHero">
        <Link to="Work"><img src={require ('../images/AnalyticsHero@2x.png')}/></Link>
    </div>

    <div className="CasestudyTitle">
        <h2>Analytics +</h2>
        <h5>Leadership Reporting Application</h5>
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
        <p>A fortune 250 IT company requested DXC to develop an application designed by a third-party firm. In my role as the UX/UI Lead Technical Developer, I was tasked to outline specifics of the UI, formalize execution of the front-end, and facilitate communication with all stakeholders.</p>
            <div><img src={require ('../images/analytics_chart.png')}/>
            </div>
    </div>

    <div className=" Content Callout">
        <h3>Goal</h3>
        <p>The goal was to deliver an MVP for client beta testing in 14 weeks. A side goal was to show our client and the design firm that we are strong in development and can partner together seamlessly for future projects.</p>
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
