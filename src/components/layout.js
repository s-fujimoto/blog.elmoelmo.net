import { Link } from "gatsby";
import * as React from "react";
import aa from 'search-insights';
import Search from "./search";

const searchIndices = [{ name: `elmo-blog`, title: `elmo-blog` }]

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  aa('init', {
    appId: process.env.GATSBY_ALGOLIA_APP_ID,
    apiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
    useCookie: true,
  })

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <Search indices={searchIndices} />
        {header}
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default Layout
