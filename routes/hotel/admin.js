import express from 'express';
import passport from 'passport';
import crypto from 'crypto';
const path = require("path");
var fileExtension = require('file-extension'); 

import sha512 from 'sha512';

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);


const router = express.Router();

function encrypt(text) {
 let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
 let encrypted = cipher.update(text);
 encrypted = Buffer.concat([encrypted, cipher.final()]);
 return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

function decrypt(text) {
 let iv = Buffer.from(text.iv, 'hex');
 let encryptedText = Buffer.from(text.encryptedData, 'hex');
 let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
 let decrypted = decipher.update(encryptedText);
 decrypted = Buffer.concat([decrypted, decipher.final()]);
 return decrypted.toString();
}


router.get('/login', (req, res) => {
    
    res.render('hotel/login/index', {layout: 'layout/hotel', message:{error:"Please Login"}})
  
});

router.post('/login', (req, res) => {
    
    res.redirect('/hotel/admin/dashboard')
  
});

router.get('/dashboard', (req, res) => {
    
    res.render('hotel/admin/index', {layout: 'layout/hotel', message:{error:"Please Login"}})
  
});



















export default router;