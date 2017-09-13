const mongoClient = require('mongodb').MongoClient;

const url = 'mongodb://minder:minder@ds135514.mlab.com:35514/heroku_vgp3rv5b';

const insertDocument = (db, collectionName, document) => 
	db.collection(collectionName).insertOne(document);

exports.receiveText = (req, res) => {
	const message = (({ From, To, Body }) => ({ from: From, to: To, body: Body }))(req.body)

	mongoClient.connect(url, (err, db) => {
		try {
			insertDocument(db, 'inboundMessages', message);
			res.status(200).send();
		} catch (e) {
			res.status(500).send();
		}
	})
}
