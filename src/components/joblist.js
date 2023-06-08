


import React, { useState } from "react";
import jobs from "./data.json";
import { Link } from "react-router-dom";

const JobLists = () => {
  const [jobData, setJobData] = useState(jobs);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchByLocation, setSearchByLocation] = useState("");


  const searchTermValue = searchTerm.toLowerCase();

  const locationSearchHandler = () => {
    const filteredData = jobs.filter((job) =>
      job.location.toLowerCase().includes(searchByLocation.toLowerCase())
    );
    setJobData(filteredData);
  };

  const filterJobData = (e) => {
    const selectedFilter = e.target.value;

    if (selectedFilter === "full-time") {
      const filteredData = jobs.filter((job) => job.contract === "Full Time");
      setJobData(filteredData);
    } else if (selectedFilter === "part-time") {
      const filteredData = jobs.filter((job) => job.contract === "Part Time");
      setJobData(filteredData);
    } else if (selectedFilter === "freelance") {
      const filteredData = jobs.filter((job) => job.contract === "Freelance");
      setJobData(filteredData);
    } else if (selectedFilter === "contract") {
      const filteredData = jobs.filter((job) => job.contract === "Contract");
      setJobData(filteredData);
    } else {
      setJobData(jobs);
    }
  };

  return (
    <section className="job__list">
      <div className="container">
        <div className="search__panel">
          <div className="search__panel-01">
            <span>
              <i className="ri-search-line"></i>
            </span>
            <input
              type="text"
              placeholder="Filter by title, companies, expertise…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="v-line"></div>

          <div className="showBox">
            <div className="search__panel-02">
              <span>
              <i className="ri-map-pin-line"></i>
              </span>
              
              <input
                type="text"
                placeholder="Filter by location"
                value={searchByLocation}
                onChange={(e) => setSearchByLocation(e.target.value)}
              />
            </div>

            <div className="v-line"></div>
            
            <div className="search__panel-03">
            
              <select onChange={filterJobData}>
                <option>Filter job by</option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="freelance">Freelance</option>
                <option value="contract">Contract</option>
              </select>
              

              <button className="btn " onClick={locationSearchHandler}>
                Search
              </button>
            </div>

            <button className="btn " onClick={locationSearchHandler}>
              Search
          </button>

          </div>
         
          
        </div>

        

        <div className="job__list__wrapper">
          <div className="jobs__wrapper">
            {jobData
              ?.filter((job) => {
                if (searchTerm === "") return true;
                return (
                  job.position.toLowerCase().includes(searchTermValue) ||
                  job.company.toLowerCase().includes(searchTermValue)
                );
              })
              .map((item) => (
                <div className="job__item" key={item.id}>
                  <img
                    src={item.logo}
                    style={{ background: item.logoBackground }}
                    alt=""
                  />

                  <div className="job__content">
                    <h6>
                      {item.postedAt} . {item.contract}
                    </h6>
                    <h1>
                      <Link className="darkModeh1" to={`/jobs/${item.position}`}>
                        {item.position}
                      </Link>
                    </h1>
                    <p>{item.company}</p>

                    <div className="location">
                      <p>
                        <span>{item.location}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <button className="btn btn__load" onClick={locationSearchHandler}>
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobLists;
