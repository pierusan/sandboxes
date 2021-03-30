import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

const app = express();

// Log all routes
app.use(morgan("common"));

// Remove some headers, like "X-Powered by: Express".
// Add some more, like "X-Frame-Options: SAMEORIGIN", preventing this from being
// loaded in an iframe, etc.
app.use(helmet());

// Only request coming from
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === "production" ? "🥞" : error.stack,
  });
});

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
