import sqlite3
from db import db

class UserModel(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80))
    password = db.Column(db.String(80))
    fullName = db.Column(db.String(80))
    eMail = db.Column(db.String(80))
    phoneNumber = db.Column(db.Integer())
    
    def __init__(self, username, password, fullName, eMail, phoneNumber):
        self.username = username
        self.password = password
        self.fullName = fullName
        self.eMail = eMail
        self.phoneNumber = phoneNumber


    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def find_by_username(cls, username):
        return cls.query.filter_by(username=username).first() 

    @classmethod
    def find_by_id(cls, _id):
        return cls.query.filter_by(id=_id).first()