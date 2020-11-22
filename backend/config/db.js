import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(
      "MongoDB Connected:".cyan.underline.bold,
      conn.connection.host.cyan
    );
  } catch (error) {
    console.log("Error:".red.underline.bold, error.red);
    process.exit(1);
  }
};

export default connectDB;
