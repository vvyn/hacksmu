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

    # Save to mongodb
    users.insert_one({"id": user_id, "name": user_name, "daily": [], "steps": {}, "friends": [], "requests": []})

    return jsonify({"ok": 1})


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
