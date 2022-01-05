from flask import Flask, render_template, request, jsonify
from functions.execute_query import execute_query

app = Flask(__name__)

@app.route("/", methods=['GET'])
def home():
    return render_template('sparql.html')

# @app.route("/", methods=['POST'])
# def query_manager():
#     return render_template('sparql.html')


@app.route("/query" , methods=['POST'])
def get_query():
    query = request.args.get('query')
    results = execute_query(query)
    return jsonify(results)



if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5000)
