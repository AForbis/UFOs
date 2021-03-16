#%%
from flask import Flask,jsonify,render_template
# %%
app = Flask(__name__)
# %%
@app.route('/html_examples')
def html_examples():
    return render_template('index.html')
# %%
