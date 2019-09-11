import express from 'express';
import passport from 'passport';

import Carousel from '../models/carousel';
import User from '../models/user'
import Category from '../models/category';
import Product from '../models/product';
import Newsletter from '../models/newsletter';
import MessageSchool from '../models/messageSchool';

import School from '../models/school';

const router = express.Router();
// foo${n}bar`
// router.get('/', (req, res) => {    

//     res.render('socrateweb/index', {layout: 'layout/socrateweb'})

// });

router.get('/', (req, res) => {    

    res.render('clientside/index', {layout: false})

});

// router.get('/contact', (req, res) => {    

//     res.render('clientside/contact', {layout: 'layout/socrateweb'})

// });
//this is the shop details 5b3dcf81de387222e4110915


export default router;

// 5d1bfff4aaca805f29d10806