import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import SEO from '../components/SEO'

const incubator = ({ data }) => {
  return (
    <Layout>
      <SEO title="Inkubator"/>
      <StyledHero img={data.defaultBcg.childImageSharp.fluid} />
    </Layout>
  )
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default incubator
