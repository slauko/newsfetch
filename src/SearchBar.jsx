export default function SearchBar(props) {
  const handleTimestamp = (e) => {
    const currentSelected = e.target.value;

    const secondsPerDay    = 60*60*24;
    const currentTimestamp = Date.now()/1000;
    if (currentSelected === "alltime") {
      return props.setTimestamp(0)
    }
    if (currentSelected === "lastday") {
      return props.setTimestamp(currentTimestamp-secondsPerDay)
    }
    if (currentSelected === "lastweek") {
      return props.setTimestamp(currentTimestamp-(secondsPerDay*7))
    }
    if (currentSelected === "lastmonth") {
      return props.setTimestamp(currentTimestamp-(secondsPerDay*30))
    }
    if (currentSelected === "lastyear") {
      return props.setTimestamp(currentTimestamp-(secondsPerDay*365))
    }
  }

  return (
    <>
      <div className='SearchBar' style={{display: "flex",justifyContent: "space-between", height: "50px", background: "#ff742c"}}>
        <div className="Logo" style={{display: "flex", minWidth: "150px"}}>
          <img src="https://hn.algolia.com/packs/media/images/logo-hn-search-a822432b.png" alt="" srcset="" />
          <div className="LogoCapture">
            <div>Search</div>
            <div>Hacker News</div>           
          </div>
        </div>
        <input type="text" onChange={(e) => props.setSearch(e.target.value)} style={{display: "flex", alignSelf: "center", justifySelf: "left" ,width: "50%", height: "50%"}}/>
        <input type="button" value="SETTINGS" />
      </div>
      <div className='NavBar' style={{display: "flex", justifyContent: "space-between"}}>
        <div>
          Search: 
          <select name="search" id="" onChange={(e)=>props.setCategory(e.target.value)}>
            <option value="">All</option>
            <option value="story">Stories</option>
            <option value="comment">Comments</option>
          </select>
          by: 
          <select name="by" id="" onChange={(e)=>props.setPopularity(e.target.value)}>
            <option value="popularity">Popularity</option>
            <option value="date">Date</option>
          </select>
          for: 
          <select name="for" id="" onChange={handleTimestamp}>
            <option value="alltime">All Time</option>
            <option value="lastday">Last 24h</option>
            <option value="lastweek">Past Week</option>
            <option value="lastmonth">Past Month</option>
            <option value="lastyear">Past Year</option>
          </select>
        </div>
        <div>
          {props.response.nbHits ? `${props.response.nbHits} results (${props.response.processingTimeMS/1000} seconds)` : null}
        </div>
      </div>
    </>
  )
}
