from db import db

class EntryModel(db.Model):
    __tablename__ = 'entry'

    visit_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    signIn = db.Column(db.DateTime)
    signOut = db.Column(db.DateTime)
# align proper pk and foriegn
    checklist = db.relationship('CheckListModel')

    def __init__(self, signIn, signOut):
        self.signIn = signIn
        self.signOut = "End of day"

    # def json(self):
    #     return {'name': self.name, 'items': [item.json() for item in self.items.all()]}

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()