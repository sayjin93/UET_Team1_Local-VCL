import express from "express";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js"
import userRoute from "./routes/user.route.js"
import postRoute from "./routes/post.route.js"

// Initialize express
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/posts", postRoute);

// Listener
app.listen(port, () => {
    console.log(`Server listening on ${port}`);
})