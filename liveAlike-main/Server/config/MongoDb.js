const mongoose = require('mongoose')
require('dotenv').config()


const connectDatabase = async()=>{
    
    try{
        const connection = await mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology: true,
            useNewUrlParser:true,

        });

        console.log("Connected To MongoDb");


    }catch(error){
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }

};

module.exports = connectDatabase;
// export default connectDatabase;