import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("CONNECTED TO MONGODB");
  } catch (error) {
    console.log("FAILED CONNECTED TO MONGODB", error);
  }
};
export default connectMongoDB;
