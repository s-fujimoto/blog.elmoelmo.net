import React from "react";
import Layout from "../components/layout";


const HitsPage = () => (
  <Layout location="empty" title="empty page">
    <h2 data-count="2">2件ヒットしました</h2>
    <ul>
      <li>けっか１</li>
      <li>けっか２</li>
    </ul>
  </Layout>
)

export default HitsPage
