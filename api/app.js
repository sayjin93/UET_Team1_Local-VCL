import express from "express";
import cookieParser from "cookie-parser";
import 'dotenv/config'

// Middlewares
import corsCorsMiddleware from "./middleware/corsMiddleware.js";

//Routes Imports
import authRoute from "./routes/auth.route.js"
import userRoute from "./routes/user.route.js"
import postRoute from "./routes/post.route.js"
import chatRoute from "./routes/chat.route.js"
import messageRoute from "./routes/message.route.js"

// Initialize express
const app = express();
const port = process.env.PORT || 5000;

// app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

app.use(express.json());
app.use(cookieParser());
app.use(corsCorsMiddleware);

app.get('/', (req, res) => {
    res.json({
        message: '👋 UET_Team1_local-VLC API is working ',
    });
});

// Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

// Listener
app.listen(port, () => {
    console.log(`\x1b[36m%s\x1b[0m`, `Server listening on: http://localhost:${port}/`);
});