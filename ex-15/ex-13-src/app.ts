import express from "express";
import "express-async-errors";

const app = express();
app.get("/planets", (request, response) => {
    response.json("we are live in Mars");
});

export default app;
