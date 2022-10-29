export default async (req, res) => {
  const elasticResponse = await fetch('http://localhost:9200/mapping_practice/_search', {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Authorization": `Basic ${Buffer.from("elastic:123456",).toString("base64")}`
    },
    body: JSON.stringify({
      "size": 0,
      "aggs": {
        "job_types_aggregation": {
          "terms": {
            "field": "job_type"
          }
        },
        "location_aggregation": {
          "terms": {
            "field": "location"
          }
        },
        "job_category_aggregation": {
          "terms": {
            "field": "job_category"
          }
        }
      }
    })
  })

  const data = await elasticResponse.json();

  res.json(data)

}