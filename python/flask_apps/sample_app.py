from flask import Flask;
app = Flask(__name__);

@app.route('/sample')
def running():
  return '<h1>Flask is running!</h1>'