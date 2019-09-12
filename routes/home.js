import express from 'express';
import HomeController from '../controller/quote'
const router = express.Router();


router.route('/')
    .get(HomeController.home)

router.route('/request_quote')
    .post(HomeController.request_quote)




export default router;

