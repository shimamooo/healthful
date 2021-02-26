from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/form', methods=['POST'])
def server():
  message = request.get_json(force=True)
  name = message['name']
  response = {
    'greeting': 'Hello ' + name
  }
  return jsonify(response)

if __name__ == "__main__":
  app.run()