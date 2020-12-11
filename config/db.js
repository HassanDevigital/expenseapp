const mongoose = require('mongoose');

const connectDB = async()=>{
try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {

        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });
    console.log(`MONGODB IS CONNECTED ${connect.connection.host}`.cyan.underline.bold);
} catch (error) {
    console.log(`Error: ${err.message}`.red);
}

}
module.exports = connectDB;