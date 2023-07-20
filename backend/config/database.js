
const mongoose = require("mongoose");

exports.connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((con) => console.log(`Database Connected: ${con.connection.host}`))
    .catch((err) => console.log(err));
};

//  this code exports a function connectDatabase that connects to a MongoDB database using Mongoose.
//  It retrieves the connection URI from the MONGO_URI environment variable, connects to the database, 
//  and logs a success message if the connection is established. If there's an error during 
//  the connection, it logs the error.

