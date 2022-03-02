import { useEffect, useState } from 'react';
import './App.css';
import PageNav from './PageNav';
import ResultBox from './ResultBox';
import SearchBar from './SearchBar';

function App() {
  const API = "http://hn.algolia.com/api/v1/";
  const [page, setPage]             = useState(0);
  const [search, setSearch]         = useState("");
  const [category, setCategory]     = useState("");
  const [popularity, setPopularity] = useState("popularity");
  const [timestamp, setTimestamp]   = useState(0);
  const [request, setRequest] = useState("");
  
  const [response, setResponse] = useState({hits: []});
  
  useEffect(() => {
    if (popularity === "date") {
      setRequest(API+`search_by_date?query=${search}&page=${page}&tags=${category}&numericFilters=created_at_i>${timestamp}`);
    }else{
      setRequest(API+`search?query=${search}&page=${page}&tags=${category}&numericFilters=created_at_i>${timestamp}`);
    }
  }, [page, search, category, popularity, timestamp])
  
  useEffect(() => {
    fetch(request).then(res => res.json()).then(data => setResponse(data))
  }, [request])

  return (
    <div className="App">
      <SearchBar response = {response} setSearch = {setSearch} setCategory = {setCategory} setPopularity = {setPopularity} setTimestamp = {setTimestamp} />
      <ResultBox response = {response} />
      <PageNav response = {response} setPage={setPage}/>
    </div>
  );
}

export default App;
