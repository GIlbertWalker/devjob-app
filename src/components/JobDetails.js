import React from "react";
import { useParams } from "react-router-dom";
import jobs from "./data.json";
import { Link } from "react-router-dom";

const JobDetails = () => {
  const { position } = useParams();

  const job = jobs.find((job) => job.position === position);

  return (
    <section className="job__list">
      <div className="container__2">

        <div className="details__top">
          <img
            src={job.logo} 
            style={{ background: job.logoBackground }}
            alt="logo"
          />

          <div className="link__styles">
            <h1>{job.company}</h1>
            <Link className="lin__K" to={job.website}>{job.company}.com</Link>
          </div>

          <button>
            <Link className="lin__K" to={job.website}>Company Site</Link>
          </button>
        </div>

        
          <div className="details__wrapper">
            <div className="job__details">
              <div className="about__job">
                <div>
                  <h6>
                    {job.postedAt} . {job.contract}
                  </h6>
                  <h1>{job.position}</h1>
                  <span>{job.location}</span>
                </div>

                <button className="btn">Apply</button>
              </div>

              <p className="job__desc">{job.description}</p>

              <div className="requirements">
                <h1>Requirements</h1>
                <p>{job.requirements.content}</p>

                <ul className="requirement__item">
                  {job.requirements.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="responsibility">
                <h1>What you will do?</h1>
                <p>{job.role.content}</p>

                <ol type="1" className="responsibility__item">
                  {job.role.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>

  

      <div className="bottom__wrapper">
        <div>
          <h1>{job.position}</h1>
          <span>{job.location}</span>
        </div>

        <button className="btn">Apply</button>
      </div>
      
    </section>
  );
};

export default JobDetails;
