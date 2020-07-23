import sqlite3
from flask_restful import Resource, reqparse
from models.user import UserModel


class UserRegister(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('username',
            type=str,
            required=True,
            help="Username Field cannot be left blank"
        )
    parser.add_argument('password',
            type=str,
            required=True,
            help="Password Field cannot be left blank.. would you just leave your doors unlocked??"
        )
    parser.add_argument('Full name',
            type=str,
            required=True,
            help="Please enter your full name"
        )
    parser.add_argument('Email',
            type=str,
            required=True,
            help="Email field cannot be left blank, how will we contact you?"
        )
    parser.add_argument('Phone number',
            type=int,
            required=True,
            help="Phone number field cannot be left blank, how will we contact you?"
        )

    def post(self):
        data = UserRegister.parser.parse_args()

        if UserModel.find_by_username(data['username']):
            return {"message": "That username is already in use"}, 400

        user = UserModel(**data)
        user.save_to_db()

        return {"message": "User created successfully."},201