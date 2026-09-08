import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectdb from "./database.js";
import router from "./router/foodroute.js";

dotenv.config();

const app = express();

connectdb();

app.use(cors());
app.use(express.json());

app.use("/api/foods", router);

app.get("/", (req, res) => {
  res.send("Food Delivery Server is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;