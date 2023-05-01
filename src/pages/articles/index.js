import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

const BlogIndexPage = () => {
    let title = "Articles";
    return (
          <Layout>
            <section className="section">
              <div className="container">
                <div className="columns">
                  <div className="column is-10 is-offset-1">
                    <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                      {title}
                    </h2>
                    <div className="content">
                      <BlogRoll />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Layout>
)};

export default BlogIndexPage;