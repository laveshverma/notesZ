const mongoose  = require("mongoose")
const mongoURI = "mongodb://127.0.0.1:27017/notesZ"

const ConnectToMongo = ()=>{
   mongoose.connect(mongoURI).then((res)=>{
      console.log("connected to mongo successfully")
   }).catch((err)=>{console.log("Not Connected",err.message)})
}

// async function ConnectToMongo()  {

//    let connect=()=>{
//     mongoose.connect(mongoURI,res)
//     return("connection successfull");
//    }
//    let msg = await connect;
//    console.log(msg);
// }
module.exports = ConnectToMongo;