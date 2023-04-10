from flask import Blueprint, render_template

# Creating a blueprint

# A blueprint is a selection of common endpoints/routes to complete modularity to the flask applications

# Create the blueprint for the items, which will store all the endpoints related to the items itself.
html_bp = Blueprint("html", __name__)


@html_bp.route("/")
def create_item():
    return render_template("index.html")
