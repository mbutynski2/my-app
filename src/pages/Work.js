import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/Card"

const Work = () => (
    <Layout>
      <SEO title="Work" />
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">back</Link>
  
  </Layout>    
  )
  
  export default Work
  