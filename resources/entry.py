from flask_restful import Resource, reqparse
from models.entry import EntryModel

class Entry(Resource):
    def post(self, user_id):
        entry = EntryModel(user_id)
        try:
            entry.save_to_db()
        except:
            return {'message': 'An error occurred while creating the store.'}, 500

        return entry.json(), 201

        # build a def put(): in to update sign out time stamp
    

class EntryList(Resource):
    def get(self):
        return {'entries': [entry.json() for entry in EntryModel.query.all()]}