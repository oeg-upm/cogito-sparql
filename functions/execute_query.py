from SPARQLWrapper import SPARQLWrapper, JSON, GET, DIGEST
from SPARQLWrapper.Wrapper import POST

def execute_query(query):
    print(query)
    sparql = SPARQLWrapper("http://0.0.0.0:8890/sparql")
    sparql.setQuery(query)
    sparql.setReturnFormat(JSON)
    print('hola1')
    results = sparql.query().convert()
    print(results)
    return results
