import styles from "./jobDetails.module.css";
import Accordion from "../../components/Accordion";
import LocationPin from "../../public/location-pin.svg";
import TypePin from "../../public/type-pin.svg";
import CategoryPin from "../../public/category-pin.svg";

const jobDetails = ({ jobData }) => {
  return (
    <div className={styles["container"]}>
      <p className={styles["heading"]}>{jobData.title}</p>
      <div className={styles["metadata"]}>
        <div className={styles["metadata-container"]}>
          <LocationPin fill="#34568B" />
          <p>{jobData.location}</p>
          
        </div>
        <div className={styles["metadata-container"]}>
          <CategoryPin fill="#6B5B95" />
          <p>{jobData.job_category}</p>
        </div>
        <div className={styles["metadata-container"]}>
          <TypePin fill="#6B5B95" />
          <p>{jobData.job_type}</p>
        </div>
      </div>
      <button className={styles["apply-button"]}>Apply</button>
      <div className={styles["description-wrapper"]}>
        <p className={styles["description"]}>{jobData.description}</p>
        {jobData.responsibilities && jobData.responsibilities.length ? (
          <div className={styles["responsibilities-wrapper"]}>
            <p>Responsibilities</p>
            <ul className={styles["responsibilities-list"]}>
              {jobData.responsibilities.map((item, idx) => (
                <li key={idx} className={styles["responsibilities-list--item"]}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {jobData.requirements && jobData.requirements.length ? (
          <div className={styles["requirements-wrapper"]}>
            <p>Requirements</p>
            <ul className={styles["requirements-list"]}>
              {jobData.responsibilities.map((item, idx) => (
                <li key={idx} className={styles["requirements-list--item"]}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {/* <div className={styles["accordion-wrapper"]}>
          <Accordion className={styles["accordion"]} />
        </div> */}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const id = context?.params?.id;
  const elasticResponse = await fetch(`http://localhost:9200/mapping_practice/_doc/${id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Basic ${Buffer.from("elastic:123456").toString("base64")}`,
    },
  }).then((res) => res.json());

  if (!elasticResponse || !elasticResponse?.found) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      jobData: elasticResponse._source,
    },
  };
}

export default jobDetails;
