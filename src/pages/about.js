import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";


const AboutPage = () => (
  <Layout location="about" title="about page">
    <div>
      <Link to="/empty/?q=aaaa">empty</Link>
    </div>
    <div>
      <Link to="/hits/?q=ブログ">hits</Link>
    </div>
    <div>
      <Link to="/tenhits/?q=こんにちは">10 hits</Link>
    </div>
  </Layout>
)

export default AboutPage
