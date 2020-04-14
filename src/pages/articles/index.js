import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
//import image from '../../img/blog-index.jpg'
import { graphql, StaticQuery } from "gatsby"
//import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'

export default class BlogIndexPage extends React.Component {
  render() {

    return (
      <StaticQuery
        query={graphql`
          query {
            image: file(relativePath: { eq: "blog-index.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 4160, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <Layout>
            <BackgroundImage
              Tag="div"
              className="full-width-image-container"
              fluid={data.image.childImageSharp.fluid}
              backgroundColor={`#040e18`}
            >
              <h1
                className="has-text-weight-bold is-size-1"
                style={{
                  boxShadow: '0.5rem 0 0 #228822, -0.5rem 0 0 #228822',
                  backgroundColor: '#228822',
                  color: 'white',
                  padding: '1rem'
                }}
              >
                Articles
              </h1>
            </BackgroundImage>
            <section className="section">
              <div className="container">
                <div className="content">
                  <BlogRoll />
                </div>
              </div>
            </section>
          </Layout>
        )}
      />
    );
  }
}

/*export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "../../img/blog-index.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`*/
