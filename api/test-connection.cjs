const mongoose = require("mongoose");

const uri = "mongodb+srv://fiveruser:f3CUZSsO7CvneZd5@cluster0.t7rbiup.mongodb.net/fiverr?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB Atlas!"))
.catch((err) => console.error("❌ Connection failed:", err.message));
