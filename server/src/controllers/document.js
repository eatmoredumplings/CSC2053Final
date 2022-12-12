const db = require('../config/db');
const jwt = require('jsonwebtoken');
const moment = require('moment');

const getDocuments = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("User is not logged in!")

    jwt.verify(token, "jwtSecretKey", (err, vendorInfo) => {
        if (err) return res.status(403).json("Invalid token!")

        db.query ("SELECT doc.* FROM documents AS doc JOIN ven ON (ven.id = doc.vendorID) WHERE ven.id = ? ORDER BY doc.createDate DESC",
        [vendorInfo.id],
        (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json(data)
        });
    });
}

const addDocument = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("User is not logged in!")

    jwt.verify(token, "jwtSecretKey", (err, vendorInfo) => {
        if (err) return res.status(403).json("Invalid token!")

        db.query ("INSERT INTO documents ('vendorID','id','name','description','file') VALUES (?,?,?,?,?)",
        [vendorInfo.id, req.body.id, req.body.name, req.body.description, req.body.file],
        (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json('Document has been added.')
        });
    });
}

const deleteDocument = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("User is not logged in!")

    jwt.verify(token, "jwtSecretKey", (err, vendorInfo) => {
        db.query("DELETE from documents WHERE vendorID = ? AND id = ?",
        [vendorInfo.id, req.params.id],
        (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json('Document has been deleted.')
        });
    });
}

module.exports = { getDocuments, addDocument, deleteDocument }