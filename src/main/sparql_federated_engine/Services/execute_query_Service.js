const newEngine = require("@comunica/actor-init-sparql").newEngine;

async function executeQuery(query){

  // sources to execute federated queries
  const sources = [
    { type: 'sparql', value: 'https://dbpedia.org/sparql' },
    { type: 'hypermedia', value: 'http://data.linkeddatafragments.org/viaf' },
    { type: 'hypermedia', value: 'http://data.linkeddatafragments.org/harvard' },
  ];

  // Execute the query
  const result = await newEngine().query(query, { sources: sources });

  const { data } = await newEngine().resultToString(result,
    'application/sparql-results+json');
  return data;


}

module.exports = { executeQuery };