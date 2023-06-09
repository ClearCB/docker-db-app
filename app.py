from flask import Flask
from flask_cors import CORS

from resources.inventory import inventory_bp
from resources.items import items_bp
from resources.form import html_bp


def init_app():
    app = Flask(__name__)

    CORS(app)

    app.register_blueprint(inventory_bp)
    app.register_blueprint(items_bp)
    app.register_blueprint(html_bp)

    return app


if __name__ == "__main__":
    init_app().run(host="0.0.0.0", debug=True)
