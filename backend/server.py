from flask import Flask
from flask import request
from matplotlib.pyplot import show
from pymongo import MongoClient
import json
import flask
from bson import ObjectId
from flask import jsonify
from bson import json_util


class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)



app = Flask(__name__)


@app.route("/data")
def data():
    x = showRecords()
    print(x)
    return x


@app.route("/dataRecive",  methods=['POST'])
def takeData():
    data = request.get_json()
    print("Entry\nEmail:", data["data"]["email"])
    print("Password:", data["data"]["password"])
    print(data)
    getConnectonMongoDB(data["data"])
    return 'Done', 201


def getConnectonMongoDB(data):
    client = MongoClient('localhost', 27017)
    db = client.userDB
    loginInfo = db.loginInfo
    loginInfo.insert_one(data)


def showRecords():
    client = MongoClient('localhost', 27017)
    db = client.userDB
    loginInfo = db.loginInfo.find()
    print(loginInfo)
    data = [todo for todo in loginInfo]
    print(data)
    # return JSONEncoder().encode(data)
    return json.dumps(data, default=json_util.default)


if __name__ == "__main__":
    app.run(debug=True)
