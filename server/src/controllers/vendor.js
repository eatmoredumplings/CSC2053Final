const db = require('../config/db');
const jwt = require('jsonwebtoken');
const moment = require('moment');
 
const updateInfo = (req, res) => {
   const token = req.cookies.accessToken;
   if (!token) return res.status(401).json("User is not logged in!")
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, vendorInfo) => {
     db.query("UPDATE vendors SET ? WHERE id = ?",
       [req.body, vendorInfo.id],
       (err, data) => {
         if (err) return res.status(500).json(err);
         return res.status(200).json(data)
     });
   });
 }
  const updatePassword = (req, res) => {
   const token = req.cookies.accessToken;
   if (!token) return res.status(401).json("User is not logged in!")
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, vendorInfo) => {
    });
 }

 const editVendor = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("User is not logged in!")

    jwt.verify(token, "jwtSecretKey", (err, vendorInfo) => {
        if (err) return res.status(403).json("Invalid token!")
    
    db.query("UPDATE vendors SET ('email', 'vendorName', 'vendorAddress', 'vendorDescription', 'representativeName', 'contactNumber', 'vendorLink') VALUES (?,?,?,?,?,?,?)",
    [req.body.email, req.body.vendorName, req.body.vendorAddress, req.body.vendorDescription, req.body.representativeName, req.body.contactNumber, req.body.vendorLink],
        (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json('Vendor has been edited.')
        });
    });
 }
 
 module.exports = { updateInfo, updatePassword, editVendor }
