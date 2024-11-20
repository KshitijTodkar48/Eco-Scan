import express, { Request, Response } from "express";
import cors from "cors";
import imageRoute from "./routes/imageRoute";
import offerRoute from "./routes/offerRoute";
import scoreRoute from "./routes/scoreRoute";

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/images", imageRoute);
app.use("/api/scores", scoreRoute);
app.use("/api/offers", offerRoute);

app.listen(PORT, () => {
    console.log(`Server Running on PORT: ${PORT}`);
})