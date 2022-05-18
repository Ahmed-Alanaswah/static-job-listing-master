import React from "react";

function SearchBar({ jobs, filterJobs, setFilter }) {
  console.log(filterJobs);
  function clear() {
    setFilter([]);
  }

  function removeFilter(lang) {
    const newfiltr = [...filterJobs];
    newfiltr.splice(newfiltr.indexOf(lang), 1);

    setFilter(newfiltr);
  }

  if (filterJobs.length > 0)
    return (
      <div className="SearchBar">
        <div className="left">
          {filterJobs.map((lang) => {
            return (
              <div>
                <li onClick={() => removeFilter(lang)}>
                  {lang} <span>x</span>
                </li>
              </div>
            );
          })}
        </div>

        <div className="right" onClick={clear}>
          Clear
        </div>
      </div>
    );
}

export default SearchBar;
