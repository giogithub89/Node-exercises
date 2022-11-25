import app from "./app";

const port = 3000;
app.listen(port, () => {
    console.log(`[server]: server is runnig at http://localhost:${port}`);
});
