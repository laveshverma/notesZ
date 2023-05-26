const mongoose  = require("mongoose")
const mongoURI = "mongodb://localhost:27017"

let async  ConnectToMongo = () => {

   if (mongoose.connect(mongoURI)){
    console.log("connection successfulll");
}
}
module.exports = ConnectToMongo;