export const getLocations = (aggregations) => {
  const bucketData = aggregations?.aggregations?.location_aggregation?.buckets;

  if (bucketData) {
    const result = [];
    for (let location of bucketData) {
      result.push(
        <option key={location.key} value={location.key}>{location.key}</option>
      )
    }
    return result;
  } else {
    return;
  }

}