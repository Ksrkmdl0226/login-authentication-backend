const mongoose = require("mongoose");

const connectDb = (url) => {
  return mongoose
    .connect(url)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

module.exports = connectDb;


// mongoose.connect('mongodb://localhost/mydatabase', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })  deprecated
