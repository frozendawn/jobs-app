import styles from "./LandingPageSearch.module.css";
import ArrowSvg from "../../public/arrow.svg";
import { getLocations } from "../../utils/getLocations";
import { getJobTypeOptions } from "../../utils/getJobTypeOptions";
import buildSearchQuery from "../../utils/buildSearchQuery";
import { getJobCategoryOptions } from "../../utils/getJobCategoryOptions";

const LandingPageSearch = ({aggregationsData, setJobData}) => {
  const locationOptions = getLocations(aggregationsData)
  const jobTypeOptions = getJobTypeOptions(aggregationsData)
  const jobCategoryOptions = getJobCategoryOptions(aggregationsData)



  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const query = formData.get("query")
    const location = formData.get("location")
    const jobType = formData.get("job_type")

    const elasticQuery = buildSearchQuery(query, location, jobType)

    const elasticResponse = await fetch("http://localhost:3000/api/search-jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        elasticQuery
      })
    })

    const data = await elasticResponse.json();
    if(data && !data?.timed_out) {
      setJobData(data.hits)
    }

  }


  return (
    <div className={styles["container"]}>
      <h2>Find a fitting job</h2>
      <form onSubmit={submitHandler}>
        <input placeholder="Search by keyword" name="query" className={`${styles['input-rounded-corners']}`}/>
        <select defaultValue="default" name="location" className={`${styles['input-rounded-corners']}`}>
          <option value="default">Choose location</option>
          {locationOptions}
        </select>
        <select defaultValue="default" className={`${styles['input-rounded-corners']}`}>
          <option value="default">Job Category</option>
          {jobCategoryOptions}
        </select>
        <select defaultValue="default" name="job_type" className={`${styles['input-rounded-corners']}`}>
          <option value="default">Job type</option>
          {jobTypeOptions}
        </select>
        <button className={`${styles['input-rounded-corners']} ${styles["button"]}`} >
          <ArrowSvg fill="#fff" />
        </button>
      </form>
    </div>
  );
};

export default LandingPageSearch;