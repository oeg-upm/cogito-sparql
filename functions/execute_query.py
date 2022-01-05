from SPARQLWrapper import SPARQLWrapper, JSON, POST, BASIC



def execute_query(query):
    sparql = SPARQLWrapper("http://sparql.org/sparql")
    sparql.setHTTPAuth(BASIC)
    sparql.setMethod(POST)
    sparql.setQuery(query)    
    sparql.setReturnFormat(JSON)
    results = sparql.query().convert()
    return results

