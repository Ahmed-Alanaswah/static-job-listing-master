import { useState } from "react";
import "./App.css";
import CardList from "./components/CardList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import jobsData from "./data.json";

function App() {
  const [jobs, setJobs] = useState(jobsData);
  const [filterJobs, setFilter] = useState([]);
  return (
    <div className="App">
      <Header />
      <SearchBar
        jobs={jobs}
        setJobs={setJobs}
        filterJobs={filterJobs}
        setFilter={setFilter}
      />
      <CardList
        jobs={jobs}
        setJobs={setJobs}
        filterJobs={filterJobs}
        setFilter={setFilter}
      />
    </div>
  );
}

export default App;
