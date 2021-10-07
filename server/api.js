import { Router } from "express";
const db = require("./db.js");

const { MongoClient } = require("mongodb");

const router = new Router();

router.get("/", (_, res) => {
	res.json({ message: "Hello, world!" });
});

router.get("/databases", (_, res) => {
	async function main() {
		const uri = process.env.MONGODB_URI;
		const client = new MongoClient(uri);
		try {
			await client.connect();
			// Make the appropriate DB calls
			await listDatabases(client);
		} catch (e) {
			res.json({ e });
		} finally {
			await client.close();
		}
	}
	main().catch(console.error);

	async function listDatabases(client) {
		let databasesList = await client.db().admin().listDatabases();
		let array = [];
		databasesList.databases.forEach((db) => array.push(db.name));
		res.json(array);
	}
});


router.get("/name", (_, res) => {
	const uri = process.env.MONGODB_URI;
	MongoClient.connect(uri, function (err, db) {
		if (err) {
			throw err;
		}
		let dbo = db.db("top100boys");
		dbo.collection("top100boys").findOne({}, function (err, result) {
			if (err) {
				throw err;
			}
			res.json(result.name);
			db.close();
		});
	});
});

router.get("/names", (_, res) => {
	const uri = process.env.MONGODB_URI;
	MongoClient.connect(uri, function (err, db) {
		if (err) {
			throw err;
		}
		let dbo = db.db("top100boys");
		dbo.collection("top100boys")
			.find()
			.toArray((err, result) => {
				res.json(result);
			});
			db.close();
		});
	});

export default router;
