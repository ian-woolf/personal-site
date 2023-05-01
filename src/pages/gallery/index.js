import { graphql } from 'gatsby'
import React from 'react'

import Layout from '../../components/Layout'
import Gallery from '@browniebroke/gatsby-image-gallery'

const IndexPage = ({ data }) => {
  const images = data.allFile.edges.map(({ node }) => node.childImageSharp)
  let title = "Gallery";
  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <p>I enjoy taking pictures when travelling or visiting new places. This is a selection of my favourites.</p>
              <br></br>
              <Gallery images={images} colWidth={100}/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ImagesForGallery {
    allFile(
      filter: {sourceInstanceName: {eq: "images"}, relativeDirectory: {eq: "gallery"}}
      sort: {fields: name, order: DESC }
    ) {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 270
              height: 270
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`

export default IndexPage