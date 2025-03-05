import mongoose from "mongoose";

const connection = async () => {
  try {
    await mongoose.connect('mongodb+srv://babita:babita12@cluster0.1evlg.mongodb.net/fureverdatabase?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // ✅ Lower timeout
      connectTimeoutMS: 5000, // ✅ Lower connection timeout

    }).then((res) => console.log("mongoose is connected")).catch((err) =>
      console.log('mongoose is not connected', err));

  } catch (error) {
    console.log("connect is failed", error)
  }
}

export default connection


