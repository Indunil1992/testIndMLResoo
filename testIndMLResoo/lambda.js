let AWS = require('aws-sdk');
const ml = new AWS.MachineLearning();

exports.handler = function(event, context, callback) {
    ml.predict({
    		MLModelId: 'ml-Gb8QvgzHy4K',
    		PredictEndpoint: 'https://realtime.machinelearning.us-east-1.amazonaws.com',
    		Record: {
    	100:1992
    		}
    	}, function (err, data) {
    		if (err) console.log(err, err.stack); 
            // an error occurred
    		else console.log(data);    
            console.log("sucessss");    // successful response
    	});
    
    callback(null, {"message": "Successfully executed"});
}