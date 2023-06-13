// import React, { useState } from "react";
// import jobs from "./data.json";
// import { Link } from "react-router-dom";


// const JobLists = () => {
//   const [jobData, setJobData] = useState(jobs);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchByLocation, setSearchByLocation] = useState("");
//   const [filterValue, setFilterValue] = useState("");
//   const [showOverlay, setShowOverlay] = useState(false); // New state variable for overlay

//   const searchTermValue = searchTerm.toLowerCase();

//   const locationSearchHandler = () => {
//     const filteredData = jobs.filter(
//       (job) =>
//         job.location.toLowerCase().includes(searchByLocation.toLowerCase())
//     );
//     setJobData(filteredData);
//   };

//   const filterJobData = (e) => {
//     const selectedFilter = e.target.value;
//     setFilterValue(selectedFilter);

//     if (selectedFilter === "full-time") {
//       const filteredData = jobs.filter((job) => job.contract === "Full Time");
//       setJobData(filteredData);
//     } else if (selectedFilter === "part-time") {
//       const filteredData = jobs.filter((job) => job.contract === "Part Time");
//       setJobData(filteredData);
//     } else if (selectedFilter === "freelance") {
//       const filteredData = jobs.filter((job) => job.contract === "Freelance");
//       setJobData(filteredData);
//     } else if (selectedFilter === "contract") {
//       const filteredData = jobs.filter((job) => job.contract === "Contract");
//       setJobData(filteredData);
//     } else {
//       setJobData(jobs);
//     }
//   };

//   const toggleOverlay = () => {
//     setShowOverlay(!showOverlay);
//   };

//   return (
//     <section className="job__list">
//       <div className="container">
//         <div className="search__panel">
//           <div className="search__panel-01">
//             <span>
//             <img src="/assets/desktop/icon-search.svg" alt="Search" />
//             </span>

//             <input
//               type="text"
//               placeholder="Filter by title, companies, expertise…"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />

//             <img
//               className="filter"
//               src="assets/mobile/icon-filter.svg"
//               alt="filter"
//               onClick={toggleOverlay} // Open the overlay when filter button is clicked
//             />

//             <button className="btn btnNo" onClick={locationSearchHandler}>  
//             <img src="assets/desktop/icon-search.svg" alt="" />
//             </button>
//           </div>

//           <div className="v-line"></div>

//           <div className="search__panel-02">
//             <span>
//             <img src="/assets/desktop/icon-location.svg" alt="Loc" />
//             </span>

//             <input
//               type="text"
//               placeholder="Filter by location"
//               value={searchByLocation}
//               onChange={(e) => setSearchByLocation(e.target.value)}
//             />
//           </div>

//           <div className="v-line"></div>

//           <div className="search__panel-03">
//             <div className="checkbox">
//               <input
//                 type="checkbox"
//                 id="full-time"
//                 name="job-filter"
//                 value="full-time"
//                 checked={filterValue === "full-time"}
//                 onChange={filterJobData}
//               />
//               <label htmlFor="full-time">Full Time</label>
//             </div>

//             <button className="btn" onClick={locationSearchHandler}>
//               Search
//             </button>
//           </div>
//         </div>

//         {showOverlay && (
//           <div className={`overlay ${showOverlay ? "active" : ""}`}>
//             <div className="search__panel-overlay">
//               {
//                 /* Add the search panel content for the overlay here */
//                 <div className="search__panel">
                    
//                   <div className="search__panel-02">
//                   <span>
//                     <i className="ri-map-pin-line"></i>
//                   </span>
      
//                   <input
//                     type="text"
//                     placeholder="Filter by location"
//                     value={searchByLocation}
//                     onChange={(e) => setSearchByLocation(e.target.value)}
//                   />
//                 </div>             
      
//                 <div className="search__panel-03">
//                   <div className="checkbox">
//                     <input
//                       type="checkbox"
//                       id="full-time"
//                       name="job-filter"
//                       value="full-time"
//                       checked={filterValue === "full-time"}
//                       onChange={filterJobData}
//                     />
//                     <label htmlFor="full-time">Full Time</label>
//                   </div>
      
//                   <button className="btn" onClick={locationSearchHandler}>
//                     Search
//                   </button>
//                 </div>
//               </div>
//               }
//             </div>
//           </div>
//         )}

//         <div className="job__list__wrapper">
//           <div className="jobs__wrapper">
//             {jobData
//               ?.filter((job) => {
//                 if (searchTerm === "") return true;
//                 return (
//                   job.position.toLowerCase().includes(searchTermValue) ||
//                   job.company.toLowerCase().includes(searchTermValue)
//                 );
//               })
//               .map((item) => (
//                 <div className="job__item" key={item.id}>
//                   <img
//                     src={item.logo}
//                     style={{ background: item.logoBackground }}
//                     alt=""
//                   />

//                   <div className="job__content">
//                     <h6>
//                       {item.postedAt} . {item.contract}
//                     </h6>
//                     <h1>
//                       <Link className="darkModeh1" to={`/jobs/${item.position}`}>
//                         {item.position}
//                       </Link>
//                     </h1>
//                     <p>{item.company}</p>

//                     <div className="location">
//                       <p>
//                         <span>{item.location}</span>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//           </div>

//           <button className="btn btn__load" onClick={locationSearchHandler}>
//             Load More
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default JobLists;

import React, { useState } from "react";
import jobs from "./data.json";
import { Link } from "react-router-dom";

const JobLists = () => {
  const [jobData, setJobData] = useState(jobs);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchByLocation, setSearchByLocation] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);

  const searchTermValue = searchTerm.toLowerCase();

  const locationSearchHandler = () => {
    const filteredData = jobs.filter(
      (job) =>
        job.location.toLowerCase().includes(searchByLocation.toLowerCase())
    );
    setJobData(filteredData);
  };

  const filterJobData = (e) => {
    const selectedFilter = e.target.value;

    if (selectedFilter === filterValue) {
      setFilterValue(""); // Uncheck the filter if it's clicked again
    } else {
      setFilterValue(selectedFilter);
    }
  };

  const applyFilter = () => {
    let filteredData = jobs;

    if (filterValue === "full-time") {
      filteredData = jobs.filter((job) => job.contract === "Full Time");
    } else if (filterValue === "part-time") {
      filteredData = jobs.filter((job) => job.contract === "Part Time");
    } else if (filterValue === "freelance") {
      filteredData = jobs.filter((job) => job.contract === "Freelance");
    } else if (filterValue === "contract") {
      filteredData = jobs.filter((job) => job.contract === "Contract");
    }

    setJobData(filteredData);
    toggleOverlay(); // Close the overlay after applying the filter
  };

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <section className="job__list">
      <div className="container">
        <div className="search__panel">
          <div className="search__panel-01">
            <span>
              <img src="/assets/desktop/icon-search.svg" alt="Search" />
            </span>

            <input
              type="text"
              placeholder="Filter by title, companies, expertise…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <img
              className="filter"
              src="assets/mobile/icon-filter.svg"
              alt="filter"
              onClick={toggleOverlay}
            />

            <button className="btn btnNo" onClick={locationSearchHandler}>
              <img src="assets/desktop/icon-search.svg" alt="" />
            </button>
          </div>

          <div className="v-line"></div>

          <div className="search__panel-02">
            <span>
              <img src="/assets/desktop/icon-location.svg" alt="Loc" />
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
            <div className="checkbox">
              <input
                type="checkbox"
                id="full-time"
                name="job-filter"
                value="full-time"
                checked={filterValue === "full-time"}
                onChange={filterJobData}
              />
              <label htmlFor="full-time">Full Time</label>
            </div>

            <button className="btn" onClick={locationSearchHandler}>
              Search
            </button>
          </div>
        </div>

        {showOverlay && (
          <div className={`overlay ${showOverlay ? "active" : ""}`}>
            <div className="search__panel-overlay">
              <div className="search__panel">
                <div className="search__panel-02">
                  <span>
                    <img src="assets/desktop/icon-location.svg" alt="Loc" />
                  </span>

                  <input
                    type="text"
                    placeholder="Filter by location"
                    value={searchByLocation}
                    onChange={(e) => setSearchByLocation(e.target.value)}
                  />
                </div>

                <div className="search__panel-03">
                  <div className="checkbox">
                    <input
                      type="checkbox"
                      id="full-time"
                      name="job-filter"
                      value="full-time"
                      checked={filterValue === "full-time"}
                      onChange={filterJobData}
                    />
                    <label htmlFor="full-time">Full Time</label>
                  </div>

                  </div>
                  <button className="btn" onClick={applyFilter}>
                    Search
                  </button>
              </div>
            </div>
          </div>
        )}

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
