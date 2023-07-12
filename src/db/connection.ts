import mongoose from "mongoose";

require("dotenv").config();

const db = {
  connect: async () => {
    await mongoose.connect(process.env.MONGODB_CNN || "");
  },
};

export { db };
