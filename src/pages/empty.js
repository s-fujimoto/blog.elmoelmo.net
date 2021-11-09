import React from "react";
import Layout from "../components/layout";


const EmptyPage = () => (
  <Layout location="empty" title="empty page">
    <h2 id="search-result" data-count="0">ヒットしませんでした</h2>
  </Layout>
)

export default EmptyPage
