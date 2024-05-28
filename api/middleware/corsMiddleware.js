import cors from 'cors';
import 'dotenv/config';

const corsCorsMiddleware = (req, res, next) => {
    const origin = req.header('Origin');
    const allowedOrigins = [process.env.CLIENT_URL, process.env.SOCKET_URL];

    if (allowedOrigins.includes(origin)) {
        cors({ origin: process.env.CLIENT_URL, credentials: true })(req, res, next);
    } else {
        cors({ origin: '*' })(req, res, next);
    }
};

export default corsCorsMiddleware;
