exports.counter = function(modelName,) {
	modelName.countDocuments({}, function(err, count) {

     if (err) { return handleError(err) } //handle possible errors
       	var counter = count
        // console.log("this is the number of users", count)
        //and do some other fancy stuff
        
    })
     return counter
	
};