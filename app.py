from flask import Flask, render_template, request, jsonify
from functions.execute_query import execute_query
import json

app = Flask(__name__)

@app.route("/", methods=['GET'])
def home():
    return render_template('enpoint.html')


@app.route("/sparql" , methods=['GET'])
def get_query():
    query = request.args.get("query")
    results = execute_query(query)
    return jsonify(results)



if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5000)



# SELECT * WHERE{ SERVICE <https://wothive.linkeddata.es/api/search/sparql> {?s ?p ?o.} SERVICE <https://localhost:8890/sparql> { ?s1 ?p1 ?o1. } }