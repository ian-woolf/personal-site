import { graphql } from 'gatsby'
import React from 'react'

import Layout from '../../components/Layout'
import Gallery from '@browniebroke/gatsby-image-gallery'
import '@browniebroke/gatsby-image-gallery/dist/style.css'

const IndexPage = ({ data }) => {
  const fullSize = data.images.edges.map((edge) => edge.node.full.fluid.src)
  const thumbs = data.images.edges.map((edge) => edge.node.thumb.fluid)
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
              <Gallery images={fullSize} thumbs={thumbs} colWidth={100/1} mdColWidth={100/3}/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ImagesForGallery {
    images: allFile(
      filter: {sourceInstanceName: {eq: "images"}, relativeDirectory: {eq: "gallery"}}
      sort: {fields: name, order: DESC }
    ) {
      edges {
        node {
          id
          thumb: childImageSharp {
            fluid(maxWidth: 270, maxHeight: 270) {
              ...GatsbyImageSharpFluid
            }
          }
          full: childImageSharp {
            fluid(
              maxWidth: 4608
              quality: 75
              srcSetBreakpoints: [576, 768, 992, 1200]
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default IndexPage