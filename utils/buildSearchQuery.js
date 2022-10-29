export default (query, location, jobType) => {
  let mustClause = {
    must: [],
  };

  if (query.length) {
    mustClause.must.push({
      match_phrase: {
        title: query,
      },
    });
  }

  if (location && location !== "default") {
    mustClause.must.push({
      term: {
        location: {
          value: location,
        },
      },
    });
  }

  if (jobType && jobType !== "default") {
    mustClause.must.push({
      term: {
        job_type: {
          value: jobType,
        },
      },
    });
  }

  const elasticQuery = {
    query: {
      bool: {
        ...mustClause
      },
    },
  };

  return JSON.stringify(elasticQuery);
};
