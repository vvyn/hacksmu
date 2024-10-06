from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from dotenv import load_dotenv
from datetime import datetime
import os

load_dotenv()

app = Flask(__name__)
CORS(app)
client = MongoClient(os.getenv("MONGODB_URI"), 27017)

db = client.flask_db
users = db.users

@app.route("/")
def hello():
    return "Hello World!"

@app.post("/user")
def create_user():
    # Create user from id and name
    data = request.json
    user_id = data["id"]
    user_name = data["name"]

    # Fitness data
    fitness_data = pull_fitness_data()

    # Save to mongodb
    users.insert_one({"id": user_id, "name": user_name, "daily": fitness_data["daily"], "steps": fitness_data["steps"], "friends": [], "requests": []})

    return jsonify({"ok": 1})


def pull_fitness_data():
    # THIS IS MOCK DATA, REPLACE WITH ACTUAL DATA
    return {
        "daily": ["2024-09-01", "2024-09-02", "2024-09-03", "2024-09-04", "2024-09-05", "2024-09-07", "2024-09-08", "2024-09-09", "2024-09-12", "2024-09-13", "2024-09-14", "2024-09-15", "2024-09-16", "2024-09-20", "2024-09-21", "2024-09-22", "2024-09-23", "2024-09-24", "2024-09-25", "2024-09-26", "2024-09-27", "2024-09-28", "2024-09-30", "2024-10-01", "2024-10-02", "2024-10-04", "2024-10-05"],
        "steps": {
            "2024-09-01": 5278,
            "2024-09-02": 14843,
            "2024-09-03": 8774,
            "2024-09-04": 11683,
            "2024-09-05": 12479,
            "2024-09-06": 13025,
            "2024-09-07": 14677,
            "2024-09-08": 9279,
            "2024-09-09": 7326,
            "2024-09-10": 5539,
            "2024-09-11": 9550,
            "2024-09-12": 11126,
            "2024-09-13": 7068,
            "2024-09-14": 10975,
            "2024-09-15": 5305,
            "2024-09-16": 11210,
            "2024-09-17": 10675,
            "2024-09-18": 9256,
            "2024-09-19": 9786,
            "2024-09-20": 5485,
            "2024-09-21": 7142,
            "2024-09-22": 9144,
            "2024-09-23": 6511,
            "2024-09-24": 5461,
            "2024-09-25": 5055,
            "2024-09-26": 12388,
            "2024-09-27": 14943,
            "2024-09-28": 6084,
            "2024-09-29": 8396,
            "2024-09-30": 6143,
            "2024-10-01": 11379,
            "2024-10-02": 13898,
            "2024-10-03": 12438,
            "2024-10-04": 10299,
            "2024-10-05": 6425
        }
    }


@app.get("/user/<id>")
def get_user(id):
    # Get user by id
    user = users.find_one({"id": id})

    return jsonify({"id": user["id"], "name": user["name"], "daily": user["daily"], "steps": user["steps"], "friends": user["friends"], "requests": user["requests"]})


@app.post("/daily")
def add_daily():
    # Add today's date to daily array
    data = request.json
    user_id = data["id"]
    # date = data["date"]

    # # Format date into YYYY-MM-DD
    # if date == None:
    date = datetime.now().strftime("%Y-%m-%d")
    
    # Add date to user's daily array
    users.update_one({"id": user_id}, {"$push": {"daily": date}})

    return jsonify({"ok": 1})


@app.post("/steps")
def add_steps():
    # Add steps to user
    data = request.json
    user_id = data["id"]
    steps = data["steps"]

    date = datetime.now().strftime("%Y-%m-%d")

    # Add a day entry to steps dict
    users.update_one({"id": user_id}, {"$set": {f"steps.{date}": steps}})

    return jsonify({"ok": 1})


@app.post("/friends/request")
def send_friend_request():
    # Send friend request to user
    data = request.json
    user_id = data["id"]
    friend_id = data["friend_id"]

    # Make sure friend does not already have request
    friend = users.find_one({"id": friend_id})
    if user_id in friend["requests"]:
        return jsonify({"ok": 0, "error": "you already have a pending friend request"}), 400

    # Add friend request to user's friends array
    users.update_one({"id": friend_id}, {"$push": {"requests": user_id}})

    return jsonify({"ok": 1})


@app.post("/friends/accept")
def accept_friend_request():
    # Accept friend request from user
    data = request.json
    friend_id = data["id"]
    user_id = data["friend_id"]
    
    # Get the user by ID
    user = users.find_one({"id": user_id})

    if friend_id not in user["requests"]:
        return jsonify({"ok": 0, "error": "invalid friend ID, no pending friend requests"}), 400

    # Update array and set data
    new_reqs = user["requests"]
    new_reqs.remove(friend_id)
    users.update_one({"id": user_id}, {"$set": {"requests": new_reqs}})

    # Add friend to user's friends array
    users.update_one({"id": user_id}, {"$push": {"friends": friend_id}})
    users.update_one({"id": friend_id}, {"$push": {"friends": user_id}})

    return jsonify({"ok": 1})


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8000, debug=True)
