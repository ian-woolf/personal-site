import React from 'react'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <p>This page was built with <a href='https://www.gatsbyjs.org/'>GatsbyJS</a>, using the <a href='https://www.gatsbyjs.org/starters/netlify-templates/gatsby-starter-netlify-cms/'>Netlify CMS Starter</a></p>
        </div>
      </footer>
    )
  }
}

export default Footer
