import { useState } from "react";
import Link from "next/link";
import styles from "./index.module.css";
import LocationPin from "../public/location-pin.svg";
import CategoryPin from "../public/category-pin.svg";
import TypePin from "../public/type-pin.svg";
import LandingPageSearch from "../components/LandingPageSearch/LandingPageSearch";

export default function Home({ aggregationsData }) {
  const [jobData, setJobData] = useState();
  return (
    <>
      <LandingPageSearch aggregationsData={aggregationsData} setJobData={setJobData} />
      {jobData?.hits?.length ? (
        <ul className={styles["jobs-list"]}>
          {jobData.hits.map((job) => (
            <li className={styles["jobs-list--item"]} key={job._id}>
              <Link href={`/jobs/${job._id}`}>
                <a className={styles["job-title"]}>{job._source.title}</a>
              </Link>
              <div className={styles["job-tags"]}>
                <ul>
                  <li>
                    <div className={styles["icon-wrapper"]}>
                      <LocationPin fill="#34568B" />
                    </div>
                    <span>{job._source.location}</span>
                  </li>
                  <li>
                    <div className={styles["icon-wrapper"]}>
                      <CategoryPin fill="#6B5B95" />
                    </div>
                    <span>{job._source.job_category}</span>
                  </li>
                  <li>
                    <div className={styles["icon-wrapper"]}>
                      <TypePin fill="#6B5B95" />
                    </div>
                    <span>{job._source.job_type}</span>
                  </li>
                </ul>
              </div>
              <p className={styles["job-description"]}>{job._source.description}</p>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

export async function getStaticProps(context) {
  const filtersAggregations = await fetch("http://localhost:3000/api/get-filters-aggregations");
  const aggregationsData = await filtersAggregations.json();

  return {
    props: {
      aggregationsData,
    },
    revalidate: 10
  };
}
