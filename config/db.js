const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load env vars
// dotenv.config({ path: './config/config.env'})
const MONGO_URI="mongodb+srv://Sam1729Paul:Sam1729Paul@cluster0-qhlvw.mongodb.net/orders?retryWrites=true&w=majority"
// const uri = process.env.MONGO_URI
const connectDB = async () => {
  const conn = await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold)
}

module.exports = connectDB;