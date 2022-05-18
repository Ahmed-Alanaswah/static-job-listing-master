import { useState } from "react";

import CardList from "./CardList";
import Header from "./Header";
import SearchBar from "./SearchBar";
import jobsData from "../data.json";

function Parent() {
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

export default Parent;
