export default async (req, res) => {
  const query = req.body?.elasticQuery;

  const elasticResponse = await fetch(`${process.env.NEXT_PUBLIC_ELASTICSEARCH_URL}/${process.env.NEXT_PUBLIC_JOBS_INDEX}/_search`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Basic ${Buffer.from("elastic:123456").toString("base64")}`,
    },
    body: query,
  });

  const data = await elasticResponse.json();

  res.json(data);
};
