import express from 'express';
import passport from 'passport';

import Carousel from '../models/carousel';
import User from '../models/user'
import Category from '../models/category';
import Product from '../models/product';

import School from '../models/school';

const router = express.Router();
// foo${n}bar`
router.get('/:school_name', (req, res) => {
    let name = req.params.school_name;
   // Now lets query the school table to get all the school datas
 School.findOne({name: name}, function(err, school_data){
    console.log(school_data)
    var name = school_data.name;
    var bigSlogan = school_data.bigSlogan;
    let bigImage = school_data.bigImage;
    let mediumImage= school_data.mediumImage
    let small_historic_quote= school_data.small_historic_quote
    let advertisement_text_header= school_data.advertisement_text_header
    let advertisement_text_description= school_data.advertisement_text_description
    let advertisement_text_header1= school_data.advertisement_text_header1
    let advertisement_text_description1= school_data.advertisement_text_description1
    let logo = school_data.logo
    let visionStatement = school_data.visionStatement
    let missionStatement = school_data.missionStatement

    res.render('clientFrontEnds/index', {layout: false, name: name, missionStatement:missionStatement, visionStatement: visionStatement, advertisement_text_description1: advertisement_text_description1, advertisement_text_header1: advertisement_text_header1, advertisement_text_description: advertisement_text_description, advertisement_text_header: advertisement_text_header, mediumImage:mediumImage, bigImage: bigImage, bigSlogan: bigSlogan, small_historic_quote: small_historic_quote})
});
});
//this is the shop details 5b3dcf81de387222e4110915

export default router;

// 5d1bfff4aaca805f29d10806