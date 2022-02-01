# COGITO --> sparql_engine

STEPS:

```
npm install
```

```
npm start
```

Query Example:
```
SELECT *
    FROM <http://localhost:8890/uuid:file:0b191257-5397-42b7-ba8d-0835f5bf3f51>
        {
            SERVICE <https://data.cogito.iot.linkeddata.es/sparql> {
            ?s a ?o.
        }
    } LIMIT 10
```