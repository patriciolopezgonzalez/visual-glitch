import os
from flask import Flask, render_template

templateDirectory = os.path.dirname(os.path.abspath(__file__))
staticDirectory = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'static')

app = Flask(
    __name__,
    template_folder = templateDirectory,
    static_folder = staticDirectory
)

### Routes ###

@app.route('/test')
def robocop():
    return render_template('test.html')
