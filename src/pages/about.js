import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import PartnerLogos from "../components/Home/PartnerLogos"
import styles from "../css/single-blog.module.css"
import Cooperation from "../components/Home/Cooperation"
import SignIn from "../components/Home/SignIn"
import Team from "../components/Home/Team"
import SEO from '../components/SEO'
import ServicesV2 from "../components/Home/ServicesV2"

const about = ({ data }) => {
  return (
    <Layout>
      <SEO title="O nama"/>
      <StyledHero img={data.aboutUsBcg.childImageSharp.fluid} />
      <section className={styles.blog}>
        <div className={styles.center}>
          <h4>o nama</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            qui atque aperiam consequatur. Molestiae minima consequatur
            dignissimos explicabo repellat soluta, eaque impedit reprehenderit
            alias, maiores aspernatur adipisci quod tempora quaerat. Cupiditate
            voluptate dolores magni consequuntur ad numquam sunt sapiente vero.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            qui atque aperiam consequatur. Molestiae minima consequatur
            dignissimos explicabo repellat soluta, eaque impedit reprehenderit
            alias, maiores aspernatur adipisci quod tempora quaerat. Cupiditate
            voluptate dolores magni consequuntur ad numquam sunt sapiente vero.
          </p>
          
        </div>
      </section>
      {/* <SignIn /> */}
      <ServicesV2/>
      {/* <Cooperation /> */}
      {/* <Team /> */}
      <PartnerLogos />
    </Layout>
  )
}

export const query = graphql`
  query {
    aboutUsBcg: file(relativePath: { eq: "aboutUsBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default about
