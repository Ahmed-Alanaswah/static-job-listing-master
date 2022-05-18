import React from "react";

function CardList({ jobs, filterJobs, setFilter }) {
  function filterData(lang) {
    if (!filterJobs.includes(lang)) {
      setFilter([...filterJobs, lang]);
    }
  }
  return jobs
    .filter((job) => {
      let originData = [job.role, job.level, ...job.tools, ...job.languages];
      return filterJobs.every((filteredJob) =>
        originData.includes(filteredJob)
      );
    })
    .map((job) => (
      <div className="card">
        <div className="left">
          <img src={job.logo} alt="" />
          <div className="left-inner-right">
            <ul className="up">
              <li className="company">{job.company}</li>
              {job.new && <li className="new">new </li>}
              {job.featured && <li className="featured">featured</li>}
            </ul>
            <h3>{job.position}</h3>
            <ul className="down">
              <li>{job.postedAt}</li>
              <li>{job.contract}</li>
              <li>{job.location}</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <ul>
            {[job.role, job.level, ...job.tools, ...job.languages].map(
              (lang) => {
                return <li onClick={() => filterData(lang)}>{lang}</li>;
              }
            )}
          </ul>
        </div>
      </div>
    ));
}

export default CardList;
