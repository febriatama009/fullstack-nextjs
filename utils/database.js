import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.connect("strictQuery", true);
  if (isConnected) {
    console.log(`MongoDB is connected`);
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log(`MongoDB Finally Connected`);
  } catch (error) {
    console.log(error);
  }
};
