// const mongoose = require("mongoose");
// require("dotenv").config();

// exports.connect = () => {
//     mongoose.connect( process.env.MONGODB_URL, {
//         // useNewUrlparser:true,
//         // useUnifiedTopology:true,
//     })
//     .then(console.log(`DB Connection Success`))
//     .catch((err) => {
//         console.log(`DB Connection Failed`);
//         console.log(err);
//         process.exit(1);
//     });
// };

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB Connection Success");
  } catch (error) {

    console.error(process.env.MONGODB_URL);
    console.error("DB Connection Failed");
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;