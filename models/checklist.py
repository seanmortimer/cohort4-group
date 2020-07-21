from db import db


class CheckListModel(db.Model):
    __tablename__ = 'checklist'

    id = db.Column(db.Integer, primary_key=True)
    fever = db.Column(db.Boolean, default=False)
    cough = db.Column(db.Boolean, default=False)
    sore_throat = db.Column(db.Boolean, default=False)
    chills = db.Column(db.Boolean, default=False)
    runny_nose = db.Column(db.Boolean, default=False)
    fatigue = db.Column(db.Boolean, default=False)
    nausea = db.Column(db.Boolean, default=False)
    vomit = db.Column(db.Boolean, default=False)
    diarrhea = db.Column(db.Boolean, default=False)
    loss_of_appetite = db.Column(db.Boolean, default=False)
    loss_of_smell = db.Column(db.Boolean, default=False)
    muscle_ache = db.Column(db.Boolean, default=False)
    headache = db.Column(db.Boolean, default=False)
    pink_eye = db.Column(db.Boolean, default=False)
    contact_ill = db.Column(db.Boolean, default=False)
    travelled = db.Column(db.Boolean, default=False)
    other = db.Column(db.String(80))

    entry = db.relationship('EntryModel')

    def __init__(self, fever, cough, sore_throat,
                 chills, runny_nose, fatigue, nausea, vomit, diarrhea, loss_of_appetite, loss_of_smell,
                 muscle_ache, headache, pink_eye, contact_ill, travelled, other):
        self.fever = fever
        self.cough = cough
        self.sore_throat = sore_throat
        self.chills = chills
        self.runny_nose = runny_nose
        self.fatigue = fatigue
        self.nausea = nausea
        self.vomit = vomit
        self.diarrhea = diarrhea
        self.loss_of_appetite = loss_of_appetite
        self.loss_of_smell = loss_of_smell
        self.muscle_ache = muscle_ache
        self.headache = headache
        self.pink_eye = pink_eye
        self.contact_ill = contact_ill
        self.travelled = travelled
        self.other = other

    # def json(self):
    #     return {'name': self.name, 'price': self.price}

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

