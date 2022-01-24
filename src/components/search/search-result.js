import { Link } from "gatsby";
import { default as React } from "react";
import {
  connectHitInsights, connectStateResults, Highlight,
  Hits,
  Index,
  Snippet
} from "react-instantsearch-dom";
import aa from 'search-insights';


const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits

  return hitCount > 0 ? (
    <div className="HitCount">
      {hitCount} result{hitCount !== 1 ? `s` : ``}
    </div>
  ) : null
})

const PageHit = ({ hit, insights }) => (
  <div
    data-insights-object-id={hit.objectID}
    data-insights-position={hit.__position}
    data-insights-query-id={hit.__queryID}
  >
    <Link to={hit.slug} onClick={() =>
      insights('clickedObjectIDsAfterSearch', {
        eventName: 'PageClicked'
      })
    }>
      <h4>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h4>
    </Link>
    <Snippet attribute="excerpt" hit={hit} tagName="mark" />
  </div>
)

const HitWithInsights = connectHitInsights(aa)(PageHit);

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <HitCount />
    <Hits className="Hits" hitComponent={HitWithInsights} />
  </Index>
)

const SearchResult = ({ indices, className }) => (
  <div className={className}>
    {indices.map(index => (
      <HitsInIndex index={index} key={index.name} />
    ))}
  </div>
)

export default SearchResult
