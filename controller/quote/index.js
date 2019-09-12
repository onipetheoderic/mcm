import Quote from '../../models/quote';


exports.home = function(req, res) {
	res.render('clientside/index', {layout: false})
}

exports.request_quote = function(req, res) {
	let quote = new Quote();   	   
	    quote.email = req.body.email;    
	    quote.name = req.body.name;
	    quote.message = req.body.message;

		quote.save(function(err, doc){       
		    if(err){
		        console.log("error durring saving",err);
		        res.render('clientside/index', {layout: false, message:{error: "Quote Not Submitted"} })
		        
		    } else {                    
		        console.log(doc, "successfully save, redirecting now..........")
		        res.render('clientside/index', {layout: false, message:{success: "Quote Submitted"} })
		        // res.redirect('/')
		  
		    }
		});
}

exports.all_quotes = function(req, res) {
	Quote.find({}, function(err, schoolmsgs){
        let school_msgs = schoolmsgs;
        res.render('AdminBSBMaterialDesign-master/quote/messages', {layout: 'layout/admin.hbs', school_msgs: school_msgs})
    })
}
