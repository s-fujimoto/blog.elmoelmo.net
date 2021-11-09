import React from "react";
import Layout from "../components/layout";


const HitsPage = () => (
  <Layout location="empty" title="empty page">
    <h2 id="search-result" data-count="10">10件ヒットしました</h2>
    <ul>
      <li>けっか１</li>
      <li>けっか２</li>
      <li>けっか３</li>
      <li>けっか４</li>
      <li>けっか５</li>
      <li>けっか６</li>
      <li>けっか７</li>
      <li>けっか８</li>
      <li>けっか９</li>
      <li>けっか１０</li>
    </ul>
  </Layout>
)

export default HitsPage
