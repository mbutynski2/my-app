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
        <h1>User Experience is essential for digital transformation</h1>
        <p>Get to know the UX team, our process, <br />and some of our latest works from the New Orleans Digital Delivery Center.</p>
        <div>
        <Link to="/using-typescript/">Portfolio</Link>
        </div>
      </div>
    </div>
    
  </Layout>
)

export default IndexPage

