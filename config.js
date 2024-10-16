// module.exports = {
//     mongoURI:'mongodb://localhost:27017/SchoolMangement',
// };

// mongoose.connect('mongodb://localhost:27017/mydatabase', {
//     bufferMaxTimeMS: 30000, // Set timeout for all operations
//     server: { socketOptions: { keepAlive: true, connectTimeoutMS: 30000, socketTimeoutMS: 30000 } }
//   });


import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/schoolmanagement', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Connection error:', error);
    process.exit(1); // Exit process with failure
  }
};