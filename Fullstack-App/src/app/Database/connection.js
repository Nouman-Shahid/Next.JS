const { default: mongoose } = require("mongoose");

const connection = {};
export const connectionToDatabase = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connections");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connection[0].readyState;
  } catch (error) {
    console.log(error);
  }
};
