var mongoose = require("mongoose");

// Local Database Configuration with Mongoose
// mongoose.connect("mongodb://localhost/goodnews", function(error) {
//     if (error) throw error;
//     console.log("Database connected");
// });

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/goodnews",
    function(error) {
        if (error) throw error;
        console.log("Database connected");;

        // mLab database
        mongoose.connect(MONGODB_URI, function(err) {
            if (err) throw err;
            console.log('database connected');
        });

        // var "mongodb://heroku_tjfptdzd:496k70poqndda9fd5uub3qe2g4@ds125146.mlab.com:25146/heroku_tjfptdzd"