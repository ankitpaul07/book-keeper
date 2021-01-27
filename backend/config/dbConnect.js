//don
//Me0HLv5y2jrqkgfc
//mongodb+srv://don:<password>@cluster0.snher.mongodb.net/test
const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    mongoose.connect(
      process.env.MONGODB_URL,
      {
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true,
      },
      () => {
        console.log('DB connected');
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect;
