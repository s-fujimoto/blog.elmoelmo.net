import { Link } from "gatsby";
import React from "react";


const AboutPage = () => (
  <main>
    <div>
      <Link to="/empty?q=aaaa">empty</Link>
    </div>
    <div>
      <Link to="/hits?q=ブログ">hits</Link>
    </div>
  </main>
)
export default AboutPage
