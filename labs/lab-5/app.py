"""app.py: render and route to webpages"""
from flask import Flask, render_template

from db.server import app

from socketserver import *

app = Flask(__name__)

# create a webpage based off of the html in templates/index.html
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/templates/')
def homepage():
    return render_template("homepage.html")

@app.route('/templates/')
def stuff():
    return render_template("stuff.html")

if __name__ == "__main__":
    # debug refreshes your application with your new changes every time you save
    app.run(debug=True)

