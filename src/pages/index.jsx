import React from "react"
import { graphql } from "gatsby"
import { Cards, Hero, SiteMetadata } from "../components"
import { Layout } from "../layouts/Layout"

export default ({ data }) => {
  return (
    <Layout>
      <SiteMetadata
        title="May we leave?"
        description="Check when the borders in your country will open again."
        image={data.hero.url}
      />
      <Hero
        image={data.hero}
        tag="#stayhome"
        title="May we leave?"
        description="It's not responsible to travel now. But here's when you can go again"
      />
      <div style={{backgroundColor: '#EB475A', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '300px', marginTop: '10px'}}>
      <div style={{color: '#ffffff', fontWeight:'bold', width: '250px'}}>
      Please note the information on this website was last updated in March, 2020. For up-to-date information refer to your local government's website or other reputable sources
      </div>
      </div>
      <Cards nodes={data.items.nodes} />
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery($tableName: String!) {
    hero: file(relativePath: { eq: "hero-travel.jpg" }) {
      ...HeroImageFragment
    }
    items: allAirtable(filter: { table: { eq: $tableName } }) {
      nodes {
        data {
          country
          image {
            ...CardImageFragment
          }
          name
          slug
          summary
        }
      }
    }
  }
`
