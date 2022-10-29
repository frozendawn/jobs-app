export const getJobCategoryOptions = (aggregations) => {
  const bucketData = aggregations?.aggregations?.job_category_aggregation?.buckets;

  if (bucketData) {
    const result = [];
    for (let jobType of bucketData) {
      result.push(
        <option key={jobType.key} value={jobType.key}>{jobType.key}</option>
      )
    }
    return result;
  } else {
    return;
  }
}